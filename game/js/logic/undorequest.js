function UndoRequest(){
    this.undo = function undo(request){
        //Visszavonja az adott kérelmet
        try{
            if(request.getData().storedresources){
                //Ha van a kérelemben eltárolt nyersanyag...
                const storedResources = request.getData().storedresources;
                const star = gameData.getStarService().getStarById(request.getStarId());
                const starStorage = star.getData().getResources();
                
                for(let resource in storedResources){
                    const resourceData = data.getElementData({source: "resource", key: resource});
                    
                    if(starStorage[resourceData.storage] == undefined){
                        starStorage[resourceData.storage] = {};
                    }
                    if(starStorage[resourceData.storage][resource] == undefined){
                        starStorage[resourceData.storage][resource] = 0;
                    }
                    
                    starStorage[resourceData.storage][resource] += storedResources[resource];
                }
                
                log(storedResources, "warn", "Raktárba visszakerült nyersanyagok: ");
            }
            
            switch(request.getType()){
                case "building":
                    undoBuildingRequest(request);
                break;
                case "buildingupgrade":
                    undoBuildingUpgradeRequest(request);
                break;
                default:
                    log("UndoRequest - Unknown type of request: " + request.type, "warn");
                break;
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function undoBuildingRequest(request){
            //Épületépítési kérelem visszavonása
            try{
                const star = gameData.getStarService().getStarById(request.getStarId());
                const building = gameData.getBuildingService().getBuildingById(request.getElementId());
                const planet = gameData.getPlanetService().getPlanetById(building.getPlanetId());
                
                star.getData().getQueueService().deleteRequest(request.getRequestId());
                gameData.getBuildingService().deleteBuilding(building.getBuildingId());
                
                starView.displayStarData(star);
                planetView.displayPlanetData(planet);
                buildingListView.refresh(star.getStarId());
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function undoBuildingUpgradeRequest(request){
            //Épület fejlesztési kérelem visszavonása
            try{
                const star = gameData.getStarService().getStarById(request.getStarId());
                const building = gameData.getBuildingService().getBuildingById(request.getElementId());
                const planet = gameData.getPlanetService().getPlanetById(building.getPlanetId());
                
                building.getData().upgradestatus = 0;
                star.getData().getQueueService().deleteRequest(request.getRequestId());
                
                starView.displayStarData(star);
                planetView.displayPlanetData(planet);
                buildingListView.refresh(star.getStarId());
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}