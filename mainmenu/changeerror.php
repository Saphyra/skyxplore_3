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
    <MAIN class='absolute50rem backgroundblack8 border5px borderridge bordercolor100 centertext overflowauto'>
        <H1 class='marginbottom20rem'><?php print $message; ?></H1>
        <A class='block fontsize20rem marginauto marginbottom10rem width100rem' href="mainmenu.php">Vissza</A>
    </MAIN>
</BODY>
</HTML>
