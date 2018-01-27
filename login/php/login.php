<?php
    include("../../content/php/connection.php");
    
    $authenticationQuery = getQuery();
    
    if(isUserFound($authenticationQuery)){
        login($authenticationQuery);
    }else{
        $_SESSION["loginerrormessage"] = "Felhasználónév és jelszó kombinációja ismeretlen.";
        header("location:../loginerror.php");
    }
    
    function getQuery(){
        $username = $_POST["loginusername"];
        $password = $_POST["loginpassword"];
        
        return mysqli_query($_SESSION["conn"], "SELECT * FROM users WHERE username='$username' AND password='$password'");
    }
    
    function isUserFound($authenticationQuery){
        return mysqli_num_rows($authenticationQuery) == 1;
    }
    
    function login($authenticationQuery){
        $userData = mysqli_fetch_assoc($authenticationQuery);
        $_SESSION["user"] = $userData;
        if(!isRegistrationValidated($userData["requestdata"])){
            header("location:../validateregistration.php");
        }else if(!isNewEmailValidated($userData["requestdata"])){
            header("location:../validatenewemail.php");
        }else{
            header("location:../../mainmenu/mainmenu.php");
        }
    }
    
    function isRegistrationValidated($rdata){
        $requestData = json_decode($rdata, 1);
        return !isset($requestData["validateregistration"]);
    }
    
    function isNewEmailValidated($rdata){
        $requestData = json_decode($rdata, 1);
        return !isset($requestData["newemailcode"]);
    }
?>