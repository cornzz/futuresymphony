<?php
    require_once "load_env.php";

    function OpenCon()
    {
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME) or die("Connection failed: %s\n". $conn->error);

        return $conn;
    }

    function CloseCon($conn)
    {
        $conn->close();
    }
?>