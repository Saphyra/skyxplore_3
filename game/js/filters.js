function getPlanetsOfStar(starid){
    try{
        let result = getFromCache("planetsof" + starid);
        
        if(result === null){
            result = {};
            const planets = gameData.planets;
        
            for(let planetid in planets){
                const planet = planets[planetid];
                
                if(planet.starid === starid){
                    result[planetid] = planet;
                }
            }
            
            putToCache("planetsof" + starid, result);
        }
        
        return result;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function getBuildingsOfPlanet(planetid){
    try{
        const result = {};
        const buildings = gameData.buildings;
        
        for(let buildingid in buildings){
            const building = buildings[buildingid];
            if(building.planetid == planetid){
                result[buildingid] = building;
            }
        }
        
        return result;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}