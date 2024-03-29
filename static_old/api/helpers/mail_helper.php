<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    require_once "load_env.php";
    require "PHPMailer/PHPMailer.php";
    require "PHPMailer/Exception.php";
    require "PHPMailer/SMTP.php";

    class Mail {
        static function sendMail($address, $name, $subject, $body_html, $body) {
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
                $mail->addAddress($address, $name);  // Add a recipient
                $mail->addReplyTo("info@futuresymphony.lt");

                $template = '<!DOCTYPE html><html><head><meta charset="utf-8"/><style>body {font-family:"Helvetica",sans-serif;font-size:16px;line-height: 1.25;}a{text-decoration:none;border-bottom:1px solid #184C85;color:#184C85;transition:all 0.1s ease;}a:hover{border-bottom-color:transparent;}</style></head><body>{message}</body></html>';
                $signature_html = '<br><br>Šilti linkėjimai | Best wishes<br><b>TEAM FUTURE SYMPHONY</b><br>El. paštas | Email: <a href="mailto:info@futuresymphony.lt">info@futuresymphony.lt</a><br><a href="https://futuresymphony.lt">www.futuresymphony.lt</a><br>Facebook: <a href="https://www.facebook.com/FScompetition">FScompetition</a>';
                $signature = "\n\nŠilti linkėjimai | Best wishes\nTEAM FUTURE SYMPHONY\nEl. paštas | Email: info@futuresymphony.lt\nhttps://www.futuresymphony.lt\nFacebook: FScompetition";

                // Set content
                $mail->isHTML(true);                                        // Set email format to HTML
                $mail->CharSet = "UTF-8";
                $mail->Subject = $subject;
                $mail->Body    = strtr($template, array("{message}" => $body_html.$signature_html));
                $mail->AltBody = $body.$signature;
            
                if (!$mail->send()) {
                    return FALSE;
                } else {
                    $sentPath = "{".MAIL_HOST.":993/imap/ssl}Sent";
                    $imapConnection = imap_open($sentPath, MAIL_USER, MAIL_PASS);
                    imap_append($imapConnection, $sentPath, $mail->getSentMIMEMessage());
                    imap_close($imapConnection);
                    return TRUE;
                }
            } catch (Throwable $e) {
                echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
                return FALSE;
            }
        }

        static function sendNewRegMail($address, $firstName, $lastName, $reg_key, $lang) {
            $subject_en = "Your registration to the 3rd Future Symphony Competition";
            $subject_lt = "Jūsų registracija į III-ąjį Future Symphony konkursą";
            $reg_link = "https://futuresymphony.lt/registration/id?".$reg_key;
            $body_html_en = 'Dear {firstName},<br><br>thank you for registering to the 3rd Future Symphony Competition! To complete your registration, please follow this link:<br><br><a href="{reg_link}">{reg_link}</a><br><br>The submitted information can be revised during the whole registration period. Do not share this link with others.';
            $body_en = "Dear {firstName},\n\nthank you for registering to the 3rd Future Symphony Competition! To complete your registration, please follow this link:\n\n{reg_link} \n\nThe submitted information can be revised during the whole registration period. Do not share this link with others.";
            $body_html_lt = 'Sveiki,<br><br>Dėkojame, kad užsiregistravote į III-ąjį „Future Symphony“ konkursą. Norėdami užbaigti registraciją, spustelėkite šią nuorodą:<br><br><a href="{reg_link}">{reg_link}</a><br><br>Pateikta informacija gali būti redaguojama per visą registracijos laikotarpį. Nesidalinkite šia nuoroda su kitais.';
            $body_lt = "Sveiki,\n\nDėkojame, kad užsiregistravote į III-ąjį „Future Symphony“ konkursą. Norėdami užbaigti registraciją, spustelėkite šią nuorodą:\n\n{reg_link}\n\nPateikta informacija gali būti redaguojama per visą registracijos laikotarpį. Nesidalinkite šia nuoroda su kitais.";
            $vars = array(
                "{firstName}" => $firstName,
                "{reg_link}" => $reg_link,
            );

            return self::sendMail(
                $address,
                $firstName." ".$lastName,
                $lang == "en" ? $subject_en : $subject_lt,
                strtr($lang == "en" ? $body_html_en : $body_html_lt, $vars),
                strtr($lang == "en" ? $body_en : $body_lt, $vars)
            );
        }
    }
?>