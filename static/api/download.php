<?php
    require_once "db_connection.php";

    if (
        !isset($_GET["key"]) ||
        $_GET["key"] === "" ||
        !isset($_GET["file"]) ||
        !in_array($_GET["file"], array("idCopyFile", "pieceScoreFile", "pieceDemoFile", "proofOfPaymentFile"))
    ) {
        http_response_code(400);
        echo "Invalid request.";
        return;
    }
    $reg_key = $_GET["key"];
    $file = $_GET["file"];
    $type = $file.'Type';
    $name = $file.'Name';

    $conn = OpenCon();

    $result = $conn->query("SELECT {$file}, {$type}, {$name} FROM user_files WHERE reg_key='{$reg_key}'");

    if ($result->num_rows) {
        list($file_content, $file_type, $file_name) = $result->fetch_array();
        header("Content-type: {$file_type}");
        header("Content-Disposition: attachment; filename={$file_name}");
        echo $file_content;
    } else {
        http_response_code(400);
        echo "Key not found.";
        return;
    }
?>