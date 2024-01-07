<?php
    require_once "load_env.php";

    function OpenCon()
    {
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME) or die("Connection failed: %s\n". $conn->error);
        $conn->set_charset("utf8");

        return $conn;
    }

    function CloseCon($conn)
    {
        $conn->close();
    }
?>