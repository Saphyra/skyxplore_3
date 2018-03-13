<?php
    function setCapitals($game){
        $buildings = new ArrayList();
        $capitalCoordinates = getCapitalCoordinates($game["stars"]);
        foreach($capitalCoordinates as $player=>$starId){
            setCapital($game["stars"][$starId], $game["planets"], $buildings, $player);
            setConnectedStars($game["stars"], $starId);
        }
        
        return $buildings->array;
    }
    
        function getCapitalCoordinates($stars){
            $capitalCoordinates["player"] = getRandomStarId($stars);
        
            do{
                $capitalCoordinates["enemy"] = getRandomStarId($stars);
            }while($capitalCoordinates["enemy"] == $capitalCoordinates["player"]);
            return $capitalCoordinates;
        }
    
            function getRandomStarId($stars){
                $starIds = array_keys($stars);
                $starId = $starIds[rand(0, count($starIds) - 1)];
                if(!$stars[$starId]->planetnum){
                    $starId = getRandomStarId($stars);
                }
                
                return $starId;
            }
            
        function setCapital($star, $planets, $buildings, $player){
            $star->owner = $player;
            
            $star->data["citizennum"] = 10;
            $star->data["resources"]["food"] = 200;
            $star->data["resources"]["depot"]["resource"] = 250;
            $star->data["resources"]["depot"]["board"] = 100;
            $star->data["resources"]["depot"]["brick"] = 100;
            $star->data["resources"]["depot"]["metal"] = 50;
            
            $star->visibility[$player]["visibility"] = "owned";
            $planetId = getCapitalPlanetId($planets, $star->starid);
            createBuildings($planetId, $buildings);
        }
        
            function getCapitalPlanetId($planets, $starId){
                $planetIds = [];
                foreach($planets as $planetId=>$planet){
                    if($planet->starid == $starId){
                        $planetIds[] = $planetId;
                    }
                }
                
                return $planetIds[rand(0, count($planetIds) - 1)];
            }
            
            function createBuildings($planetId, $buildings){
                $house = createBuilding($planetId, $buildings, "house");
                $buildings->array[$house->buildingid] = $house;
                
                $farm = createBuilding($planetId, $buildings, "farm");
                $buildings->array[$farm->buildingid] = $farm;
                
                $mine = createBuilding($planetId, $buildings, "mine");
                $buildings->array[$mine->buildingid] = $mine;
                
                $factory = createBuilding($planetId, $buildings, "factory");
                $buildings->array[$factory->buildingid] = $factory;
                
                $fridge = createBuilding($planetId, $buildings, "fridge");
                $buildings->array[$fridge->buildingid] = $fridge;
                
                $depot = createBuilding($planetId, $buildings, "depot");
                $buildings->array[$depot->buildingid] = $depot;
            }
            
                function createBuilding($planetId, $buildings, $type){
                    $buildingId = generateBuildingId($buildings);
                    $data["status"] = 0;
                    $data["upgradestatus"] = 0;
                    $data["resource"]["source"] = $type;
                    $data["resource"]["key"] = 1;
                    return new Building($buildingId, $planetId, $type, $data);
                }
            
                    function generateBuildingId($buildings){
                        $buildingIds = array_keys($buildings->array);
                        do{
                            $buildingId = "building";
                            for($x = 0; $x < 10; $x++){
                                $buildingId .= rand(0, 9);
                            }
                        }while(in_array($buildingId, $buildingIds));
                        return $buildingId;
                    }
                    
        function setConnectedStars($stars, $starid){
            $star = $stars[$starid];
            $owner = $star->owner;
            foreach($star->connections as $connection){
                $connecteds = explode("-", $connection);
                $otherStarId = $connecteds[0] == $starid ? $connecteds[1] : $connecteds[0];
                $stars[$otherStarId]->visibility[$owner]["visibility"] = "connected";
            }
        }
            
    class Building{
        public $buildingid;
        public $planetid;
        public $type;
        public $level = 1;
        public $data;
        
        function Building($buildingId, $planetId, $type, $data){
            $this->buildingid = $buildingId;
            $this->planetid = $planetId;
            $this->type = $type;
            $this->data = $data;
        }
    }
?>