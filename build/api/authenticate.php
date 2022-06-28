<?php
    require_once "load_env.php";

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        exit;
    }

    if (ADMIN_KEY === "" || !isset($_SERVER["PHP_AUTH_USER"]) || $_SERVER["PHP_AUTH_PW"] !== ADMIN_KEY) {
        header('WWW-Authenticate: Basic realm="Admin area"');
        header("HTTP/1.0 401 Unauthorized");
        echo "You don't have permission to access this resource.";
        exit;
    }
?>