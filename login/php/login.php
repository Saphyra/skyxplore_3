<?php
    include("loginprocess.php");
    
    if(!isset($_POST["loginusername"]) || !isset($_POST["loginpassword"])){
        $_SESSION["loginerrormessage"] = "Adja meg flehasználónevét és jelszavát!";
        header("location:../loginerror.php");
    }else{
        $username = $_POST["loginusername"];
        $password = $_POST["loginpassword"];
        $redirection = "../loginerror.php";
        
        loginProcess($username, $password, $redirection);
    }
    
    
?>