<?php
    $env_path = '.env';

    if (!file_exists($env_path)) {
        throw new \InvalidArgumentException(sprintf('%s does not exist', $env_path));
    }

    $lines = file($env_path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) {
            continue;
        }

        list($name, $value) = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);

        if (!array_key_exists($name, $_SERVER) && !array_key_exists($name, $_ENV)) {
            putenv(sprintf('%s=%s', $name, $value));
        }
    }

    function OpenCon()
    {
        $dbhost = getenv('DB_HOST');
        $dbuser = getenv('DB_USER');
        $dbpass = getenv('DB_PASS');
        $db = getenv('DB_NAME');
        $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die('Connection failed: %s\n'. $conn->error);

        return $conn;
    }

    function CloseCon($conn)
    {
        $conn->close();
    }
?>