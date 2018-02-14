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
    <LINK rel="stylesheet" href="../css/reset.css">
    <LINK rel="stylesheet" href="../css/common.css">
    <LINK rel="stylesheet" href="../css/classes.css">
    
    <STYLE>
        @media screen and (max-width: 500px){
            main{
                position: static !important;
                height: 100%;
            }
        }
    </STYLE>
</HEAD>
<BODY>
    <MAIN class='absolute50rem backgroundblack8 borderridge border5px bordercolor100 centertext overflowauto'>
        <H1><?php print $_SESSION["forgottenerrormessage"]; unset($_SESSION["forgottenerrormessage"]); ?></H1>
        <DIV class='margintop20rem'><A class='fontsize20rem' href="forgotten.php">Újra</A></DIV>
        <DIV class='margintop20rem'><A class='fontsize20rem' href="../index.php">Kezdőlap</A></DIV>
    </MAIN>
</BODY>
</HTML>

