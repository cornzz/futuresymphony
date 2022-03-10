<?php
    require "db_connection.php";

    $conn = OpenCon();

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        echo file_get_contents("php://input");
    } else if (isset($_GET["key"]) && $_GET["key"] !== "") {
        $reg_key = $_GET["key"];

        // Check if key exists in registrations
        $stmt = $conn->prepare("SELECT * FROM registrations WHERE reg_key=?");
        $stmt->bind_param("s", $reg_key);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows) {
            echo json_encode($result->fetch_assoc());
            return;
        } else {
            // Check if key exists in new_registrations
            $stmt = $conn->prepare("SELECT * FROM new_registrations WHERE reg_key=?");
            $stmt->bind_param("s", $reg_key);
            $stmt->execute();
            $result = $stmt->get_result();

            // Insert into registrations
            if ($result->num_rows) {
                $row = $result->fetch_assoc();
                $stmt = $conn->prepare("INSERT INTO registrations(reg_key, email, firstName, lastName, dateOfBirth, country) VALUES (?, ?, ?, ?, ?, ?)");
                $stmt->bind_param("ssssss", $reg_key, $row["email"], $row["firstName"], $row["lastName"], $row["dateOfBirth"], $row["country"]);
                $stmt->execute();
                echo json_encode($row);
                return;
            } else {
                http_response_code(404);
                echo "Registration not found.";
                return;
            }
        }
    } else {
        http_response_code(400);
        echo "Invalid request.";
        return;
    }
?>