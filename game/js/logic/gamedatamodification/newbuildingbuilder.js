function NewBuildingBuilder(parent){
    const gameDataModificator = parent;
    
    this.buildNewBuilding = function buildNewBuilding(planetid, buildingData, priority){
        //Új épület építése
        try{
            const planet = gameData.getPlanetService().getPlanetById(planetid);
            const star = gameData.getStarService().getStarById(planet.getStarId());
            
            const requestid = generator.generateId("request", star.getData().getQueueService().getRequestIds());
            //Épület létrehozása
            const building = createBuilding(planetid, buildingData, requestid);
            gameData.getBuildingService().addBuilding(building);
            
            //Kérelem létrehozása
            const request = createRequest(star.getStarId(), requestid, priority, building.getBuildingId(), buildingData);
            star.getData().getQueueService().addRequest(request)
            
            //Ablakok frissítése
            planetView.displayPlanetData(planet);
            starView.displayStarData(star);
            back.backOneWindow();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function createRequest(starid, requestid, priority, buildingid, buildingData){
            //Kérelem létrehozása
            try{
                const requestData = {
                    starid: starid,
                    requestid: requestid,
                    type: "building",
                    status: "collectresources",
                    priority: priority,
                    elementid: buildingid,
                    data: {
                        resourcerequirements: buildingData.resource,
                        storedresources: {}
                    }
                }
                
                return new Request(requestData);
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function createBuilding(planetid, buildingData, requestid){
            //Új épület létrehozása
            try{
                const buildingid = generator.generateId("building", Object.keys(gameData.getBuildingService().getBuildingIds()));
                const newBuildingData = {
                    buildingid: buildingid,
                    planetid: planetid,
                    type: buildingData.type,
                    level: buildingData.level,
                    data: {
                        status: buildingData.constructiontime,
                        upgradestatus: 0,
                        resource: {
                            source: buildingData.type,
                            key: buildingData.level,
                        },
                        requestid: requestid,
                    }
                }
                
                return new Building(newBuildingData);
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}