<?php
    include("../content/php/connection.php");
    if(!isset($_SESSION["id"])){
        header("location:../index.php");
    }
    
    $message = "";
    
    if(isset($_POST["validationcode"])){
        validate();
    }
?>

<HTML>
<HEAD>
    <TITLE>Regisztráció megerősítése</TITLE>
    <META charset="utf-8">
    <LINK rel="stylesheet" href="../css/common.css">
    <LINK rel="stylesheet" href="../css/index/validateregistration_style.css">
</HEAD>
<BODY>
    <MAIN>
        <H1>Regisztráció megerősítése</H1>
        <H2><?php print $message; ?></H2>
        <FORM method="POST">
            <LABEL>Írja be a megadott e-mail címére küldött megerősítő kódot:</LABEL>
            <INPUT type="text" name="validationcode" placeholder="Megerősítő kód" required><BR>
            <BUTTON>Regisztráció megerősítése</BUTTON>
        </FORM>
        <A href="../index.php">Kezdőlap</A>
    </MAIN>
</BODY>
</HTML>

<?php
    function validate(){
        $id = $_SESSION["id"];
        
        $requestData = getRequestData($id);
        
        if(isset($requestData["validateregistration"])){
            $code = $requestData["validateregistration"];
        
            if($code == $_POST["validationcode"]){
                validateRegistration($requestData, $id);
            }else{
                $message = "Érvénytelen megerősítő kód!";
            }
        } else{
            $message = "Regisztráció már meg lett erősítve.";
        }
    }
    
    function getRequestData($id){
        $query = mysqli_query($_SESSION["conn"], "SELECT requestdata FROM users where id='$id'");
        $result = mysqli_fetch_assoc($query);
        return json_decode($result["requestdata"], 1);
    }
    
    function validateRegistration($requestData, $id){
        unset($requestData["validateregistration"]);
        update($requestData, $id);
        $_SESSION["loginerrormessage"] = "Regisztráció megerősítve!";
        header("location:loginerror.php");
    }
    
    function update($requestData, $id){
        $reqData = json_encode($requestData);
        mysqli_query($_SESSION["conn"], "UPDATE users SET requestdata='$reqData' WHERE id='$id'");
    }
?>