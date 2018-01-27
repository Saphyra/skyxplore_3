<?php
    include("../../content/php/authorization.php");
    
    if(!isset($_POST["password"])){
        $_SESSION["changeerrormessage"] = "Adja meg jelszavát!";
        header("location:../changeerror.php");
        exit;
    }
    
    $password = $_POST["deleteaccountpassword"];
    if($password != $_SESSION["user"]["password"]){
        $_SESSION["changeerrormessage"] = "Hibás jelszó.";
        header("location:../changeerror.php");
        exit;
    }else{
        $id = $_SESSION["user"]["id"];
        mysqli_query($_SESSION["conn"], "DELETE FROM users WHERE id='$id'");
        session_destroy();
    }
?>

<HTML>
<HEAD>
    <TITLE>Account törölve.</TITLE>
    <META charset="utf-8">
    <LINK rel="stylesheet" href="../../css/common.css">
    <LINK rel="stylesheet" href="../../css/index/errorpage_style.css">
</HEAD>
<BODY>
    <MAIN>
        <H1>Account törölve.</H1>
        <A href="../../index.php">Kezdőlap</A>
    </MAIN>
</BODY>
</HTML>