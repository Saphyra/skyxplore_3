<?php
    include("../content/php/session.php");
    if(!isset($_SESSION["changeerrormessage"])){
        header("location:mainmenu.php");
    }
    
    $message = $_SESSION["changeerrormessage"];
    unset($_SESSION["changeerrormessage"]);
?>

<HTML>
<HEAD>
    <TITLE><?php print $message; ?></TITLE>
    <META charset="utf-8">
    <LINK rel="stylesheet" href="../css/common.css">
    <LINK rel="stylesheet" href="../css/index/errorpage_style.css">
</HEAD>
<BODY>
    <MAIN>
        <H1><?php print $message; ?></H1>
        <A href="mainmenu.php">Vissza</A>
    </MAIN>
</BODY>
</HTML>