function RequestProducerService(parent){
    const starSteps = parent;
    
    this.produceRequest = function produceRequest(request, starInfo, playerName){
        try{
            switch(request.getType()){
                case "building":
                    processBuildingRequest(request, starInfo, playerName);
                break;
                case "buildingupgrade":
                    processUpgradeBuildingRequest(request, starInfo, playerName);
                break;
                default:
                    log("produceRequest - Unknown reuest type: " + request.getType(), "warn");
                break;
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function processBuildingRequest(request, starInfo, playerName){
            //Új épület építéséhez tartozó kérelem feldolgozása
            try{
                const building = gameData.getBuildingService().getBuildingById(request.getElementId());
                const buildingData = data.getElementData(building.getData().resource);
                
                log(buildingData.name + " épület felépítése folyamatban... Hátralévő munkálatok száma: " + building.getData().status, "process");
                
                for(let i = 0; i < buildingData.maxhr; i++){
                    if(starInfo.availableWorkers){
                        const jobData = {
                            building: building,
                            buildingData: buildingData,
                        };
                        const job = new Job(jobData, function(){
                            this.data.building.getData().status--;
                            log(this.data.buildingData.name + " épület építésén folyó munkálatok előrehaladtak. Hátralévő munkálatok száma: " + this.data.building.getData().status, "step");
                        });
                        starSteps.work(playerName, job, starInfo);
                        
                        if(building.getData().status == 0){
                            log(buildingData.name + " épület építése befejeződött. Kérelem állapota készre állítva.", "process");
                            request.setStatus("completed");
                            break;
                        }
                    }else{
                        log("Nincs elég munkás " + buildingData.name + " építéséhez.", "step");
                        break;
                    }
                }
                
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function processUpgradeBuildingRequest(request, starInfo, playerName){
            //Épület fejlesztéséhez tartozó kérelem feldolgozása
            try{
                const building = gameData.getBuildingService().getBuildingById(request.getElementId());
                const buildingData = data.getElementData(building.getData().resource);
                const upgradeBuildingData = data.getElementData({source: buildingData.type, key: buildingData.level + 1});
                
                log(buildingData.name + " épület fejlesztése folyamatban... Hátralévő munkálatok száma: " + building.getData().upgradestatus, "process");
                
                for(let i = 0; i < upgradeBuildingData.maxhr; i++){
                    
                    if(starInfo.availableWorkers){
                        const jobData = {
                            building: building,
                            buildingData: buildingData,
                        };
                        const job = new Job(jobData, function(){
                            this.data.building.getData().upgradestatus--;
                            log(this.data.buildingData.name + " épület fejlesztésén folyó munkálatok előrehaladtak. Hátralévő munkálatok száma: " + this.data.building.getData().upgradestatus, "step");
                        });
                        starSteps.work(playerName, job, starInfo);
                        
                        if(building.getData().upgradestatus == 0){
                            log(buildingData.name + " épület fejlesztése befejeződött. Kérelem állapota készre állítva.", "process");
                            request.setStatus("completed");
                            break;
                        }
                    }else{
                        log("Nincs elég munkás " + buildingData.name + " fejlesztéséhez.", "step");
                        break;
                    }
                }
                
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}