<?php
    include("../../content/php/connection.php");
    
    if(!isset($_GET["id"]) || !isset($_GET["changeemailcode"])){
        header("location:../../index.php");
    }else{
        $id = $_GET["id"];
        $code = $_GET["changeemailcode"];
        
        $query = mysqli_query($_SESSION["conn"], "SELECT * FROM users WHERE id='$id'");
        if(mysqli_num_rows($query) != 1){
            $_SESSION["changeerrormessage"] = "Felhasználó nem létezik.";
            header("location:../changeerror.php");
        }else{
            $user = mysqli_fetch_assoc($query);
            $requestData = json_decode($user["requestdata"], 1);
            
            if(!isset($requestData["changeemail"])){
                $_SESSION["changeerrormessage"] = "Érvénytelen kérelem.";
                header("location:../changeerror.php");
            }else if($requestData["changeemail"]["code"] != $code){
                $_SESSION["changeerrormessage"] = "Érvénytelen kód.";
                header("location:../changeerror.php");
            }else{
                unset($requestData["changeemail"]["code"]);
                $requestData["newemailcode"] = generateCode();
                
                $encodedData = json_encode($requestData);
                $email = $requestData["changeemail"]["newemail"];
                
                mysqli_query($_SESSION["conn"], "UPDATE users SET email='$email', requestdata='$encodedData' WHERE id='$id'");
                
                $_SESSION["changeerrormessage"] = "Email cím megváltoztatva. Az új cím megerősítéséhez jelentkezzen be újra!";
                header("location:../changeerror.php");
            }
        }
    }
    
    function generateCode(){
        $code = "";
        for($x = 0; $x < 10; $x++){
            $code .= rand(0, 9);
        }
        return $code;
    }
?>