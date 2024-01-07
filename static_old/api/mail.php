<?php
    require_once "helpers/authenticate.php";
    require "helpers/mail_helper.php";
    require "helpers/helpers.php";
    require_once "helpers/db_connection.php";

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        return;
    }
    
    $connection = OpenCon();
    // Get mail templates
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $result = $connection->query("SELECT * FROM mail_templates")->fetch_all(MYSQLI_ASSOC);
        foreach ($result as $i => $row)
            $result[$i] = Helpers::decodeMailTemplate($row);

        header('Content-type: application/json');
        echo json_encode($result);
        return;
    }

    // Validate form
    $form = json_decode(file_get_contents("php://input"), TRUE);
    if (!Helpers::validateMailerDTO($form)) {
        http_response_code(400);
        echo "Invalid form.";
        return;
    }

    // Delete mail template
    if (array_key_exists("delete", $form)) {
        $stmt = $connection->prepare("DELETE FROM mail_templates WHERE id=?");
        $stmt->bind_param("i", $form["id"]);
        $stmt->execute();
        if ($stmt->affected_rows) {
            echo "Mail template deleted.";
        } else {
            http_response_code(400);
            echo "Mail template not found.";
        }
        return;
    }

    // Save mail template
    if (array_key_exists("save", $form)) {
        list($status, $payment, $complete, $second) = array(
            json_encode($form["status"]),
            json_encode($form["payment"]),
            json_encode($form["complete"]),
            json_encode($form["second"])
        );
        if (array_key_exists("id", $form)) {
            $stmt = $connection->prepare("SELECT id FROM mail_templates WHERE id=?");
            $stmt->bind_param("i", $form["id"]);
            $stmt->execute();
            if ($stmt->get_result()->num_rows) {
                $stmt = $connection->prepare("UPDATE mail_templates SET subject=?, message=?, status=?, payment=?, complete=?, second=? WHERE id=?");
                $stmt->bind_param("ssssssi", $form["subject"], $form["message"], $status, $payment, $complete, $second, $form["id"]);
            } else {
                http_response_code(400);
                echo "Mail template not found.";
                return;
            }
        } else {
            $stmt = $connection->prepare("INSERT INTO mail_templates(subject, message, status, payment, complete, second) VALUES (?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("ssssss", $form["subject"], $form["message"], $status, $payment, $complete, $second);
        }
        if (!$stmt->execute()) {
            http_response_code(500);
            echo "Error processing request.";
        } else {
            echo "Mail template saved.";
        }
        return;
    }

    // Get email addresses - TODO: do this client side...
    $sql_query = BuildQuery($form["recipient"], $form["status"], $form["payment"], $form["complete"], $form["second"]);
    $result = $connection->query($sql_query);
    $registrations = $result->fetch_all(MYSQLI_ASSOC);
    // If preflight, return recipients
    if (array_key_exists("preflight", $form) && $form["preflight"]) {
        $emails = array_map(fn($row) => $row["email"], $registrations);
        echo join(",", $emails);
        return;
    }

    $subject = $form["subject"];
    $message_template = $form["message"];
    $failures = [];
    foreach ($registrations as $registration) {
        // Prepare email template
        $message = $message_template;
        foreach ($registration as $key => $value)
            $message = str_replace("{".$key."}", $value, $message);
        $message_html = nl2br($message);
        $tag_patterns = ["/<a[\s]+[^>]+>/", "/<\/a>/", "/<b>/", "/<\/b>/", "/<i>/", "/<\/i>/", "/<u>/", "/<\/u>/"];
        foreach ($tag_patterns as $pattern)
            $message = preg_replace($pattern, "", $message);

        // Send email
        $fullName = $registration["firstName"]." ".$registration["lastName"];
        if (APP_ENV !== "dev" && !Mail::sendMail($registration["email"], $fullName, $subject, $message_html, $message))
            $failures[] = $registration["email"];
    }

    if (count($failures) === 0) {
        echo "Emails sent successfully.";
    } else {
        http_response_code(500);
        echo "Error sending message to following mails: ".join(",", $failures)." Please check logs.";
    }

    function BuildQuery(string $recipient, array $status, array $payment, array $complete, array $second): string {
        if ($recipient !== "") {
            return "SELECT
                        a.*,
                        b.*,
                        c.idCopyFileName as idCopy,
                        c.pieceScoreFileName as pieceScore,
                        c.pieceDemoFileName as pieceDemo,
                        c.proofOfPaymentFileName as proofOfPayment
                    FROM base_registrations AS a
                    JOIN registrations AS b ON a.reg_key=b.reg_key
                    JOIN user_files AS c ON b.reg_key=c.reg_key
                    WHERE a.email='{$recipient}'";
        } elseif (!$status["value"]) {
            return "SELECT * FROM base_registrations AS a LEFT JOIN registrations AS b ON a.reg_key = b.reg_key WHERE b.reg_key IS NULL";
        } else {
            $query =
                "SELECT
                    a.*,
                    b.*,
                    c.idCopyFileName as idCopy,
                    c.pieceScoreFileName as pieceScore,
                    c.pieceDemoFileName as pieceDemo,
                    c.proofOfPaymentFileName as proofOfPayment
                FROM base_registrations AS a
                JOIN registrations AS b ON a.reg_key=b.reg_key
                JOIN user_files AS c ON b.reg_key=c.reg_key";
            if ($payment["active"]) {
                $query .= " WHERE b.paymentConfirmed=".($payment["value"] ? "'true'" : "'false'");
            }
            if ($complete["active"]) {
                $query .= !str_contains($query, "WHERE") ? " WHERE" : " AND";
                $query .= " b.complete=".($complete["value"] ? "'true'" : "'false'");
            }
            if ($second["active"]) {
                $query .= !str_contains($query, "WHERE") ? " WHERE" : " AND";
                $query .= " b.secondRound".(is_null($second["value"]) ? " IS NULL" : ($second["value"] ? "='true'" : "='false'"));
            }
        }
        return $query;
    }
?>