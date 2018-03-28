<?php
    include("loginprocess.php");

    if(isset($_COOKIE["logindata"])){
        $user = json_decode($_COOKIE["logindata"], 1);
        $redirection = "../../index.php";
        loginProcess($user["username"], $user["password"], $redirection, false);
    }else{
        header("location:../../index.php");
    }
    
    
    
?>