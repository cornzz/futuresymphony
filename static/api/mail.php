<?php
    require_once "helpers/authenticate.php";
    require "helpers/mail_helper.php";
    require "helpers/helpers.php";

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        return;
    }

    $form = json_decode(file_get_contents("php://input"), TRUE);
    echo var_dump($form);


?>