<?php
    include("../../content/php/authorization.php");
    
    if(!isset($_POST["newusername"]) || !isset($_POST["newusernamepassword"])){
        $_SESSION["changeerrormessage"] = "Adja meg új felhasználónevét és jelszavát!";
        header("location:../changeerror.php");
        exit;
    }
    
    $username = $_POST["newusername"];
    $password = $_POST["newusernamepassword"];
    if(!isInputValid($username, $password)){
        header("location:../mainmenu.php");
    }else if(isUsernameExists($username)){
        $_SESSION["changeerrormessage"] = "Felhasználónév foglalt.";
        header("location:../changeerror.php");
    }else{
        if(isPasswordCorrect($password)){
            update($username);
            $_SESSION["changeerrormessage"] = "Felhasználónév megváltoztatva.";
            header("location:../changeerror.php");
        }else{
            $_SESSION["changeerrormessage"] = "Hibás jelszó.";
            header("location:../changeerror.php");
        }
    }
    
    function isInputValid($username, $password){
        return $username != "" && $password != "";
    }
    
    function isUsernameExists($username){
        $result = false;
        $query = mysqli_query($_SESSION["conn"], "SELECT pkey FROM users WHERE username='$username'");
        if(mysqli_num_rows($query)){
            $result = true;
        }
        return $result;
    }
    
    function isPasswordCorrect($password){
        return $_SESSION["user"]["password"] == $password;
    }
    
    function update($username){
        $id = $_SESSION["user"]["id"];
        mysqli_query($_SESSION["conn"], "UPDATE users SET username='$username' WHERE id='$id'");
        $_SESSION["user"]["username"] = $username;
    }
?>