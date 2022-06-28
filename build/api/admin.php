<?php
    require "authenticate.php";
    require_once "db_connection.php";
    require "mail_helper.php";
    require "helpers.php";

    $connection = OpenCon();

    if (isset($_POST["reg_key"])) {
        $reg_key = $_POST["reg_key"];
        // Check if key exists in registrations
        $statement = $connection->prepare("SELECT reg_key FROM registrations WHERE reg_key=?");
        $statement->bind_param("s", $reg_key);
        $statement->execute();
        $result = $statement->get_result();

        if ($result->num_rows) {
            UpdateBoolean(
                $connection,
                $reg_key,
                $_POST["payment"] ?? null,
                $_POST["complete"] ?? null,
                $_POST["second"] ?? null
            );
        } else {
            http_response_code(404);
            echo "Registration not found.";
            return;
        }
    } else {
        GetAllRegistrations();
    }

    function UpdateBoolean($conn, $reg_key, $payment, $complete, $second) {
        if (!is_null($payment) && Helpers::isBool($payment)) {
            $stmt = $conn->prepare("UPDATE registrations SET paymentConfirmed=? WHERE reg_key=?");
            $stmt->bind_param("ss", $payment, $reg_key);
        } else if (!is_null($complete) && Helpers::isBool($complete)) {
            $stmt = $conn->prepare("UPDATE registrations SET complete=? WHERE reg_key=?");
            $stmt->bind_param("ss", $complete, $reg_key);
        } else if (!is_null($second) && Helpers::isBool($second)) {
            $stmt = $conn->prepare("UPDATE registrations SET secondRound=? WHERE reg_key=?");
            $stmt->bind_param("ss", $second, $reg_key);
        }
        if (!isset($stmt)) {
            http_response_code(400);
            echo "Invalid request.";
            exit;
        }
        if (!$stmt->execute()) {
            http_response_code(500);
            echo "Error processing request: {$stmt->error}";
            exit;
        } else {
            http_response_code(200);
            echo "Registration {$reg_key} updated successfully.";
            exit;
        }
    }

    function GetAllRegistrations() {
        $conn = OpenCon();
        $confirmed = $conn->query("
            SELECT
                a.id,
                a.reg_key,
                a.email,
                a.firstName,
                a.lastName,
                a.dateOfBirth,
                a.country,
                a.registrationDate,
                b.pieceTitle,
                b.annotation,
                b.instrumentation,
                b.remarks,
                b.scoreConfirmations,
                b.billingAddress,
                b.referrer,
                b.paymentConfirmed,
                b.complete,
                b.secondRound,
                c.idCopyFileName as idCopy,
                c.pieceScoreFileName as pieceScore,
                c.pieceDemoFileName as pieceDemo,
                c.proofOfPaymentFileName as proofOfPayment
            FROM base_registrations AS a
            JOIN registrations AS b ON a.reg_key = b.reg_key
            JOIN user_files AS c ON b.reg_key = c.reg_key
            ORDER BY a.id DESC
        ")->fetch_all(MYSQLI_ASSOC);
        $unconfirmed = $conn->query("
            SELECT
                a.id,
                a.reg_key,
                a.email,
                a.firstName,
                a.lastName,
                a.dateOfBirth,
                a.country,
                a.registrationDate
            FROM base_registrations AS a
            LEFT JOIN registrations AS b ON a.reg_key = b.reg_key
            WHERE b.reg_key IS NULL
            ORDER BY a.id DESC
        ")->fetch_all(MYSQLI_ASSOC);
        foreach ($confirmed as $i => $row) {
            $confirmed[$i] = Helpers::decodeRow($confirmed[$i]);
        }
        header('Content-type: application/json');
        echo '{"confirmed":'.json_encode($confirmed).',"unconfirmed":'.json_encode($unconfirmed).'}';
        exit;
    }
?>