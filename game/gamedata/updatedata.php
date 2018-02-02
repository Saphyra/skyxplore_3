<?php
    include("writer.php");
    
    $files = scandir("php/");
    foreach($files as $file){
        if(strstr($file, ".php")){
            print "<B>$file</B><BR>";
            include_once("php/" . $file);
            print "<HR>";
        }
    }
?>