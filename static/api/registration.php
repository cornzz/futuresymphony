<?php
    require "db_connection.php";

    $conn = OpenCon();

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        echo file_get_contents("php://input");
    } else if (isset($_GET["key"]) && $_GET["key"] !== "") {
        $reg_key = $_GET["key"];

        // Check if key exists in registrations
        $stmt = $conn->prepare("SELECT * FROM registrations WHERE reg_key=?");
        var_dump($stmt);
        $stmt->bind_param("s", $reg_key);
        $stmt->execute();
        $result = $stmt->get_result();

        if (mysqli_num_rows($result)) {
            echo json_encode($result->fetch_assoc());
            return;
        } else {
            http_response_code(404);
            echo "Registration not found.";
            return;
        }
    } else {
        http_response_code(400);
        echo "Invalid request.";
        return;
    }
?>