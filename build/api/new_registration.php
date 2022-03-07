<?php
    include "db_connection.php";
    include "helpers.php";

    $conn = OpenCon();
    
    $form = json_decode(file_get_contents("php://input"), TRUE);
    if (!ValidateDTO($form, TRUE)) {
        http_response_code(400);
        echo "Invalid form";
        return;
    }

    $stmt = $conn->prepare("SELECT * FROM new_registrations WHERE email=?");
    $stmt->bind_param('s', $form['email']);
    $stmt->execute();
    if (mysqli_num_rows($stmt->get_result())) {
        http_response_code(400);
        echo "Email already used.";
        return;
    }

    do {
        $reg_key = join("-", str_split(strtoupper(bin2hex(random_bytes(10))), 5));
    } while (mysqli_num_rows($conn->query("SELECT * FROM new_registrations WHERE reg_key='{$reg_key}'")));

    $stmt = $conn->prepare("INSERT INTO new_registrations(reg_key, email, firstName, lastName, dateOfBirth, country) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param('ssssss', $reg_key, $form['email'], $form['firstName'], $form['lastName'], $form['dateOfBirth'], $form['country']);
    if (!$stmt->execute()) {
        http_response_code(500);
        echo "Error processing request.";
        return;
    }
?>