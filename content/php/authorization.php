<?php
    include("connection.php");
    
    if(!isInSession()){
        redirect();
    } else {
        $userQuery = getQuery();
        if(isUserFound($userQuery)){
            updateUser($userQuery);
        } else{
            redirect();
        }
    }
    
    function isInSession(){
        return isset($_SESSION["user"]) && isset($_SESSION["user"]["username"]) && isset($_SESSION["user"]["password"]);
    }
    
    function getQuery(){
        $username = $_SESSION["user"]["username"];
        $password = $_SESSION["user"]["password"];
        
        return mysqli_query($_SESSION["conn"], "SELECT * FROM users WHERE username='$username' AND password='$password'");
    }
    
    function isUserFound($userQuery){
        return mysqli_num_rows($userQuery)== 1;
    }
    
    function updateUser($userQuery){
        $_SESSION["user"] = mysqli_fetch_assoc($userQuery);
    }
    
    function redirect(){
        header("location:../index.php");
    }
?>