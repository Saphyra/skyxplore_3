<?php
    include("../content/php/session.php");
    if(!isset($_SESSION["forgottenerrormessage"])){
        header("location:../index.php");
    }
?>

<HTML>
<HEAD>
    <TITLE>Hiba a felhasználói adatok lekérése során</TITLE>
    <META charset="utf-8">
    <LINK rel="stylesheet" href="../css/common.css">
    <LINK rel="stylesheet" href="../css/index/errorpage_style.css">
</HEAD>
<BODY>
    <MAIN>
        <H1><?php print $_SESSION["forgottenerrormessage"]; unset($_SESSION["forgottenerrormessage"]); ?></H1>
        <A href="forgotten.php">Újra</A>
        <A href="../index.php">Kezdőlap</A>
    </MAIN>
</BODY>
</HTML>