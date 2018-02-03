<?php
    include("/../gamedata/dataloader.php");
    include("starcreator.php");
    include("planetcreator.php");
    include("capitalcreator.php");
    include("fleetcreator.php");
    
    function gameCreator($gameid){
        $game["gameid"] = $gameid;
        $game["stars"] = createStars();
        $game["planets"] = createPlanets($gameid, $game["stars"]);
        $game["buildings"] = setCapitals($game);
        $game = createNeutralFleets($game);
        
        //persist($game);
        return $game;
    }
    
        function persist($game){
            $starQuery = persistStars($game["gameid"], $game["stars"]);
            $planetQuery = persistPlanets($game["gameid"], $game["planets"]);
            $buildingQuery = persistBuildings($game["gameid"], $game["buildings"]);
            
            $query = $starQuery . $planetQuery . $buildingQuery;
            mysqli_multi_query($_SESSION["conn"], $query);
        }
        
            function persistStars($gameid, $stars){
                $query = "";
                foreach($stars as $starid=>$star){
                    $connections = json_encode($star->connections);
                    
                    $query .= "INSERT INTO stars(starid, gameid, xcord, ycord, owner, planetnum, starname, connections) VALUES('$starid', '$gameid', '$star->xcord', '$star->ycord', '$star->owner', '$star->planetnum', '$star->starname', '$connections');";
                }
                return $query;
            }
            
            function persistPlanets($gameid, $planets){
                $query = "";
                foreach($planets as $planetid=>$planet){
                    $slots = json_encode($planet->slots);
                    $query .= "INSERT INTO planets(planetid, gameid, starid, planetname, size, type, slots) VALUES('$planetid', '$gameid', '$planet->starid', '$planet->planetname', '$planet->size', '$planet->type', '$slots');";
                }
                return $query;
            }
            
            function persistBuildings($gameid, $buildings){
                $query = "";
                
                foreach($buildings as $buildingid=>$building){
                    $data = json_encode($building->data);
                    $query .= "INSERT INTO buildings(buildingid, gameid, planetid, type, level, data) VALUES('$buildingid', '$gameid', '$building->planetid', '$building->type', '$building->level', '$data');";
                }
                
                return $query;
            }
            
    class ArrayList{
        public $array = [];
    }
?>