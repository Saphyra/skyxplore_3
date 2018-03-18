function UndoRequest(){
    this.undo = function undo(request){
        //Visszavonja az adott kérelmet
        try{
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
                const building = gameData.getBuildingService().getBuildingById(request.getElementId());
                const planet = gameData.getPlanetService().getPlanetById(building.getPlanetId());
                const star = gameData.getStarService().getStarById(planet.getStarId());
                
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
                const building = gameData.getBuildingService().getBuildingById(request.getElementId());
                const planet = gameData.getPlanetService().getPlanetById(building.getPlanetId());
                const star = gameData.getStarService().getStarById(planet.getStarId());
                
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