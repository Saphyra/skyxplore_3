<?php
    include("../../content/php/connection.php");
    
    if(!isset($_POST["username"])){
        print 1;
    } else{
        $username = $_POST["username"];
        $query = mysqli_query($_SESSION["conn"], "SELECT pkey FROM users WHERE username='$username'");
        
        print mysqli_num_rows($query);
    }
?>