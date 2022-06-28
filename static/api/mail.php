<?php
    require_once "authenticate.php";
    require "mail_helper.php";

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        return;
    }

    $form = json_decode(file_get_contents("php://input"), TRUE);
    echo var_dump($form);
?>