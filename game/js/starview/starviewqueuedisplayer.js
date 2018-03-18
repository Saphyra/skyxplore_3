function StarViewQueueDisplayer(){
    this.displayQueue = function displayQueue(starid){
        //Építési sor megjelenítése
        try{
            const star = gameData.getStarService().getStarById(starid);
            const queueService = star.getData().getQueueService();
            const queue = queueService.getQueue();
            const container = document.getElementById("starviewqueue");
                container.innerHTML = "";
                
            if(!Object.keys(queue).length){
                container.appendChild(domElementCreator.createListElementTitle("Nincs tétel"));
            }else{
                orderedQueue = queueService.orderQueueByPriority(queue);
                //Építési sor elemeinek megjelenítése
                for(let requestid in orderedQueue){
                    const request = orderedQueue[requestid];
                    let item;
                    
                    switch(request.getType()){
                        case "building":
                            item = displayBuildingRequest(request, queue);
                        break;
                        case "buildingupgrade":
                            item = displayUpgradeBuildingRequest(request, queue);
                        break;
                        default:
                            item = domElementCreator.createListItem();
                                const title = domElementCreator.createListElementTitle(request.getRequestId());
                            item.appendChild(title);
                        break;
                    }
                    
                    container.appendChild(item);
                }
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function displayBuildingRequest(request, queue){
            //Épület építési sor megjelenítése
            try{
                const building = gameData.getBuildingService().getBuildingById(request.getElementId());
                const buildingData = data.getElementData(building.getData().resource);
                const planet = gameData.getPlanetService().getPlanetById(building.getPlanetId());
                
                const item = domElementCreator.createListItem();
                    const title = domElementCreator.createListElementTitle("Építés: " + planet.getPlanetName() + " - " + buildingData.name + " - Szint: " + buildingData.level);
                item.appendChild(title);
                    const buildStatus = domElementCreator.createStarViewQueueBuildStatus(building.getData().status, buildingData.constructiontime);
                item.appendChild(buildStatus);
                    const cancelButton = domElementCreator.createPrioritySliderButton("Visszavon", request.getPriority(), new PrioritySliderModificationAction(request, queue));
                item.appendChild(cancelButton);
                return item;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function displayUpgradeBuildingRequest(request, queue){
            try{
                const building = gameData.getBuildingService().getBuildingById(request.getElementId());
                const buildingData = data.getElementData(building.getData().resource);
                const upgradeBuildingData = data.searchElements({type: buildingData.type, level: buildingData.level + 1}, true);
                const planet = gameData.getPlanetService().getPlanetById(building.getPlanetId());
                
                const item = domElementCreator.createListItem();
                    const title = domElementCreator.createListElementTitle("Fejlesztés: " + planet.getPlanetName() + " - " + buildingData.name + " - Szint: " + buildingData.level + " => " + upgradeBuildingData.level);
                item.appendChild(title);
                    const buildStatus = domElementCreator.createStarViewQueueBuildStatus(building.getData().upgradestatus, upgradeBuildingData.constructiontime);
                item.appendChild(buildStatus);
                    const cancelButton = domElementCreator.createPrioritySliderButton("Visszavon", request.getPriority(), new PrioritySliderModificationAction(request, queue));
                item.appendChild(cancelButton);
                return item;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}