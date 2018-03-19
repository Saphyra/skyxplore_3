function BuildingUpgrader(parent){
    const gameDataModificator = parent;
    
    this.upgradeBuilding = function upgradeBuilding(buildingid, priority){
        //Épület fejlesztése
        try{
            const building = gameData.getBuildingService().getBuildingById(buildingid);
            const planet = gameData.getPlanetService().getPlanetById(building.getPlanetId());
            const star = gameData.getStarService().getStarById(planet.getStarId());
            const queueService = star.getData().getQueueService();
            
            const upgradeLevel = building.getLevel() + 1;
            const upgradeBuildingData = data.searchElements({type: building.getType(), level: upgradeLevel}, true);
            building.getData().upgradestatus = upgradeBuildingData.constructiontime;
            
            
            const requestid = generator.generateId("request", queueService.getRequestIds());
            building.getData().requestid = requestid;
            
            const requestData = {
                    starid: star.getStarId(),
                    requestid: requestid,
                    type: "buildingupgrade",
                    status: "collectresources",
                    priority: priority,
                    elementid: buildingid,
                    data: {
                        resourcerequirements: upgradeBuildingData.resource,
                        storedresources: {}
                    }
                }
            const request = new Request(requestData);
            queueService.addRequest(request);
            
            buildingListView.refresh(star.getStarId());
            planetView.displayPlanetData(planet);
            starView.displayStarData(star);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}