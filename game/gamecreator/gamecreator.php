<?php
    include("/../gamedata/dataloader.php");
    include("starcreator.php");
    include("planetcreator.php");
    include("capitalcreator.php");
    include("fleetcreator.php");
    
    function gameCreator($gameid){
        $game["gameid"] = $gameid;
        $game["players"] = createPlayers();
        $game["stars"] = createStars();
        $game["planets"] = createPlanets($game["stars"]);
        $game["buildings"] = setCapitals($game);
        $game = createNeutralFleets($game);
        
        return $game;
    }
    
        function createPlayers(){
            $players["player"] = new Player("player");
            $players["enemy"] = new Player("enemy");
            return $players;
        }
            
    class ArrayList{
        public $array = [];
    }
    
    class Player{
        public $playerid;
        public $money = 20;
        
        function Player($playerid){
            $this->playerid = $playerid;
        }
    }
?>