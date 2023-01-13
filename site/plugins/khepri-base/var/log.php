<?php
function writeLog($message, $kirby) {
    $logOn = $kirby->option('phpLog');
    if ($logOn) {
        $currentDate = date('d-m-y H:i:s');

        if (is_string($message) == false ) {
            if (is_array($message) == true) {
                error_log("\n[". $currentDate ."] ". json_encode($message), 3, "log/log.txt");
            } else {
                error_log("\n[". $currentDate ."] ". strval($message), 3, "log/log.txt");
            }
        } else {
            error_log("\n[". $currentDate ."] ". $message, 3, "log/log.txt");
        }
    }
}

function consoleLog($message, $kirby) {
    if (is_array($message)) {
        $message = implode(',', $message);
    }

    echo "<script>console.log('" . $message . "' );</script>";
}

function consoleError($message, $kirby) {
    if (is_array($message)) {
        $message = implode(',', $message);
    }

    echo "<script>console.error('" . $message . "' );</script>";
}

?>