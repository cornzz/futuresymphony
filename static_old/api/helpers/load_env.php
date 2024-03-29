<?php
    $env_path = ".env";

    if (!file_exists($env_path))
        throw new \InvalidArgumentException(sprintf("%s does not exist", $env_path));

    $lines = file($env_path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), "#") === 0)
            continue;

        list($name, $value) = explode("=", $line, 2);
        $name = trim($name);
        $value = trim($value);

        if (!defined($name))
            DEFINE($name, $value);
    }
?>