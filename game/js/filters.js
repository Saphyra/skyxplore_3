function Filters(){
    this.searchElements = function searchElements(params){
        try{
            const sources = gameDataSources;
            const result = [];
            for(let sindex in sources){
                const source = sources[sindex];
                const elements = data.getFromCache(source);
                for(let eindex in elements){
                    const element = elements[eindex];
                    if(isElementValid(element, params)){
                        result.push(element);
                    }
                }
            }
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
        function isElementValid(element, params){
            try{
                let result = true;
                    for(let key in params){
                        if(element[key] != params[key]){
                            result = false;
                        }
                    }
                
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
    
    this.getPlanetsOfStar = function getPlanetsOfStar(starid){
        try{
            let result = data.getFromCache("planetsof" + starid);
            
            if(result === null){
                result = {};
                const planets = gameData.planets;
            
                for(let planetid in planets){
                    const planet = planets[planetid];
                    
                    if(planet.starid === starid){
                        result[planetid] = planet;
                    }
                }
                
                data.putToCache("planetsof" + starid, result);
            }
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.getBuildingsOfPlanet = function getBuildingsOfPlanet(planetid){
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
    
    this.getBuildableBuildingsOfSlot = function getBuildableBuildingsOfSlot(slot){
        try{
            const elements = this.searchElements({slot: slot});
            const result = [];
            
                for(let index in elements){
                    const element = elements[index];
                    if(element.level === undefined || element.level === 1){
                        result.push(element);
                    }
                }
            
            return result;
            
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}