<?php
class Helpers {
    static function deadline() {
        $deadline = new DateTime("2022-06-30 23:59:59", new DateTimeZone("Europe/Vilnius"));
        if ($deadline->getTimestamp() < time()) {
            http_response_code(403);
            echo "Deadline passed.";
            exit;
        }
    }

    static function validateDate($date, $format = "Y-m-d") {
        $d = DateTime::createFromFormat($format, $date);
        $startDate = new DateTime("1986-09-10");
        $endDate = new DateTime("2004-06-30");
        return $d && $d->format($format) === $date && $startDate <= $d && $d <= $endDate;
    }

    static function validateRegistrationDTO($form, $new): bool {
        if ($form === null)
            return FALSE;

        // Keys that must exist and be non empty
        $formKeysNewRegistration = array("firstName", "lastName", "email", "dateOfBirth", "country");
        $formKeysRest = array("pieceTitle", "annotation", "instrumentation", "remarks", "scoreConfirmations", "billingAddress", "referrer");
        foreach ($formKeysNewRegistration as $key) {
            if (!array_key_exists($key, $form) || $form[$key] === "")
                return FALSE;
        }

        // Validate language
        if ($new && (!array_key_exists("lang", $form) || $form["lang"] != "en" && $form["lang"] != "lt"))
            return FALSE;
            
        // Validate email and date of birth
        if (!filter_var($form["email"], FILTER_VALIDATE_EMAIL) || !self::validateDate($form["dateOfBirth"]))
            return FALSE;
            
        // Validate country code
        $countryCodes = array("AF","AX","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BQ","BA","BW","BV","BR","IO","BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX","CC","CO","KM","CG","CD","CK","CR","CI","HR","CU","CW","CY","CZ","DK","DJ","DM","DO","EC","EG","SV","GQ","ER","EE","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ","KE","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MK","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","NC","NZ","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","RE","RO","RU","RW","BL","SH","KN","LC","MF","PM","VC","WS","SM","ST","SA","SN","RS","SC","SL","SG","SX","SK","SI","SB","SO","ZA","GS","SS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UM","UY","UZ","VU","VE","VN","VG","VI","WF","EH","YE","ZM","ZW");
        if (!in_array($form["country"], $countryCodes))
            return FALSE;

        if (!$new) {
            foreach ($formKeysRest as $key) {
                if (!array_key_exists($key, $form)) {
                    return FALSE;
                }
            }
            // Validate instrumentation structure
            $instrumentation = $form["instrumentation"];
            $sampleInstrumentation = [[false],[false],[false],[false],[false],[false],[false],[false,false],[false,false],[false],[false],[false],[false,false],[false],[false],[false],[false],[false],[false],[false,false,false,false,false,false],[false,false,false,false,false],[false,false,false,false],[false,false,false],[false,false]];
            if ($instrumentation == "" || !is_array($instrumentation) || count($instrumentation) !== 24) {
                return FALSE;
            } else {
                foreach ($sampleInstrumentation as $index => $group) {
                    if (count($group) !== count($instrumentation[$index])) {
                        return FALSE;
                    }
                    foreach ($instrumentation[$index] as $value) {
                        if (!is_bool($value))
                            return FALSE;
                    }
                }
            }
        }

        return TRUE;
    }

    static function validateMailerDTO($form): bool {
        if ($form === null)
            return FALSE;
        
        // Either preflight, save or delete param must exist
        if (
            (!array_key_exists("preflight", $form) || !is_bool($form["preflight"])) &&
            !array_key_exists("save", $form) &&
            (!array_key_exists("delete", $form) || !array_key_exists("id", $form))
        )
            return FALSE;
        
        // If id exists it must be an integer
        if (array_key_exists("id", $form) && !is_int($form["id"]))
            return FALSE;

        // If delete exists return here
        if (array_key_exists("delete", $form))
            return TRUE;

        // These parameters must exist and be non empty
        foreach (array("subject", "message", "status", "complete", "payment", "second") as $key) {
            if (!array_key_exists($key, $form) || $form[$key] === "")
                return FALSE;
        }

        // Check criteria structure
        foreach (array("status", "complete", "payment", "second") as $key) {
            if (
                !is_array($form[$key]) ||
                !array_key_exists("active", $form[$key]) ||
                !is_bool($form[$key]["active"]) ||
                !array_key_exists("value", $form[$key]) ||
                !is_bool($form[$key]["value"]) && ($key !== "second" || !is_null($form[$key]["value"]))
            )
                return FALSE;
        }

        return TRUE;
    }

    static function validateFile($file, $max_size, $types): bool {
        if (filesize($file["tmp_name"]) > $max_size)
            return FALSE;

        $matchingType = FALSE;
        foreach ($types as $type) {
            if (str_contains(mime_content_type($file["tmp_name"]), $type))
                $matchingType = TRUE;
        }

        return $matchingType;
    }

    static function decodeRow(array $row): array {
        $row["instrumentation"] = json_decode($row["instrumentation"]);
        $row["scoreConfirmations"] = json_decode($row["scoreConfirmations"]);
        $row["paymentConfirmed"] = array_key_exists("paymentConfirmed", $row) ? json_decode($row["paymentConfirmed"]) : null;
        $row["complete"] = array_key_exists("complete", $row) ? json_decode($row["complete"]) : null;
        $row["secondRound"] = array_key_exists("secondRound", $row) ? json_decode($row["secondRound"]) : null;
        return $row;
    }

    static function decodeMailTemplate(array $row): array {
        $row["id"] = intval($row["id"]);
        $row["status"] = json_decode($row["status"]);
        $row["payment"] = json_decode($row["payment"]);
        $row["complete"] = json_decode($row["complete"]);
        $row["second"] = json_decode($row["second"]);
        return $row;
    }

    static function isBool(string $var): bool {
        return in_array($var, array("true", "false", "null"));
    }
}
