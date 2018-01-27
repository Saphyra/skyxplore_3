<?php
    include("../../content/php/authorization.php");

    if(!isset($_POST["newemail"]) || !isset($_POST["newemailpassword"])){
        $_SESSION["changeerrormessage"] = "Adja meg új e-mail címét, és jelszavát!";
        header("location:../changeerror.php");
        exit;
    }
    
    $newEmail = $_POST["newemail"];
    $password = $_POST["newemailpassword"];
    
    if($password != $_SESSION["user"]["password"]){
        $_SESSION["changeerrormessage"] = "Hibás jelszó.";
        header("location:../changeerror.php");
    }else if($newEmail == $_SESSION["user"]["email"]){
        $_SESSION["changeerrormessage"] = "A saját e-mail címed adtad meg.";
        header("location:../changeerror.php");
    }else if(isEmailRegistered($newEmail)){
        $_SESSION["changeerrormessage"] = "Az e-mail cím már regisztrálva van.";
        header("location:../changeerror.php");
    } else{
        process($newEmail);
        $_SESSION["changeerrormessage"] = "Megerősítő e-mail a regisztrált e-mail címre elküldve.";
        header("location:../changeerror.php");
    }
    
    function isEmailRegistered($email){
        return mysqli_num_rows(mysqli_query($_SESSION["conn"], "SELECT email FROM users WHERE email='$email'")) != 0;
    }
    
    function process($email){
        $data["newemail"] = $email;
        $data["oldemail"] = $_SESSION["user"]["email"];
        $data["code"] = generateCode();
        
        $request = json_decode($_SESSION["user"]["requestdata"], 1);
        $request["changeemail"] = $data;
        
        $requestData = json_encode($request);
        $_SESSION["user"]["requestdata"] = $requestData;
        $id = $_SESSION["user"]["id"];
        
        mysqli_query($_SESSION["conn"], "UPDATE users SET requestdata='$requestData' WHERE id='$id'");
    }
    
    function generateCode(){
        $code = "";
        for($x = 0; $x < 10; $x++){
            $code .= rand(0, 9);
        }
        return $code;
    }
?>