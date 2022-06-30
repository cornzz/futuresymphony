<?php
    require_once "helpers/db_connection.php";
    require "helpers/helpers.php";

    $connection = OpenCon();

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        Helpers::deadline();
        
        if (!isset($_POST["reg_key"])) {
            http_response_code(400);
            echo "Invalid key.";
            return;
        }
        $reg_key = $_POST["reg_key"];
        
        // Check if key exists in user_files
        $stmt = $connection->prepare("SELECT reg_key FROM user_files WHERE reg_key=?");
        $stmt->bind_param("s", $reg_key);
        $stmt->execute();
        $result = $stmt->get_result();
        if (!$result->num_rows) {
            http_response_code(404);
            echo "Key not found.";
            return;
        }
        $fileVerification = [
            ["idCopyFile", 5242880, ["application/pdf", "image/"]],
            ["pieceScoreFile", 10485760, ["application/pdf"]],
            ["pieceDemoFile", 31457280, ["audio/mpeg"]],
            ["proofOfPaymentFile", 2097152, ["application/pdf", "image/"]]
        ];
        $invalidFiles = [];
        // Upload files
        foreach ($fileVerification as $fv) {
            $file = $_FILES[$fv[0]] ?? null;
            if (!is_null($file)) {
                if (!Helpers::validateFile($file, $fv[1], $fv[2])) {
                    $invalidFiles[] = $file["name"];
                    continue;
                }
                $file_content = file_get_contents($file["tmp_name"]);
                $file_type = mime_content_type($file["tmp_name"]);
                $file_name = $file["name"];
                $stmt = $connection->prepare("UPDATE user_files SET {$fv[0]}=?, {$fv[0]}Type=?, {$fv[0]}Name=? WHERE reg_key=?");
                $stmt->bind_param("ssss", $file_content, $file_type, $file_name, $reg_key);
                if (!$stmt->execute()) {
                    http_response_code(500);
                    echo "Error processing request: {$stmt->error}";
                    return;
                }
            }
        }
        if (count($invalidFiles) > 0) {
            http_response_code(400);
            echo "Invalid file type or size: ".implode(", ", $invalidFiles);
            return;
        } else {
            echo "File upload successful.";
            return;
        }
    } else if (
        isset($_GET["key"]) && $_GET["key"] !== ""  &&
        isset($_GET["file"]) && in_array($_GET["file"], array("idCopyFile", "pieceScoreFile", "pieceDemoFile", "proofOfPaymentFile")) &&
        (
            isset($_GET["jury"]) ? $_GET["jury"] === JURY_KEY && in_array($_GET["file"], array("pieceScoreFile", "pieceDemoFile")) : true
        )
    ) {
        GetFile($connection, $_GET["file"], $_GET["key"], isset($_GET["jury"]));
    } else if (isset($_GET["jury"]) && $_GET["jury"] === JURY_KEY) {
        $result = $connection->query(
            "SELECT
                a.pieceTitle,
                a.annotation,
                b.download_key
            FROM registrations AS a
            JOIN user_files AS b ON a.reg_key = b.reg_key
            WHERE a.complete = 'true'"
        )->fetch_all(MYSQLI_ASSOC);
        header('Content-type: application/json');
        echo json_encode($result);
        return;
    } else {
        http_response_code(400);
        echo "Invalid request.";
        return;
    }

    function GetFile($conn, $file, $key, $jury) {
        $type = $file."Type";
        $name = $file."Name";

        $sql_query = "SELECT {$file}, {$type}, {$name} FROM user_files WHERE";
        $sql_query .= !$jury ? " reg_key='{$key}'" : " download_key='{$key}'";
        $result = $conn->query($sql_query);

        if ($result->num_rows) {
            list($file_content, $file_type, $file_name) = $result->fetch_array();
            if ($file_name !== null) {
                header("Content-type: {$file_type}");
                header("Content-Disposition: inline; filename={$file_name}");
                echo $file_content;
            } else {
                http_response_code(400);
                echo "File not found.";
                exit;
            }
        } else {
            http_response_code(400);
            echo "Key not found.";
            exit;
        }
    }
?>