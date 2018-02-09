<?php
    $files = scandir("pages/");
    foreach($files as $file){
        if(strstr($file, ".html")){
            print file_get_contents("pages/" . $file);
        }
    }
?>