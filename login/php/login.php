<?php
    include("../../content/connection.php");
    
    $username = $_POST["loginusername"];
    $password = $_POST["loginpassword"];
    
    $authenticationQuery = mysqli_query($_SESSION["conn"], "SELECT * FROM users WHERE username='$username' AND password='$password'");
    
    if(mysqli_num_rows($authenticationQuery)){
        $userData = mysqli_fetch_assoc($authenticationQuery);
        $requestData = json_decode($userData["requestdata"], 1);
        if(isset($requestData["validateregistration"])){
            header("location:../validateregistration.php");
        }else{
            $_SESSION["user"] = $userData;
            header("location:../../dock/dock.php");
        }
    }else{
        $_SESSION["loginerrormessage"] = "Felhasználónév és jelszó kombinációja ismeretlen.";
        header("location:../loginerror.php");
    }
?>