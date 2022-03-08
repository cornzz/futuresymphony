<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    require_once "load_env.php";
    require "PHPMailer/PHPMailer.php";
    require "PHPMailer/Exception.php";
    require "PHPMailer/SMTP.php";

    function sendNewRegMail($address, $firstName, $lastName, $reg_key, $lang) {
        $mail = new PHPMailer(true);
        
        try {
            // Set server settings
            if (APP_ENV == "dev")
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                  // Enable verbose debug output
            
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = MAIL_HOST;                              // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = MAIL_USER;                              // SMTP username
            $mail->Password   = MAIL_PASS;                              // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            // Enable implicit TLS encryption
            $mail->Port       = 465;                                    // TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
            
            // Set recipients
            $mail->setFrom("registration@futuresymphony.lt", "Future Symphony Competition");
            $mail->addAddress($address, $firstName . $lastName);        // Add a recipient
            $mail->addReplyTo("info@futuresymphony.lt");
            
            $subject_en = "Your registration to the 3rd Future Symphony Competition";
            $subject_lt = "Jūsų registracija į III-ąjį Future Symphony konkursą";
            $reg_link = 'https://futuresymphony.lt/registration/id?'.$reg_key;
            $body_html_en = "Dear %firstName%,<br><br>thank you for registering to the 3rd Future Symphony Competition! To complete your registration, please follow this link:<br><br><a href='%reg_link%'>%reg_link%</a><br><br>Greetings from the FSC team!";
            $body_en = "Dear %firstName%,\n\nthank you for registering to the 3rd Future Symphony Competition! To complete your registration, please follow this link:\n\n%reg_link% \n\nGreetings from the FSC team!";
            $body_html_lt = "Sveiki,<br><br>Dėkojame, kad užsiregistravote į 3-ąjį „Future Symphony“ konkursą. Norėdami užbaigti registraciją, spustelėkite šią nuorodą:<br><br><a href='%reg_link%'>%reg_link%</a><br><br>Pagarbiai<br>FSC komanda";
            $body_lt = "Sveiki,\n\nDėkojame, kad užsiregistravote į 3-ąjį „Future Symphony“ konkursą. Norėdami užbaigti registraciją, spustelėkite šią nuorodą:\n\n%reg_link%\n\nPagarbiai\nFSC komanda";
            $vars = array(
                "%firstName%" => $firstName,
                "%reg_link%" => $reg_link,
            );

            // Set content
            $mail->isHTML(true);                                        // Set email format to HTML
            $mail->CharSet = 'UTF-8';
            $mail->Subject = $lang == "en" ? $subject_en : $subject_lt;
            $mail->Body    = strtr($lang == "en" ? $body_html_en : $body_html_lt, $vars);
            $mail->AltBody = strtr($lang == "en" ? $body_en : $body_lt, $vars);
        
            $mail->send();
            return TRUE;
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            return FALSE;
        }
    }
?>