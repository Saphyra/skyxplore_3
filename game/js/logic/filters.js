function Filters(){
    this.searchElements = function searchElements(params){
        //Megadott paramétereknek megfelelő játékelemek keresése
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function isElementValid(element, params){
            //Adott játékelem megfelel-e a keresési követelményeknek
            try{
                let result = true;
                    for(let key in params){
                        if(element[key] != params[key]){
                            result = false;
                        }
                    }
                
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
    
    this.getPlanetsOfStar = function getPlanetsOfStar(starid){
        //Csillag bolygói
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.getBuildingsOfPlanet = function getBuildingsOfPlanet(planetid){
        //Bolygó épületei
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.getBuildableBuildingsOfSlot = function getBuildableBuildingsOfSlot(slot){
        //Adott slotba építhető épületek
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}