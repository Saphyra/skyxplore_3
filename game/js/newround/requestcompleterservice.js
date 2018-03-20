function RequestCompleterService(parent){
    const starSteps = parent;
    
    this.completeRequest = function completeRequest(request){
        //Kérelem befejezése, törlése
        try{
            switch(request.getType()){
                case "building":
                    completeBuildingRequest(request);
                break;
                case "buildingupgrade":
                    completeUpgradeBuildingRequest(request);
                break;
                default:
                    log("completeRequest - Unknown reuest type: " + request.getType(), "error");
                break;
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function completeBuildingRequest(request){
            //Új épület építése kérelem befejezése
            try{
                const star = gameData.getStarService().getStarById(request.getStarId());
                const building = gameData.getBuildingService().getBuildingById(request.getElementId());
                const buildingData = data.getElementData(building.getData().resource);
                
                star.getData().getQueueService().deleteRequest(request.getRequestId());
                log(buildingData.name + " épület a " + star.getStarName() + " csillagon felépült.", "complete");
                
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function completeUpgradeBuildingRequest(request){
            //Új épület építése kérelem befejezése
            try{
                const star = gameData.getStarService().getStarById(request.getStarId());
                const building = gameData.getBuildingService().getBuildingById(request.getElementId());
                const upgradeBuildingData = data.getElementData({source: building.getType(), key: building.getLevel() + 1});
                
                building.setLevel(upgradeBuildingData.level);
                building.getData().resource = {source: upgradeBuildingData.type, key: upgradeBuildingData.key};
                
                star.getData().getQueueService().deleteRequest(request.getRequestId());
                log(upgradeBuildingData.name + " épület fejlesztése a " + star.getStarName() + " csillagon befejeződött.", "complete");
                
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}