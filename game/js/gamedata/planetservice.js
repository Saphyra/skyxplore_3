function PlanetService(planetsData){
    const planets = convertPlanets(planetsData);
    
    this.getAllPlanets  = function(){return planets};
    
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