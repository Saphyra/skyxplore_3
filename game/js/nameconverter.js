function convertPlanetSize(planetSize){
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

function convertPlanetType(planetType){
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