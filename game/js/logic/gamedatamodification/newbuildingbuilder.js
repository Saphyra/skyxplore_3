function NewBuildingBuilder(gameDataModificator){
    const parent = gameDataModificator;
    
    this.buildNewBuilding = function buildNewBuilding(planetid, building, priority){
        try{
            const planet = gameData.planets[planetid];
            const star = gameData.stars[planet.starid];
            
            star.data.queue.push(createNewBuildingRequest(planetid, building, priority));
            createBuilding(planetid, building);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
        function createNewBuildingRequest(planetid, building, priority){
            try{
                
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
        
        function createBuilding(planetid, buildingData){
            try{
                const data = {
                    status: buildingData.constructiontime,
                    resource: {
                        source: buildingData.source,
                        key: buildingData.key
                    }
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
}