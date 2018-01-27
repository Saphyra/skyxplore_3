<?php
    include("../../content/php/connection.php");
    
    if(!isset($_POST["regusername"]) || !isset($_POST["regemail"]) || !isset("$regpassword1")){
        $_SESSION["loginerrormessage"] = "Adja meg a regisztrációhoz szükséges adatokat!";
        header("location:../loginerror.php");
        exit;
    }
    
    $username = $_POST["regusername"];
    $email = $_POST["regemail"];
    $password = $_POST["regpassword1"];
    $id = createId();
    $requestData = createRequestData();
    
    mysqli_query($_SESSION["conn"], "INSERT INTO users(id, username, password, email, requestdata) VALUES('$id', '$username', '$password', '$email', '$requestData')");
    
    //Email elküldése az e-mail címre
    
    $_SESSION["user"] = mysqli_fetch_assoc(mysqli_query($_SESSION["conn"], "SELECT * FROM users WHERE id='$id'"));
    header("location:../validateregistration.php");
    
    function createId(){
        do{
            $id = "user";
            for($x = 0; $x < 10; $x++){
                $id .= rand(0, 9);
            }
            $query = mysqli_query($_SESSION["conn"], "SELECT id FROM users WHERE id='$id'");
        }while(mysqli_num_rows($query) > 0);
        return $id;
    }
    
    function createRequestData(){
        $validationNumber = "";
        for($x = 0; $x < 10; $x++){
            $validationNumber .= rand(0, 9);
        }
        
        $requestData["validateregistration"] = $validationNumber;
        
        return json_encode($requestData);
    }
?>