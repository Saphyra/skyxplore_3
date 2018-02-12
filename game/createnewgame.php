<?php
    include("../content/php/authorization.php");
    include("gamecreator/gamecreator.php");
    
    if(!isset($_POST["gamename"])){
        $_SESSION["changeerrormessage"] = "Adja meg a játék nevét!";
        header("location:../mainmenu/changeerror.php");
    }else{
        $gameid = createNewGame($_SESSION["user"]["id"], $_POST["gamename"]);
        $game = gameCreator($gameid);
        persist($game);
        $_SESSION["changeerrormessage"] = "Játék létrehozva.";
        header("location:../mainmenu/changeerror.php");
    }
    
    function createNewGame($id, $gamename){
        $gameid = createGameId();
        mysqli_query($_SESSION["conn"], "INSERT INTO games(gameid, userid, gamename) VALUES('$gameid', '$id', '$gamename')");
        return $gameid;
    }
    
    function createGameId(){
        do{
            $gameid = "game";
            for($x = 0; $x < 10; $x++){
                $gameid .= rand(0, 9);
            }
        }while(isGameIdExists($gameid));
        return $gameid;
    }
    
    function isGameIdExists($gameid){
        return mysqli_num_rows(mysqli_query($_SESSION["conn"], "SELECT gameid FROM games WHERE gameid='$gameid'")) != 0;
    }
    
    function persist($game){
        checkFolder();
        $filename = "saves/" . $game["gameid"] . ".json";
        $file = fopen($filename, "w");
        fwrite($file, json_encode($game));
        fclose($file);
    }
    
    function checkFolder(){
        if(!file_exists("saves")){
            mkdir("saves");
        }
    }
?>