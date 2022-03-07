<?php
    function ValidateDTO($form, $new) {
        if ($form == null) {
            return FALSE;
        }
        $formKeysNewRegistration = array('firstName', 'lastName', 'email', 'dateOfBirth', 'country');
        $formKeysRest = array();
        foreach ($formKeysNewRegistration as $key) {
            if (!array_key_exists($key, $form) || $form[$key] == '')
                return FALSE;
        }
        if (!$new) {
            foreach ($formKeysRest as $key) {
                if (!array_key_exists($key, $form) || $form[$key] == '')
                    return FALSE;
            }
        }
        return TRUE;
    }
?>