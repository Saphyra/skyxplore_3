<?php
    $GLOBALS["maxfleetsize"] = getElementData("constants", "maxfleetsize");
    
    cacheData();
    
    function cacheData(){
        $ships = getGameData("ship");
        $shipTypes = array_keys($ships);
        putToCache("shiptypes", $shipTypes);
        
        $choosableEquipments = getGameData("randomequipment");
        putToCache("choosableequipments", $choosableEquipments);
        
        $choosableEquipmentTypes = array_keys($choosableEquipments);
        putToCache("choosableequipmenttypes", $choosableEquipmentTypes);
    }
    
    
    function createNeutralFleets($game){
        $gameid = $game["gameid"];
        $game["fleets"] = createFleets($game["stars"], $gameid);
        $game = createShips($game);
        
        return $game;
    }
        
        function createFleets($stars, $gameid){
            $fleets = new ArrayList();
            $fleetids = new ArrayList();
            
            foreach($stars as $starid=>$star){
                if($star->owner == "neutral"){
                    $fleet = createNewFleet($star, $gameid, $fleetids);
                    $fleets->array[$fleet->fleetid] = $fleet;
                }
            }
            
            return $fleets->array;
        }
        
            function createNewFleet($star, $gameid, $fleetids){
                $fleetid = generateFleetid($fleetids);
                
                return new Fleet($fleetid, $gameid, $star->xcord, $star->ycord);
            }
            
                function generateFleetid($fleetids){
                    do{
                        $fleetid = "fleet";
                        for($x = 0; $x < 10; $x++){
                            $fleetid .= rand(0, 9);
                        }
                    }while(in_array($fleetid, $fleetids->array));
                    $fleetids->array[] = $fleetid;
                    
                    return $fleetid;
                }
                
        function createShips($game){
            $shipids = new ArrayList();
            
            foreach($game["fleets"] as $fleetid=>$fleet){
                $fleetSize = rand(0, $GLOBALS["maxfleetsize"]);
                if(!$fleetSize){
                    unset($game["fleets"][$fleetid]);
                }else{
                    for($x = 0; $x < $fleetSize; $x++){
                        $ship = createNewShip($shipids, $game["gameid"], $fleetid);
                        $game["ships"][$ship->shipid] = $ship;
                    }
                }
            }
            
            return $game;
        }
        
            function createNewShip($shipids, $gameid, $fleetid){
                $shipid = generateShipid($shipids);
                return new Ship($shipid, $gameid, $fleetid);
            }
            
                function generateShipid($shipids){
                    do{
                        $shipid = "ship";
                        for($x = 0; $x < 10; $x++){
                            $shipid .= rand(0, 9);
                        }
                    }while(in_array($shipid, $shipids->array));
                    $shipids->array[] = $shipid;
                    
                    return $shipid;
                }
            
    class Fleet{
        public $fleetid;
        public $gameid;
        public $owner = "neutral";
        public $xcord;
        public $ycord;
        public $data;

        function Fleet($fleetid, $gameid, $xcord, $ycord){
            $this->fleetid = $fleetid;
            $this->gameid = $gameid;
            $this->xcord = $xcord;
            $this->ycord = $ycord;
            $this->data["duty"] = [];
        }
    }
    
    class Ship{
        public $shipid;
        public $gameid;
        public $owner = "neutral";
        public $fleetid;
        public $details;
        public $stats;
        private $shipTypeData;
        
        function Ship($shipid, $gameid, $fleetid){
            $this->shipid = $shipid;
            $this->gameid = $gameid;
            $this->fleetid = $fleetid;
            $this->details = $this->getDetails();
            $this->stats = $this->getStats();
        }
        
        private function getDetails(){
            $details["shiptype"] = $this->getShipType();
            $this->shipTypeData = getElementData("ship", $details["shiptype"]);
            $details["equipment"] = $this->getEquipments($this->shipTypeData["bonus"], $this->shipTypeData["capacity"]);
            
            return $details;
        }
        
            private function getShipType(){
                $shipTypes = getFromCache("shiptypes");
                return $shipTypes[rand(0, count($shipTypes) - 1)];
            }
            
            private function getEquipments($bonuses, $capacity){
                $equipments = [];
                $actualCapacity = 0;
                    
                for($x = 0; $x < 20 && $actualCapacity < $capacity; $x++){
                    $equipment = $this->getEquipment($bonuses);
                    $equipmentData = getElementData($equipment->source, $equipment->key);
                    if($equipmentData["weight"] <= $capacity - $actualCapacity){
                        $actualCapacity += $equipmentData["weight"];
                        
                        if(isset($equipmentData["maxequipped"])){
                            $count = 0;
                            foreach($equipments as $eq){
                                if($eq->bonusType == $equipmentData["type"]){
                                    $count++;
                                }
                            }
                            if($count >= $equipmentData["maxequipped"]){
                                continue;
                            }
                        }
                        
                        $equipments[] = $equipment;
                    }
                }
                    
                return $equipments;
            }
            
                private function getEquipment($bonuses){
                    $equipment = $this->getRandomEquipment();
                    
                    if(!in_array($equipment->key, $bonuses)){
                        $equipment = $this->getRandomEquipment();
                    }
                    
                    return $equipment;
                }
                
                    private function getRandomEquipment(){
                        
                        
                        
                        $choosableEquipments = getFromCache("choosableequipments");
                        $types = getFromCache("choosableequipmenttypes");
                        $type = $types[rand(0, count($types) - 1)];
                        
                        $key = $choosableEquipments[$type]["select"][rand(0, count($choosableEquipments[$type]["select"]) - 1)];
                        if($type == "equipment"){
                            $equipment = new Equipment($choosableEquipments[$type]["source"], $key, $key);
                        }else{
                            $equipment = new Equipment($choosableEquipments[$type]["source"], $key, $type);
                        }
                        return $equipment;
                    }
                    
        private function getStats(){
            $stats["maxarmor"] = $this->shipTypeData["hull"];
            $stats["maxenergy"] = 0;
            $stats["energyregen"] = 0;
            $stats["genenergyleft"] = 0;
            $stats["speed"] = 50;
            $stats["shields"] = [];
            $stats["weapons"] = [];
            $stats["equipments"] = [];
            
            foreach($this->details["equipment"] as $equipment){
                $equipmentData = getElementData($equipment->source, $equipment->key);
                switch($equipmentData["type"]){
                    case "armor":
                        $stats["maxarmor"] += $equipmentData["hull"];
                    break;
                    case "battery":
                        $stats["maxenergy"] += $equipmentData["capacity"];
                    break;
                    case "engine":
                        $stats["speed"] += $equipmentData["speed"];
                    break;
                    case "generator":
                        $stats["energyregen"] += $equipmentData["power"];
                    break;
                    case "laser":
                    case "ionpulse":
                    case "rocketlauncher":
                        $stats["weapons"][] = new Weapon($equipmentData);
                    break;
                    case "shield":
                        $stats["shields"][] = new Shield($equipmentData);
                    break;
                    default:
                        $stats["equipments"][] = new ShipEquipment($equipmentData);
                    break;
                }
            }
            
            $stats["actualarmor"] = $stats["maxarmor"];
            $stats["actualenergy"] = $stats["maxenergy"];
            
            return $stats;
        }
    }
    
    class Equipment{
        public $source;
        public $key;
        public $bonusType;
        
        function Equipment($source, $key, $bonusType){
            $this->source = $source;
            $this->key = $key;
            $this->bonusType = $bonusType;
        }
    }
    
    class Weapon{
        public $type;
        public $name;
        public $level;
        public $shielddamage;
        public $hulldamage;
        public $accuracy;
        public $reload;
        public $actualreload = 0;
        
        function Weapon($weapon){
            $this->type = $weapon["type"];
            $this->name = $weapon["name"];
            $this->level = $weapon["level"];
            $this->shielddamage = $weapon["shielddamage"];
            $this->hulldamage = $weapon["hulldamage"];
            $this->accuracy = $weapon["accuracy"];
            $this->reload = $weapon["reload"];
        }
    }
    
    class Shield{
        public $type;
        public $name;
        public $level;
        public $shieldenergy;
        public $actualshield;
        public $regeneration;
        public $energyusage;
        
       function Shield($shield){
            $this->type = $shield["type"];
            $this->name = $shield["name"];
            $this->level = $shield["level"];
            $this->shieldenergy = $shield["shieldenergy"];
            $this->actualshield = $shield["shieldenergy"];
            $this->regeneration = $shield["regeneration"];
            $this->energyusage = $shield["energyusage"];
       }
    }
    
    class ShipEquipment{
        public $type;
        public $name;
        public $energyusage;
        public $reload;
        public $actualreload = 0;
        
        
        function ShipEquipment($equipment){
            $this->type = $equipment["type"];
            $this->name = $equipment["name"];
            $this->energyusage = $equipment["energyusage"];
            $this->reload = $equipment["reload"];
        }
    }
?>