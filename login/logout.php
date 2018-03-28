<?php
    include("../content/php/session.php");
    session_destroy();
    setcookie('logindata', null, -1, '/');
    header("location:../index.php");
?>