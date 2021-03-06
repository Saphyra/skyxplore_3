<?php
    include("../content/php/connection.php");
    if(!isset($_SESSION["user"]["id"])){
        header("location:../index.php");
    }
    
    $message = "";
    
    if(isset($_POST["cancel"])){
        cancel();
    }if(isset($_POST["validationcode"])){
        validate();
    }
?>

<HTML>
<HEAD>
    <TITLE>Új e-mail cím megerősítése</TITLE>
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
        <H1 class='marginbottom5rem'>Új e-mail cím megerősítése</H1>
        <H2 class='fontsize20rem marginbottom10rem underline'><?php print $message; ?></H2>
        <FORM class='marginbottom30rem' method="POST">
            <LABEL class='fontsize20rem'>Írja be az új e-mail címére küldött megerősítő kódot:</LABEL>
            <INPUT class='fontsize15rem' type="text" name="validationcode" placeholder="Megerősítő kód" required><BR>
            <BUTTON class='margintop5rem fontsize15rem'>Új e-mail cím megerősítése</BUTTON>
        </FORM>
        <FORM class='marginbottom30rem' method='POST'>
            <BUTTON class='margintop5rem fontsize15rem'>Változtatás visszavonása</BUTTON>
            <INPUT type='hidden' name='cancel'>
        </FORM>
        <A class='fontsize20rem' href="../index.php">Kezdőlap</A>
    </MAIN>
</BODY>
</HTML>

<?php
    function validate(){
        $id = $_SESSION["user"]["id"];
        
        $requestData = getRequestData($id);
        
        if(isset($requestData["newemailcode"])){
            $code = $requestData["newemailcode"];
        
            if($code == $_POST["validationcode"]){
                confirmNewEmail($requestData, $id);
            }else{
                $message = "Érvénytelen megerősítő kód!";
            }
        } else{
            $message = "Az új e-mail cím már meg lett erősítve.";
        }
    }
    
    function getRequestData($id){
        $query = mysqli_query($_SESSION["conn"], "SELECT requestdata FROM users where id='$id'");
        $result = mysqli_fetch_assoc($query);
        return json_decode($result["requestdata"], 1);
    }
    
    function confirmNewEmail($requestData, $id){
        unset($requestData["newemailcode"]);
        unset($requestData["changeemail"]);
        update($requestData, $id);
        $_SESSION["loginerrormessage"] = "Új e-mail cím megerősítve!";
        header("location:loginerror.php");
    }
    
    function update($requestData, $id){
        $reqData = json_encode($requestData);
        mysqli_query($_SESSION["conn"], "UPDATE users SET requestdata='$reqData' WHERE id='$id'");
    }
    
    function cancel(){
        $id = $_SESSION["user"]["id"];
        
        $requestData = getRequestData($id);
        
        $oldEmail = $requestData["changeemail"]["oldemail"];
        mysqli_query($_SESSION["conn"], "UPDATE users SET email='$oldEmail' WHERE id='$id'");
        
        unset($requestData["changeemail"]);
        unset($requestData["newemailcode"]);
        update($requestData, $id);
        
        $_SESSION["loginerrormessage"] = "Változtatások visszavonva.";
        header("location:loginerror.php");
    }
?>