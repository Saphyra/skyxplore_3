<?php
    session_start();
    
    $_SESSION["conn"] = mysqli_connect("localhost", "root", "", "skyxplore3");
?>