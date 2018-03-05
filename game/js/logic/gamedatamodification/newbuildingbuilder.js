function NewBuildingBuilder(gameDataModificator){
    const parent = gameDataModificator;
    
    this.buildNewBuilding = function buildNewBuilding(planetid, buildingData, priority){
        try{
            const planet = gameData.planets[planetid];
            const star = gameData.stars[planet.starid];
            
            const building = createBuilding(planetid, buildingData);
            const requestid = generator.generateId("request", star.data.queue);
            const request = new Request(requestid, "building", buildingData, priority, building.buildingid);
            
            planetView.displayPlanetData(planet);
            starView.displayStarData(star);
            back.backOneWindow();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
        
        function createBuilding(planetid, buildingData){
            try{
                if(buildingData.slot === "defense"){
                    
                }else{
                    const buildingid = generator.generateId("building", Object.keys(gameData.buildings));
                    const building = new Building(planetid, buildingid, buildingData);
                    
                    gameData.buildings[buildingid] = building;
                    return building;
                }
                
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
}