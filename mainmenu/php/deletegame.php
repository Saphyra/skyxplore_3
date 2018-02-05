<?php
    include("../../content/php/connection.php");
    
    if(!isset($_POST["gameid"])){
        $_SESSON["changeerrormessage"] = "Ismeretlen játék.";
        header("location:../changeerror.php");
    }else{
        $gameid = $_POST["gameid"];
        mysqli_query($_SESSION["conn"], "DELETE FROM games WHERE gameid='$gameid'");
        unlink("../../game/saves/$gameid.json");
        $_SESSION["changeerrormessage"] = "Játék törölve.";
        header("location:../changeerror.php");
    }
?>