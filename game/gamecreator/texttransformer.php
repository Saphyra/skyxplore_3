<?php
    $file = fopen("starnames.txt", "r");
    $names = [];
    while($line = fgets($file)){
        $names[] = trim($line);
    }
    fclose($file);
    
    touch("starnames.json");
    $json = fopen("starnames.json", "w");
    fwrite($json, json_encode($names));
    fclose($json);
    
?>