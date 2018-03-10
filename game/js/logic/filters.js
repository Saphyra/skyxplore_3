function Filters(){
    this.searchElements = function searchElements(params){
        //Megadott paramétereknek megfelelő játékelemek keresése
        try{
            const sources = gameDataSources;
            const result = [];
            for(let sindex in sources){
                const source = sources[sindex];
                const elements = data.getFromCache("elements", source);
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
            let result = data.getFromCache("planetsofstar", starid);
            
            if(result === null){
                result = {};
                const planets = gameData.planets;
            
                for(let planetid in planets){
                    const planet = planets[planetid];
                    
                    if(planet.starid === starid){
                        result[planetid] = planet;
                    }
                }
                
                data.putToCache("planetsofstar", starid, result);
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
    
    this.getOwnedStars = function getOwnedStars(){
        //Lakott csillagok
        const stars = gameData.stars;
        const result = [];
        
        for(let starid in stars){
            const star = stars[starid];
            if(star.owner !== "neutral"){
                result.push(star);
            }
        }
        
        return result;
    }
}