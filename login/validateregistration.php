<?php
    include("../content/php/connection.php");
    if(!isset($_SESSION["user"]["id"])){
        header("location:../index.php");
    }
    
    $GLOBALS["message"] = "";
    
    if(isset($_POST["validationcode"])){
        validate();
    }
?>

<HTML>
<HEAD>
    <TITLE>Regisztráció megerősítése</TITLE>
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
        <H1 class='marginbottom5rem'>Regisztráció megerősítése</H1>
        <H2 class='fontsize20rem marginbottom10rem underline'><?php print $GLOBALS["message"]; ?></H2>
        <FORM class='marginbottom30rem' method="POST">
            <LABEL class='fontsize20rem'>Írja be a megadott e-mail címére küldött megerősítő kódot:</LABEL>
            <INPUT class='fontsize15rem' type="text" name="validationcode" placeholder="Megerősítő kód" required><BR>
            <BUTTON class='fontsize15rem margintop5rem'>Regisztráció megerősítése</BUTTON>
        </FORM>
        <A class='fontsize20rem' href="../index.php">Kezdőlap</A>
    </MAIN>
</BODY>
</HTML>

<?php
    function validate(){
        $id = $_SESSION["user"]["id"];
        
        $requestData = getRequestData($id);
        
        if(isset($requestData["validateregistration"])){
            $code = $requestData["validateregistration"];
        
            if($code == $_POST["validationcode"]){
                validateRegistration($requestData, $id);
            }else{
                $GLOBALS["message"] = "Érvénytelen megerősítő kód!";
            }
        } else{
            $GLOBALS["message"] = "Regisztráció már meg lett erősítve.";
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
        header("location:../mainmenu/mainmenu.php");
    }
    
    function update($requestData, $id){
        $reqData = json_encode($requestData);
        mysqli_query($_SESSION["conn"], "UPDATE users SET requestdata='$reqData' WHERE id='$id'");
    }
?>