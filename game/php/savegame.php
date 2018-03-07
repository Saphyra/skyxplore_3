<?php
    include("../../content/php/authorization.php");
    
    if(!isset($_POST["gameid"]) || !isset($_POST["data"])){
        header("location:../../");
    }else{
        $fileName = $_POST["gameid"] . ".json";
        $file = fopen("../saves/" . $fileName, "w");
        fwrite($file, $_POST["data"]);
        fclose($file);
        
        print 1;
    }
?>