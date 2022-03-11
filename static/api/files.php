<?php
    require_once "db_connection.php";
    require "helpers.php";

    $conn = OpenCon();

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (deadline()) {
            http_response_code(403);
            echo "Deadline passed.";
            return;
        }
        
        if (!isset($_POST["reg_key"])) {
            http_response_code(400);
            echo "Invalid key.";
            return;
        }
        $reg_key = $_POST["reg_key"];
        
        // Check if key exists in user_files
        $stmt = $conn->prepare("SELECT reg_key FROM user_files WHERE reg_key=?");
        $stmt->bind_param("s", $reg_key);
        $stmt->execute();
        $result = $stmt->get_result();
        if (!$result->num_rows) {
            http_response_code(404);
            echo "Key not found.";
            return;
        }
        $idCopyFile = isset($_FILES["idCopyFile"]) ? $_FILES["idCopyFile"] : null;
        $pieceScoreFile = isset($_FILES["pieceScoreFile"]) ? $_FILES["pieceScoreFile"] : null;
        $pieceDemoFile = isset($_FILES["pieceDemoFile"]) ? $_FILES["pieceDemoFile"] : null;
        $proofOfPaymentFile = isset($_FILES["proofOfPaymentFile"]) ? $_FILES["proofOfPaymentFile"] : null;

        // Upload files
        foreach (
            array(
                "idCopyFile" => $idCopyFile,
                "pieceScoreFile" => $pieceScoreFile,
                "pieceDemoFile" => $pieceDemoFile,
                "proofOfPaymentFile" => $proofOfPaymentFile
            ) as $key => $file
        ) {
            if (!is_null($file)) {
                $file_content = file_get_contents($file["tmp_name"]);
                $file_type = mime_content_type($file["tmp_name"]);
                $file_name = $file["name"];
                $stmt = $conn->prepare("UPDATE user_files SET {$key}=?, {$key}Type=?, {$key}Name=? WHERE reg_key=?");
                $stmt->bind_param("ssss", $file_content, $file_type, $file_name, $reg_key);
                $success = $stmt->execute();
                if (!$success) {
                    http_response_code(500);
                    echo "Error processing request: {$stmt->error}";
                    return;
                }
            }
        }
    } else if (isset($_GET["key"]) && $_GET["key"] !== "") {
        $reg_key = $_GET["key"];

        // Check if key exists in user_files
        $stmt = $conn->prepare("SELECT * FROM user_files WHERE reg_key=?");
        $stmt->bind_param("s", $reg_key);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows) {
            $arr = $result->fetch_assoc();
            // TODO: correctly return result
            echo json_encode($arr);
            return;
        } else {
            http_response_code(404);
            echo "Key not found.";
            return;
        }
    } else {
        http_response_code(400);
        echo "Invalid request.";
        return;
    }
?>