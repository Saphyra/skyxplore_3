<?php
    include("../../content/php/authorization.php");
    if(!isset($_POST["changepassword"]) || !isset($_POST["newpassword1"]) || !isset($_POST["newpassword2"])){
        $_SESSION["changeerrormessage"] = "Adja meg a jelszavakat!";
        header("location:../changeerror.php");
        exit;
    }
    
    $oldPassword = $_POST["changepassword"];
    $newPassword1 = $_POST["newpassword1"];
    $newPassword2 = $_POST["newpassword2"];
    
    if($oldPassword != $_SESSION["user"]["password"]){
        $_SESSION["changeerrormessage"] = "Hibás jelszó.";
        header("location:../changeerror.php");
    }else if($newPassword1 != $newPassword2){
        $_SESSION["changeerrormessage"] = "Jelszavak nem egyeznek.";
        header("location:../changeerror.php");
    }else{
        $id = $_SESSION["user"]["id"];
        mysqli_query($_SESSION["conn"], "UPDATE users SET password='$newPassword1' WHERE id='$id'");
        $_SESSION["user"]["password"] = $newPassword1;
        $_SESSION["changeerrormessage"] = "Jelszó megváltoztatva.";
        header("location:../changeerror.php");
    }
?>