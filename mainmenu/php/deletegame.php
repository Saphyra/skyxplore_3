<?php
    include("../../content/php/connection.php");
    
    if(!isset($_POST["gameid"])){
        $_SESSON["changeerrormessage"] = "Ismeretlen játék.";
        header("location:../changeerror.php");
    }else{
        $gameid = $_POST["gameid"];
        mysqli_query($_SESSION["conn"], "DELETE FROM games WHERE gameid='$gameid'");
        mysqli_query($_SESSION["conn"], "DELETE FROM stars WHERE gameid='$gameid'");
        mysqli_query($_SESSION["conn"], "DELETE FROM planets WHERE gameid='$gameid'");
        mysqli_query($_SESSION["conn"], "DELETE FROM buildings WHERE gameid='$gameid'");
        mysqli_query($_SESSION["conn"], "DELETE FROM fleets WHERE gameid='$gameid'");
        mysqli_query($_SESSION["conn"], "DELETE FROM ships WHERE gameid='$gameid'");
        $_SESSION["changeerrormessage"] = "Játék törölve.";
        header("location:../changeerror.php");
    }
?>