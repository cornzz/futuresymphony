<?php
    require_once "helpers/authenticate.php";
    require "helpers/mail_helper.php";
    require "helpers/helpers.php";
    require_once "helpers/db_connection.php";

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        return;
    }

    $form = json_decode(file_get_contents("php://input"), TRUE);
    if (!Helpers::validateMailerDTO($form)) {
        http_response_code(400);
        echo "Invalid form.";
        return;
    }
    $subject = $form["subject"];
    $message_template = $form["message"];
    
    // Get email addresses
    $connection = OpenCon();
    $sql_query = BuildQuery($form["status"], $form["payment"], $form["complete"], $form["second"]);
    $result = $connection->query($sql_query);
    $registrations = $result->fetch_all(MYSQLI_ASSOC);
    echo "Sending {$result->num_rows} message".($result->num_rows === 1 ? "" : "s")."\n\n";
    echo $result->num_rows ? "Recipient".($result->num_rows === 1 ? "" : "s").":\n" : "";

    foreach ($registrations as $registration) {
        echo $registration["email"]."\n";

        // Prepare email template
        $message = $message_template;
        foreach ($registration as $key => $value)
            $message = str_replace("{".$key."}", $value, $message);
        $message_html = nl2br($message);
        $tag_patterns = ["/<a[\s]+[^>]+>/", "/<\/a>/", "/<b>/", "/<\/b>/", "/<i>/", "/<\/i>/"];
        foreach ($tag_patterns as $pattern)
            $message = preg_replace($pattern, "", $message);

        // Send
        $fullname = $registration["firstName"]." ".$registration["lastName"];
        if (APP_ENV !== "dev")
            Mail::sendMail($registration["email"], $fullName, $subject, $message_html, $message);
    }

    function BuildQuery(array $status, array $payment, array $complete, array $second): string {
        if (!$status["value"]) {
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
                JOIN registrations AS b ON a.reg_key = b.reg_key
                JOIN user_files AS c ON b.reg_key = c.reg_key";
            if ($payment["active"]) {
                $query .= " WHERE b.paymentConfirmed = ".($payment["value"] ? "'true'" : "'false'");
            }
            if ($complete["active"]) {
                $query .= !str_contains($query, "WHERE") ? " WHERE" : " AND";
                $query .= " b.complete = ".($complete["value"] ? "'true'" : "'false'");
            }
            if ($second["active"]) {
                $query .= !str_contains($query, "WHERE") ? " WHERE" : " AND";
                $query .= " b.secondRound = ".(is_null($second["value"]) ? "NULL" : ($second["value"] ? "'true'" : "'false'"));
            }
        }
        return $query;
    }
?>