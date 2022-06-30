<?php
    require_once "helpers/authenticate.php";
    require_once "helpers/db_connection.php";

    $connection = OpenCon();

    $result = $connection->query("SELECT reg_key FROM user_files WHERE download_key IS NULL")->fetch_all();
    foreach ($result as $row) {
        do {
            $download_key = bin2hex(random_bytes(10));
        } while ($connection->query("SELECT download_key FROM user_files WHERE download_key='{$download_key}'")->num_rows);
        $reg_key = $row[0];
        $connection->query("UPDATE user_files SET download_key='{$download_key}' WHERE reg_key = '{$reg_key}'");
    }
    echo count($result)." keys migrated";
?>
