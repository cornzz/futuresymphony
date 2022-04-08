<?php
    function deadline() {
        $deadline = new DateTime("2022-06-30 23:59:59", new DateTimeZone("Europe/Vilnius"));
        return $deadline->getTimestamp() < time();
    }

    function validateDate($date, $format = "Y-m-d")
    {
        $d = DateTime::createFromFormat($format, $date);
        $startDate = new DateTime("1987-09-09");
        $endDate = new DateTime("2004-06-30");
        return $d && $d->format($format) === $date && $startDate <= $d && $d <= $endDate;
    }

    function ValidateDTO($form, $new)
    {
        if ($form == null)
            return FALSE;

        $formKeysNewRegistration = array("firstName", "lastName", "email", "dateOfBirth", "country");
        $formKeysRest = array("pieceTitle", "annotation", "instrumentation", "remarks", "scoreConfirmations", "referrer");
        foreach ($formKeysNewRegistration as $key) {
            if (!array_key_exists($key, $form) || $form[$key] == "")
                return FALSE;
        }

        if ($new && (!array_key_exists("lang", $form) || $form["lang"] != "en" && $form["lang"] != "lt"))
            return FALSE;
            
        if (!filter_var($form["email"], FILTER_VALIDATE_EMAIL))
            return FALSE;
            
        if (!validateDate($form["dateOfBirth"]))
            return FALSE;

        $countryCodes = array("AF","AX","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BQ","BA","BW","BV","BR","IO","BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX","CC","CO","KM","CG","CD","CK","CR","CI","HR","CU","CW","CY","CZ","DK","DJ","DM","DO","EC","EG","SV","GQ","ER","EE","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ","KE","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MK","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","NC","NZ","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","RE","RO","RU","RW","BL","SH","KN","LC","MF","PM","VC","WS","SM","ST","SA","SN","RS","SC","SL","SG","SX","SK","SI","SB","SO","ZA","GS","SS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UM","UY","UZ","VU","VE","VN","VG","VI","WF","EH","YE","ZM","ZW");
        if (!in_array($form["country"], $countryCodes))
            return FALSE;

        if (!$new) {
            foreach ($formKeysRest as $key) {
                if (!array_key_exists($key, $form)) {
                    return FALSE;
                }
            }
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

    function ValidateFile($file, $max_size, $types) {
        if (filesize($file["tmp_name"]) > $max_size)
            return FALSE;

        $matchingType = FALSE;
        foreach ($types as $type) {
            if (str_contains(mime_content_type($file["tmp_name"]), $type))
                $matchingType = TRUE;
        }

        return $matchingType;
    }
?>