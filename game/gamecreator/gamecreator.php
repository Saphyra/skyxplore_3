<?php
    include("starcreator.php");
    function gameCreator($gameid){
        $game["gameid"] = $gameid;
        $game["stars"] = createStars();
        persist($game);
        return $game;
    }
    
        function persist($game){
            persistStars($game["gameid"], $game["stars"]);
        }
        
            function persistStars($gameid, $stars){
                foreach($stars as $starid=>$star){
                    $connections = json_encode($star->connections);
                    mysqli_query($_SESSION["conn"], "INSERT INTO stars(starid, gameid, xcord, ycord, planetnum, starname, connections) VALUES('$starid', '$gameid', '$star->xcord', '$star->ycord', '$star->planetnum', '$star->starname', '$connections')");
                }
            }
?>