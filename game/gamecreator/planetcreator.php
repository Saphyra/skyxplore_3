<?php
    function createPlanets($stars){
        $planetids = new ArrayList();
        $planets = new ArrayList();
        foreach($stars as $starid=>$star){
            createPlanetsOfStar($star, $planetids, $planets);
        }
        return $planets->array;
    }
    
        function createPlanetsOfStar($star, $planetids, $planets){
            for($x = 1; $x <= $star->planetnum; $x++){
                $planetid = generatePlanetId($planetids);
                $planetName = $star->starname . " " . $x;
                $planets->array[$planetid] = new Planet($planetid, $star->starid, $planetName);
            }
        }
        
            function generatePlanetId($planetids){
                do{
                    $planetid = "planet";
                    for($x = 0; $x < 10; $x++){
                        $planetid .= rand(0, 9);
                    }
                }while(in_array($planetid, $planetids->array));
                $planetids->array[] = $planetid;
                return $planetid;
            }
    
    class Planet{
        public $planetid;
        public $starid;
        public $planetname;
        public $size;
        public $type;
        public $slots = [];
        
        function Planet($planetid, $starid, $planetName){
            $this->planetid = $planetid;
            $this->starid = $starid;
            $this->planetname = $planetName;
            $this->size = rand(1, 3);
            $this->type = $this->generateType();
            $this->slots = $this->generateSlots();
        }
        
        private function generateType(){
            switch(rand(1, 3)){
                case 1:
                    $result = "terran";
                break;
                case 2:
                    $result = "desert";
                break;
                case 3:
                    $result = "lava";
                break;
            }
            return $result;
        }
        
        private function generateSlots(){
            $slots["food"] = $this->size * rand(2, 4) * ($this->type == "terran" ? 2 : 1);
            $slots["minefield"] = $this->size * rand(2, 4) * ($this->type == "lava" ? 2 : 1);
            $slots["building"] = $this->size * rand(5, 15) * ($this->type == "desert" ? 2 : 1);
            $slots["defense"] = $this->size * rand(3, 5);
            
            return $slots;
        }
    }
?>