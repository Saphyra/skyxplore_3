<?php
    include("../content/connection.php");
    if(!isset($_SESSION["loginerrormessage"])){
        header("location:../index.php");
    }
?>

<HTML>
<HEAD>
    <TITLE>Hiba a bejelentkezés során.</TITLE>
    <META charset="utf-8">
    <LINK rel="stylesheet" href="../css/common.css">
    <LINK rel="stylesheet" href="../css/index/errorpage_style.css">
</HEAD>
<BODY>
    <MAIN>
        <H1><?php print $_SESSION["loginerrormessage"]; unset($_SESSION["loginerrormessage"]); ?></H1>
        <A href="../index.php">Kezdőlap</A>
    </MAIN>
</BODY>
</HTML>