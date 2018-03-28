<?php
    include("../../content/php/connection.php");

    function loginProcess($username, $password, $redirection, $storeMessage = true){
        $authenticationQuery = getQuery($username, $password);
        if(isUserFound($authenticationQuery)){
            login($authenticationQuery);
        }else{
            if($storeMessage){
                $_SESSION["loginerrormessage"] = "Felhasználónév és jelszó kombinációja ismeretlen.";
            }
            header("location:$redirection");
        }
    }
    
        function getQuery($username, $password){
            return mysqli_query($_SESSION["conn"], "SELECT * FROM users WHERE username='$username' AND password='$password'");
        }
        
        function isUserFound($authenticationQuery){
            return mysqli_num_rows($authenticationQuery) == 1;
        }
        
        function login($authenticationQuery){
            $userData = mysqli_fetch_assoc($authenticationQuery);
            $_SESSION["user"] = $userData;
            if(isset($_POST["stayloggedin"])){
                setLogInCookie($userData);
            }
            
            if(!isRegistrationValidated($userData["requestdata"])){
                header("location:../validateregistration.php");
            }else if(!isNewEmailValidated($userData["requestdata"])){
                header("location:../validatenewemail.php");
            }else{
                header("location:../../mainmenu/mainmenu.php");
            }
        }
        
        function setLogInCookie($userData){
            $user["username"] = $userData["username"];
            $user["password"] = $userData["password"];
            setcookie("logindata", json_encode($user), time() + (86400 * 365), "/");
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