<?php
    require_once "db_connection.php";
    require "mail.php";
    require "helpers.php";

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        return;
    }

    if (ADMIN_KEY === "" || !isset($_SERVER["PHP_AUTH_USER"]) || $_SERVER["PHP_AUTH_PW"] !== ADMIN_KEY) {
        header('WWW-Authenticate: Basic realm="Admin area"');
        header("HTTP/1.0 401 Unauthorized");
        echo "You don't have permission to access this resource.";
        return;
    }

    $conn = OpenCon();

    if (isset($_POST["regkey"])) {
        $reg_key = $_POST["regkey"];
        // Check if key exists in registrations
        $stmt = $conn->prepare("SELECT reg_key FROM registrations WHERE reg_key=?");
        $stmt->bind_param("s", $reg_key);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows) {
            if (isset($_POST["payment"]) && filter_var($_POST["payment"], FILTER_VALIDATE_BOOLEAN)) {
                $stmt = $conn->prepare("UPDATE registrations SET paymentConfirmed=? WHERE reg_key=?");
                $stmt->bind_param("ss", $_POST["payment"], $reg_key);
            } else if (isset($_POST["complete"]) && filter_var($_POST["complete"], FILTER_VALIDATE_BOOLEAN)) {
                $stmt = $conn->prepare("UPDATE registrations SET complete=? WHERE reg_key=?");
                $stmt->bind_param("ss", $_POST["complete"], $reg_key);
            } else if (isset($_POST["second"]) && filter_var($_POST["second"], FILTER_VALIDATE_BOOLEAN)) {
                $stmt = $conn->prepare("UPDATE registrations SET secondRound=? WHERE reg_key=?");
                $stmt->bind_param("ss", $_POST["second"], $reg_key);
            }
            if ($stmt->affected_rows) {
                http_response_code(400);
                echo "Invalid request.";
                return;
            }
            if (!$stmt->execute()) {
                http_response_code(500);
                echo "Error processing request: {$stmt->error}";
                return;
            } else {
                http_response_code(200);
                echo "Registration {$reg_key} updated successfully.";
                return;
            }
        } else {
            http_response_code(404);
            echo "Registration not found.";
            return;
        }
    } else {
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
        return;
    }
?>