function NameConverter(){
    this.convertPlanetSize = function convertPlanetSize(planetSize){
        //Név társítása bolygómérethez
        try{
            let result;
            
            switch(planetSize){
                case 1:
                    result = "Kis";
                break;
                case 2:
                    result = "Közepes";
                break;
                case 3:
                    result = "Nagy";
                break;
                default:
                    result = "Unknown size: " + planetSize;
                break;
            }
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.convertPlanetType = function convertPlanetType(planetType){
        //Név társítása bolygótípushoz
        try{
            let result;
            
            switch(planetType){
                case "desert":
                    result = "Sivatag";
                break;
                case "lava":
                    result = "Láva";
                break;
                case "terran":
                    result = "Terran";
                break;
                default:
                    result = "Unknown planet type: " + planetType;
                break;
            }
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}