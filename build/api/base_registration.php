<?php
    require_once "helpers/load_env.php";
    require_once "helpers/db_connection.php";
    require "helpers/helpers.php";
    require "helpers/mail_helper.php";

    $conn = OpenCon();

    Helpers::deadline($_REQUEST["admin"] ?? null, ADMIN_KEY);

    $client_addr = $_SERVER["REMOTE_ADDR"];
    if (APP_ENV != "dev") {
        // Prevent spam
        $stmt = $conn->prepare("SELECT * FROM request_addr WHERE address=?");
        $stmt->bind_param("s", $client_addr);
        $stmt->execute();
        $result = $stmt->get_result();
        // TODO: max 4 requests in 12 hours
        while ($row = $result->fetch_assoc()) {
            if ($row["timestamp"] > time() - 60 * 5) {
                http_response_code(400);
                echo "Too many requests.";
                return;
            }
        }
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Validate form
        $form = json_decode(file_get_contents("php://input"), TRUE);
        if (!Helpers::validateRegistrationDTO($form, TRUE)) {
            http_response_code(400);
            echo "Invalid form.";
            return;
        }
            
        if (APP_ENV != "dev") {
            // Check if email in use
            $stmt = $conn->prepare("SELECT * FROM base_registrations WHERE email=?");
            $stmt->bind_param("s", $form["email"]);
            $stmt->execute();
            if ($stmt->get_result()->num_rows) {
                http_response_code(400);
                echo "Email already in use.";
                return;
            }
        }

        // Generate reg key
        do {
            $reg_key = join("-", str_split(strtoupper(bin2hex(random_bytes(10))), 5));
        } while ($conn->query("SELECT reg_key FROM base_registrations WHERE reg_key='{$reg_key}'")->num_rows);

        // Send confirmation email
        if (APP_ENV != "dev") {
            if (!Mail::sendNewRegMail($form["email"], $form["firstName"], $form["lastName"], $reg_key, $form["lang"])) {
                http_response_code(500);
                echo "Error sending confirmation email.";
                return;
            }
        }

        // Insert data into base_registrations
        $stmt = $conn->prepare("INSERT INTO base_registrations(reg_key, email, firstName, lastName, dateOfBirth, country) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $reg_key, $form["email"], $form["firstName"], $form["lastName"], $form["dateOfBirth"], $form["country"]);
        if (!$stmt->execute()) {
            http_response_code(500);
            echo "Error processing request.";
            return;
        } else {
            echo "Registration successful.";
        }
    } else if (isset($_GET["email"]) && $_GET["email"] !== "" && filter_var($_GET["email"], FILTER_VALIDATE_EMAIL) &&
               isset($_GET["lang"]) && (($_GET["lang"] === "en" || $_GET["lang"] === "lt"))
    ) {
        // Resend confirmation mail
        $email = $_GET["email"];
        $stmt = $conn->prepare("SELECT * FROM base_registrations WHERE email=?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        if (!$result->num_rows) {
            http_response_code(400);
            echo "Email not found.";
            return;
        }
        $row = $result->fetch_assoc();
        if (APP_ENV != "dev") {
            if (!Mail::sendNewRegMail($email, $row["firstName"], $row["lastName"], $row["reg_key"], $_GET["lang"])) {
                http_response_code(500);
                echo "Error sending confirmation email.";
                return;
            } else {
                echo "Email successfully resent.";
            }
        }
    } else {
        http_response_code(400);
        echo "Invalid request.";
        return;
    }

    // If successful, remember remote addr
    $stmt = $conn->prepare("INSERT INTO request_addr(address, timestamp) VALUES (?, ?)");
    $timestamp = strval(time());
    $stmt->bind_param("ss", $client_addr, $timestamp);
    $stmt->execute();
?>