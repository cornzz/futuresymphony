<?php
    require_once "db_connection.php";
    require "helpers.php";

    $conn = OpenCon();

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (deadline()) {
            http_response_code(403);
            echo "Deadline passed.";
            return;
        }

        $form = json_decode(file_get_contents("php://input"), TRUE);
        if (!ValidateDTO($form, FALSE)) {
            http_response_code(400);
            echo "Invalid form.";
            return;
        }
        if (!array_key_exists("reg_key", $form)) {
            http_response_code(400);
            echo "Invalid key.";
            return;
        }
        $stmt = $conn->prepare("SELECT reg_key FROM registrations WHERE reg_key=?");
        $stmt->bind_param("s", $form["reg_key"]);
        $stmt->execute();
        $result = $stmt->get_result();
        if (!$result->num_rows) {
            http_response_code(404);
            echo "Registration not found.";
            return;
        }
        $stmt = $conn->prepare("
            UPDATE registrations 
            SET firstName=?,
                lastName=?,
                dateOfBirth=?,
                country=?,
                idCopy=?,
                pieceTitle=?,
                annotation=?,
                pieceScore=?,
                pieceDemo=?,
                instrumentation=?,
                remarks=?,
                scoreConfirmations=?,
                proofOfPayment=?
            WHERE reg_key=?"
        );
        $instrumentation = json_encode($form["instrumentation"]);
        $scoreConfirmations = json_encode($form["scoreConfirmations"]);
        $stmt->bind_param("ssssssssssssss",
            $form["firstName"],
            $form["lastName"],
            $form["dateOfBirth"],
            $form["country"],
            $form["idCopy"],
            $form["pieceTitle"],
            $form["annotation"],
            $form["pieceScore"],
            $form["pieceDemo"],
            $instrumentation,
            $form["remarks"],
            $scoreConfirmations,
            $form["proofOfPayment"],
            $form["reg_key"]
        );
        $success = $stmt->execute();
        if (!$success) {
            http_response_code(500);
            echo "Error processing request: {$stmt->error}";
            return;
        }
    } else if (isset($_GET["key"]) && $_GET["key"] !== "") {
        $reg_key = $_GET["key"];

        // Check if key exists in registrations
        $stmt = $conn->prepare("SELECT * FROM registrations WHERE reg_key=?");
        $stmt->bind_param("s", $reg_key);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows) {
            $arr = $result->fetch_assoc();
            $arr["instrumentation"] = json_decode($arr["instrumentation"]);
            $arr["scoreConfirmations"] = json_decode($arr["scoreConfirmations"]);
            echo json_encode($arr);
            return;
        } else {
            // Check if key exists in new_registrations
            $stmt = $conn->prepare("SELECT * FROM new_registrations WHERE reg_key=?");
            $stmt->bind_param("s", $reg_key);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows) {
                // Insert into registrations and user_files
                $row = $result->fetch_assoc();
                $stmt = $conn->prepare("INSERT INTO registrations(reg_key, email, firstName, lastName, dateOfBirth, country) VALUES (?, ?, ?, ?, ?, ?)");
                $stmt->bind_param("ssssss", $reg_key, $row["email"], $row["firstName"], $row["lastName"], $row["dateOfBirth"], $row["country"]);
                $stmt->execute();
                $conn->query("INSERT INTO user_files(reg_key) VALUES ('{$reg_key}')");
                echo json_encode($row);
                return;
            } else {
                http_response_code(404);
                echo "Registration not found.";
                return;
            }
        }
    } else {
        http_response_code(400);
        echo "Invalid request.";
        return;
    }
?>