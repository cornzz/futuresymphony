<?php
    include "db_connection.php";

    if (!isset($_GET["token"]) || $_GET["token"] != CRONJOB_TOKEN) {
        http_response_code(403);
        echo "Invalid token.";
        return;
    }

    $conn = OpenCon();

    $delay = time() - 60 * 5;
    $conn->query("DELETE FROM request_addr WHERE timestamp < '{$delay}'");
?>