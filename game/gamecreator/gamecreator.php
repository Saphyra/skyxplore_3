<?php
    include("starcreator.php");
    include("planetcreator.php");
    function gameCreator($gameid){
        $game["gameid"] = $gameid;
        $game["stars"] = createStars();
        $game["planets"] = createPlanets($gameid, $game["stars"]);
        persist($game);
        return $game;
    }
    
        function persist($game){
            $starQuery = persistStars($game["gameid"], $game["stars"]);
            $planetQuery = persistPlanets($game["gameid"], $game["planets"]);
            
            $query = $starQuery . $planetQuery;
            mysqli_multi_query($_SESSION["conn"], $query);
        }
        
            function persistStars($gameid, $stars){
                $query = "";
                foreach($stars as $starid=>$star){
                    $connections = json_encode($star->connections);
                    
                    $query .= "INSERT INTO stars(starid, gameid, xcord, ycord, planetnum, starname, connections) VALUES('$starid', '$gameid', '$star->xcord', '$star->ycord', '$star->planetnum', '$star->starname', '$connections');";
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
?>