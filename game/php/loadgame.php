<?php
    include("../../content/php/connection.php");
    if(!isset($_POST["gameid"])){
        header("location:../../mainmenu/mainmenu.php");
    }else{
        $gameid = $_POST["gameid"];
        $game["game"] = gameQuery($gameid);
        $game["stars"] = starQuery($gameid);
        $game["planets"] = planetQuery($gameid);
        $game["buildings"] = buildingQuery($gameid);
        $game["fleets"] = fleetQuery($gameid);
        $game["ships"] = shipQuery($gameid);
        
        print json_encode($game);
    }
    
    function gameQuery($gameid){
        $query = mysqli_query($_SESSION["conn"], "SELECT * FROM games WHERE gameid='$gameid'");
        return mysqli_fetch_assoc($query);
    }
    
    function starQuery($gameid){
        $query = mysqli_query($_SESSION["conn"], "SELECT * FROM stars WHERE gameid='$gameid'");
        $stars = [];
        
        while($starData = mysqli_fetch_assoc($query)){
            $starData["connections"] = json_decode($starData["connections"], 1);
            $starData["visibility"] = json_decode($starData["visibility"], 1);
            
            $stars[$starData["starid"]] = $starData;
        }
        
        return $stars;
    }
    
    function planetQuery($gameid){
        $query = mysqli_query($_SESSION["conn"], "SELECT * FROM planets WHERE gameid='$gameid'");
        $planets = [];
        
        while($planetData = mysqli_fetch_assoc($query)){
            $planetData["slots"] = json_decode($planetData["slots"], 1);
            
            $planets[$planetData["planetid"]] = $planetData;
        }
        
        return $planets;
    }
    
    function buildingQuery($gameid){
        $query = mysqli_query($_SESSION["conn"], "SELECT * FROM buildings WHERE gameid='$gameid'");
        $buildings = [];
        
        while($buildingData = mysqli_fetch_assoc($query)){
            $buildingData["data"] = json_decode($buildingData["data"], 1);
            
            $buildings[$buildingData["buildingid"]] = $buildingData;
        }
        
        return $buildings;
    }
    
    function fleetQuery($gameid){
        $query = mysqli_query($_SESSION["conn"], "SELECT * FROM fleets WHERE gameid='$gameid'");
        $fleets = [];
        
        while($fleetData = mysqli_fetch_assoc($query)){
            $fleetData["data"] = json_decode($fleetData["data"], 1);
            
            $fleets[$fleetData["fleetid"]] = $fleetData;
        }
        
        return $fleets;
    }
    
    function shipQuery($gameid){
        $query = mysqli_query($_SESSION["conn"], "SELECT * FROM ships WHERE gameid='$gameid'");
        $ships = [];
        
        while($shipData = mysqli_fetch_assoc($query)){
            $shipData["details"] = json_decode($shipData["details"], 1);
            $shipData["stats"] = json_decode($shipData["stats"], 1);
            
            $ships[$shipData["shipid"]] = $shipData;
        }
        
        return $ships;
    }
?>