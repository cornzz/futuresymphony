<?php
    require_once "load_env.php";
    require "db_connection.php";
    require "helpers.php";
    require "mail.php";

    $conn = OpenCon();

    // Validate form
    $form = json_decode(file_get_contents("php://input"), TRUE);
    if (!ValidateDTO($form, TRUE)) {
        http_response_code(400);
        echo "Invalid form.";
        return;
    }
        
    $client_addr = $_SERVER["REMOTE_ADDR"];
    if (APP_ENV != "dev") {
        // Prevent spam
        $stmt = $conn->prepare("SELECT * FROM request_addr WHERE address=?");
        $stmt->bind_param("s", $client_addr);
        $stmt->execute();
        $result = $stmt->get_result();
        while ($row = $result->fetch_assoc()) {
            if ($row["timestamp"] > time() - 60 * 5) {
                http_response_code(400);
                echo "Too many requests.";
                return;
            }
        }

        // Check if email in use
        $stmt = $conn->prepare("SELECT * FROM new_registrations WHERE email=?");
        $stmt->bind_param("s", $form["email"]);
        $stmt->execute();
        if (mysqli_num_rows($stmt->get_result())) {
            http_response_code(400);
            echo "Email already used.";
            return;
        }
    }

    // Generate reg key
    do {
        $reg_key = join("-", str_split(strtoupper(bin2hex(random_bytes(10))), 5));
    } while (mysqli_num_rows($conn->query("SELECT * FROM new_registrations WHERE reg_key='{$reg_key}'")));

    // Send confirmation email
    if (!sendNewRegMail($form["email"], $form["firstName"], $form["lastName"], $reg_key, $form["lang"])) {
        http_response_code(500);
        echo "Error sending confirmation email.";
        return;
    }

    // Insert data into new_registrations
    $stmt = $conn->prepare("INSERT INTO new_registrations(reg_key, email, firstName, lastName, dateOfBirth, country) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $reg_key, $form["email"], $form["firstName"], $form["lastName"], $form["dateOfBirth"], $form["country"]);
    if (!$stmt->execute()) {
        http_response_code(500);
        echo "Error processing request.";
        return;
    }

    // If successful, remember remote addr
    $stmt = $conn->prepare("INSERT INTO request_addr(address, timestamp) VALUES (?, ?)");
    $timestamp = strval(time());
    $stmt->bind_param("ss", $client_addr, $timestamp);
    $stmt->execute();

    CloseCon($conn);
?>