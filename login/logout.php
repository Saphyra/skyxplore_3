<?php
    include("../content/php/session.php");
    session_destroy();
    header("location:../index.php");
?>