<?php
    include("../../content/php/connection.php");
    
    $username = $_POST["forgottenusername"];
    $email = $_POST["forgottenemail"];
    
    if($username != "" && $email != ""){
        $query = mysqli_query($_SESSION["conn"], "SELECT * FROM users WHERE username='$username' AND email='$email'");
        if(!mysqli_num_rows($query)){
            sendRedirect();
        }else{
            process($query);
        }
    } else if($username != ""){
        $query = mysqli_query($_SESSION["conn"], "SELECT * FROM users WHERE username='$username'");
        if(!mysqli_num_rows($query)){
            sendRedirect();
        }else{
            process($query);
        }
    } else if($email != ""){
        $query = mysqli_query($_SESSION["conn"], "SELECT * FROM users WHERE email='$email'");
        if(!mysqli_num_rows($query)){
            sendRedirect();
        }else{
            process($query);
        }
    } else {
        $_SESSION["forgottenerrormessage"] = "Adja meg felhasználónevét vagy e-mail címét!";
        header("location:../forgottenerror.php");
    }
    
    function sendRedirect(){
        $_SESSION["forgottenerrormessage"] = "Felhasználó nem azonosítható.";
        header("location:../forgottenerror.php");
    }
    
    function process($query){
        $userData = mysqli_fetch_assoc($query);
        $id = $userData["id"];
        $username = $userData["username"];
        $password = generatePassword();
        $email = $userData["email"];
        
        mysqli_query($_SESSION["conn"], "UPDATE users SET password='$password' WHERE id='$id'");
        
        //sendEmail
        
        $_SESSION["forgottenerrormessage"] = "Felhasználói adatok a regisztrált e-mail címre elküldve.";
        header("location:../forgottenerror.php");
    }
    
    function generatePassword(){
        $password = "";
        
        for($x = 0; $x < 8; $x++){
            $password .= rand(0, 9);
        }
        
        return $password;
    }
?>