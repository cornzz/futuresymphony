<?php
    require_once "helpers/db_connection.php";
    require "helpers/helpers.php";

    $conn = OpenCon();

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        Helpers::deadline();

        $form = json_decode(file_get_contents("php://input"), TRUE);
        if (!Helpers::validateRegistrationDTO($form, FALSE)) {
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
        $stmt = $conn->prepare(
            "UPDATE base_registrations
                SET firstName=?,
                    lastName=?,
                    dateOfBirth=?,
                    country=?
                WHERE reg_key=?"
        );
        $stmt->bind_param("sssss",
            $form["firstName"],
            $form["lastName"],
            $form["dateOfBirth"],
            $form["country"],
            $form["reg_key"]
        );
        if (!$stmt->execute()) {
            http_response_code(500);
            echo "Error processing request: {$stmt->error}";
            return;
        }
        $stmt = $conn->prepare(
            "UPDATE registrations 
                SET pieceTitle=?,
                    annotation=?,
                    instrumentation=?,
                    remarks=?,
                    scoreConfirmations=?,
                    billingAddress=?,
                    referrer=?
                WHERE reg_key=?"
        );
        $instrumentation = json_encode($form["instrumentation"]);
        $scoreConfirmations = json_encode($form["scoreConfirmations"]);
        $stmt->bind_param("ssssssss",
            $form["pieceTitle"],
            $form["annotation"],
            $instrumentation,
            $form["remarks"],
            $scoreConfirmations,
            $form["billingAddress"],
            $form["referrer"],
            $form["reg_key"]
        );
        if (!$stmt->execute()) {
            http_response_code(500);
            echo "Error processing request: {$stmt->error}";
            return;
        } else {
            echo "Registration successfully updated.";
            return;
        }
    } else if (isset($_GET["key"]) && $_GET["key"] !== "") {
        $reg_key = $_GET["key"];
        // Check if key exists in registrations
        $stmt = $conn->prepare("SELECT reg_key FROM registrations WHERE reg_key=?");
        $stmt->bind_param("s", $reg_key);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows) {
            // Prepare and return existing data
            $result = $conn->query(
                "SELECT
                    a.id,
                    a.reg_key,
                    a.email,
                    a.firstName,
                    a.lastName,
                    a.dateOfBirth,
                    a.country,
                    b.pieceTitle,
                    b.annotation,
                    b.instrumentation,
                    b.remarks,
                    b.scoreConfirmations,
                    b.billingAddress,
                    b.referrer,
                    c.idCopyFileName as idCopy,
                    c.pieceScoreFileName as pieceScore,
                    c.pieceDemoFileName as pieceDemo,
                    c.proofOfPaymentFileName as proofOfPayment
                FROM base_registrations AS a
                JOIN registrations AS b ON a.reg_key = b.reg_key
                JOIN user_files AS c ON b.reg_key = c.reg_key
                WHERE a.reg_key = '{$reg_key}'"
            );
            echo $conn->error;
            $row = Helpers::decodeRow($result->fetch_assoc());
            header('Content-type: application/json');
            echo json_encode($row);
            return;
        } else {
            // Check if key exists in base_registrations
            $stmt = $conn->prepare("SELECT * FROM base_registrations WHERE reg_key=?");
            $stmt->bind_param("s", $reg_key);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows) {
                // Insert new row into registrations and user_files
                $conn->query("INSERT INTO registrations(reg_key) VALUES ('{$reg_key}')");

                // Generate download key
                do {
                    $download_key = bin2hex(random_bytes(10));
                } while ($conn->query("SELECT download_key FROM user_files WHERE download_key='{$download_key}'")->num_rows);
                $conn->query("INSERT INTO user_files(reg_key, download_key) VALUES ('{$reg_key}', '{$download_key}')");
                header('Content-type: application/json');
                echo json_encode($result->fetch_assoc());
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