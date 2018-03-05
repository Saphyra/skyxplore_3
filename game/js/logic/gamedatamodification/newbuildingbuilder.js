function NewBuildingBuilder(gameDataModificator){
    const parent = gameDataModificator;
    
    this.buildNewBuilding = function buildNewBuilding(planetid, buildingData, priority){
        try{
            const planet = gameData.planets[planetid];
            const star = gameData.stars[planet.starid];
            
            const building = createBuilding(planetid, buildingData);
            const requestid = generator.generateId("request", star.data.queue);
            const request = new Request(requestid, "building", buildingData, priority, building.buildingid, new CancelBuilding(star.data.queue, building.buildingid, requestid, star));
            star.data.queue[requestid] = request;
            
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
        
        function CancelBuilding(queue, buildingid, requestid, star){
            this.queue = queue;
            this.buildingid = buildingid;
            this.requestid = requestid;
            this.star = star;
            this.undo = function(){
                delete this.queue[requestid];
                delete gameData.buildings[buildingid];
                starView.showStar(this.star);
            }
        }
}