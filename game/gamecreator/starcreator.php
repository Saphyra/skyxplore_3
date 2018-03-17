<?php
    function createStars(){
        $stars = getStarCoordinates();
        createConnections($stars);
        return $stars;
    }
        
        function getStarCoordinates(){
            $stars = [];
            $starnamesUsed = [];
            $starnames = getGameData("starnames");
            for($starnum = 0; $starnum < 300; $starnum++){
                $xcord = rand(0, 1999);
                $ycord = rand(0, 1999);
                if(isStarPlaceable($stars, $xcord, $ycord)){
                    $starid = generateStarId($stars);
                    $star = new Star($starid, $xcord, $ycord, getStarName($starnames, $starnamesUsed));
                    $stars[$star->starid] = $star;
                }
            }
            return $stars;
        }
        
            function isStarPlaceable($stars, $xcord, $ycord){
                $result = true;
                foreach($stars as $star){
                    if(getDistance($star->xcord, $star->ycord, $xcord, $ycord) < 148){
                        $result = false;
                        break;
                    }
                }
                
                return $result;
            }
            
                function getDistance($x1, $y1, $x2, $y2){
                    return sqrt(pow($x1 - $x2, 2) + pow($y1 - $y2, 2));
                }
                
            function generateStarId($stars){
                $starid = "star";
                do{
                    for($x = 0; $x < 10; $x++){
                        $starid .= rand(0, 9);
                    }
                }while(array_key_exists($starid, $stars) );
                return $starid;
            }
            
            function getStarName($starnames, $starnamesUsed){
                do{
                    $starname = $starnames[rand(0, count($starnames) - 1)];
                }while(in_array($starname, $starnamesUsed));
                $starnamesUsed[] = $starname;
                return $starname;
            }
            
    function createConnections($stars){
        createDistanceConnections($stars);
        createDistantConnections($stars);
        removeConnections($stars);
    }
    
        function createDistanceConnections($stars){
            $connections = [];
            foreach($stars as $starid=>$star){
                foreach($stars as $targetStarid=>$targetStar){
                    $connectionName = createConnectionName($starid, $targetStarid);
                    $distance = getDistance($star->xcord, $star->ycord, $targetStar->xcord, $targetStar->ycord);
                    if($starid != $targetStarid && $distance <= 300 && !in_array($connectionName, $connections)){
                        $connections[] = $connectionName;
                        array_push($stars[$starid]->connections, $connectionName);
                        array_push($stars[$targetStarid]->connections, $connectionName);
                    }
                }
            }
        }
        
        function createConnectionName($starId1, $starId2){
            return $starId1 < $starId2 ? $starId1 . "-" . $starId2 : $starId2 . "-" . $starId1;
        }
        
        function createDistantConnections($stars){
            foreach($stars as $starid=>$star){
                if(!count($star->connections)){
                    $targetStar = getClosestStar($stars, $star);
                    $connectionName = createConnectionName($starid, $targetStar->starid);
                    array_push($stars[$starid]->connections, $connectionName);
                    array_push($stars[$targetStar->starid]->connections, $connectionName);
                }
            }
        }
        
            function getClosestStar($stars, $star){
                $minDistance = 10000;
                $minStar = null;
                
                foreach($stars as $targetStarid=>$targetStar){
                    if($targetStarid != $star->starid){
                        $distance = getDistance($star->xcord, $star->ycord, $targetStar->xcord, $targetStar->ycord);
                        if($distance < $minDistance){
                            $minDistance = $distance;
                            $minStar = $targetStar;
                        }
                    }
                }
                return $minStar;
            }
        
        function removeConnections($stars){
            foreach($stars as $starid=>$star){
                while(count($star->connections) > 4){
                    $connections = getConnectionDetails($stars, $star, $starid);
                    $connectionDetail = getDeletableConnection($connections);
                    
                    unset($star->connections[array_search($connectionDetail["connectionname"], $star->connections)]);
                    
                    $index = array_search($connectionDetail["connectionname"], $stars[$connectionDetail["targetstarid"]]->connections);
                    unset($stars[$connectionDetail["targetstarid"]]->connections[$index]);
                }
            }
        }
        
            function getConnectionDetails($stars, $star, $starid){
                $connections = [];
                foreach($star->connections as $connectionName){
                    $targetStarid = getTargetId($connectionName, $starid);
                    
                    $connections[$targetStarid] = [];
                    $connections[$targetStarid]["targetstarid"] = $targetStarid;
                    $connections[$targetStarid]["connectionname"] = $connectionName;
                    $connections[$targetStarid]["connectionnum"] = count($stars[$targetStarid]->connections);
                    $connections[$targetStarid]["distance"] = getDistance($star->xcord, $star->ycord, $stars[$targetStarid]->xcord, $stars[$targetStarid]->ycord);
                }
                return $connections;
            }
        
                function getTargetId($connectionName, $starid){
                    $ids = explode("-", $connectionName);
                    return $ids[0] == $starid ? $ids[1] : $ids[0];
                }
                
            function getDeletableConnection($connections){
                $maxConnectionNums = [];
                $maxConnectionNum = 0;
                
                foreach($connections as $targetStarid=>$connectionDetail){
                    if($connectionDetail["connectionnum"] > $maxConnectionNum){
                        unset($maxConnectionNums);
                        $maxConnectionNum = $connectionDetail["connectionnum"];
                        $maxConnectionNums[] = $connectionDetail;
                    }else if($connectionDetail["connectionnum"] = $maxConnectionNum){
                        $maxConnectionNums[] = $connectionDetail;
                    }
                }
                
                $maxDistance = 0;
                $maxDistanceConnection = null;
                foreach($maxConnectionNums as $connectionDetail){
                    if($connectionDetail["distance"] > $maxDistance){
                        $maxDistance = $connectionDetail["distance"];
                        $maxDistanceConnection = $connectionDetail;
                    }
                }
                
                return $maxDistanceConnection;
            }
            
    class Star{
        public $starid;
        public $xcord;
        public $ycord;
        public $owner = "neutral";
        public $starname;
        public $planetnum;
        public $connections = [];
        public $visibility;
        public $data;
        
        function Star($starid, $xcord, $ycord, $starname){
            $this->starid = $starid;
            $this->xcord = $xcord;
            $this->ycord = $ycord;
            $this->starname = $starname;
            $this->planetnum = rand(0, 6);
            $this->visibility = $this->setVisibility();
            $this->data = $this->createStarData();
        }
        
        private function setVisibility(){
            $defaultVisibility["visibility"] = "hidden";
            $defaultVisibility["snapshot"] = new stdClass();
            
            $visibility["player"] = $defaultVisibility;
            $visibility["enemy"] = $defaultVisibility;
            
            return $visibility;
        }
        
        private function createStarData(){
            $starData = [];
            
            $starData["queue"] = new stdClass();
            
            $starData["resources"] = [];
            $starData["resources"]["food"] = 0;
            $starData["resources"]["depot"] = [];
            $starData["resources"]["storage"] = [];
            
            $starData["foodproductionpriority"] = 6;
            $starData["storagestatus"] = [];
            $starData["storagestatus"]["minfridgestatus"] = 70;
            $starData["storagestatus"]["maxfridgestatus"] = 90;
            
            $starData["citizennum"] = 0;
            
            return $starData;
        }
    }
?>