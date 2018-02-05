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
        
        persist($game);
        return $game;
    }
    
        function persist($game){
            $starQuery = persistStars($game["gameid"], $game["stars"]);
            $planetQuery = persistPlanets($game["gameid"], $game["planets"]);
            $buildingQuery = persistBuildings($game["gameid"], $game["buildings"]);
            $fleetQuery = persistFleets($game["gameid"], $game["fleets"]);
            $shipQuery = persistShips($game["gameid"], $game["ships"]);
            
            $query = array_merge($starQuery, $planetQuery, $buildingQuery, $fleetQuery, $shipQuery);
            
            foreach($query as $line){
                mysqli_query($_SESSION["conn"], $line);
            }
        }
        
            function persistStars($gameid, $stars){
                $query = [];
                foreach($stars as $starid=>$star){
                    $connections = json_encode($star->connections);
                    $visibility = json_encode($star->visibility);
                    
                    $query[] = "INSERT INTO stars(starid, gameid, xcord, ycord, owner, planetnum, starname, connections, visibility) VALUES('$starid', '$gameid', '$star->xcord', '$star->ycord', '$star->owner', '$star->planetnum', '$star->starname', '$connections', '$visibility');";
                }
                return $query;
            }
            
            function persistPlanets($gameid, $planets){
                $query = [];
                foreach($planets as $planetid=>$planet){
                    $slots = json_encode($planet->slots);
                    $query[] = "INSERT INTO planets(planetid, gameid, starid, planetname, size, type, slots) VALUES('$planetid', '$gameid', '$planet->starid', '$planet->planetname', '$planet->size', '$planet->type', '$slots');";
                }
                return $query;
            }
            
            function persistBuildings($gameid, $buildings){
                $query = [];
                
                foreach($buildings as $buildingid=>$building){
                    $data = json_encode($building->data);
                    $query[] = "INSERT INTO buildings(buildingid, gameid, planetid, type, level, data) VALUES('$buildingid', '$gameid', '$building->planetid', '$building->type', '$building->level', '$data');";
                }
                
                return $query;
            }
            
            function persistFleets($gameid, $fleets){
                $query = [];
                
                foreach($fleets as $fleetid=>$fleet){
                    $data = json_encode($fleet->data);
                    $query[] = "INSERT INTO fleets(fleetid, gameid, owner, xcord, ycord, data) VALUES('$fleetid', '$gameid', '$fleet->owner', '$fleet->xcord', '$fleet->ycord', '$data');";
                }
                
                return $query;
            }
            
            function persistShips($gameid, $ships){
                $query = [];
                
                foreach($ships as $shipid=>$ship){
                    $details = json_encode($ship->details);
                    $stats = json_encode($ship->stats);
                    $query[] = "INSERT INTO ships(shipid, gameid, fleetid, owner, details, stats) VALUES('$shipid', '$gameid', '$ship->fleetid', '$ship->owner', '$details', '$stats');";
                }
                return $query;
            }
            
    class ArrayList{
        public $array = [];
    }
?>