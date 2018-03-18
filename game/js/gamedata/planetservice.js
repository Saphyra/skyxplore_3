function PlanetService(planetsData){
    const planets = convertPlanets(planetsData);
    
    this.getAllPlanets  = function(){return planets};
    this.getPlanetById = function(planetid){return planets[planetid] || null};
    this.getPlanetsOfStar = function getPlanetsOfStar(starid){
        //Egy csillag bolygói
        try{
            let result = data.getFromCache("planetsofstar", starid);
            
            if(result === null){
                result = {};
                
                for(let planetid in planets){
                    const planet = planets[planetid];
                    if(planet.getStarId() == starid){
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
    
        function convertPlanets(planetsData){
            try{
                const result = {};
                    for(let planetid in planetsData){
                        result[planetid] = new Planet(planetsData[planetid]);
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}