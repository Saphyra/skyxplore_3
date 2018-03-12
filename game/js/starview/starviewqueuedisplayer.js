function StarViewQueueDisplayer(){
    this.displayQueue = function displayQueue(queue){
        //Építési sor megjelenítése
        try{
            const container = document.getElementById("starviewqueue");
                container.innerHTML = "";
                
            if(!Object.keys(queue).length){
                container.appendChild(domElementCreator.createListElementTitle("Nincs tétel"));
            }else{
                orderedQueue = order.orderQueueByPriority(queue);
                
                //Építési sor elemeinek megjelenítése
                for(let requestid in orderedQueue){
                    const request = orderedQueue[requestid];
                    let item;
                    
                    switch(request.type){
                        case "building":
                            item = displayBuilding(request, queue);
                        break;
                        default:
                            item = domElementCreator.createListItem();
                                const title = domElementCreator.createListElementTitle(element.requestid);
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
    
        function displayBuilding(request, queue){
            //Épület építési sor megjelenítése
            try{
                const building = gameData.buildings[request.elementid];
                const buildingData = data.getElementData(building.data.resource);
                const planet = gameData.planets[building.planetid];
                const item = domElementCreator.createListItem();
                    const title = domElementCreator.createListElementTitle(planet.planetname + " - " + buildingData.name + " - Szint: " + buildingData.level);
                item.appendChild(title);
                    const buildStatus = domElementCreator.createStarViewQueueBuildStatus(building.data.status, buildingData.constructiontime);
                item.appendChild(buildStatus);
                    const cancelButton = domElementCreator.createPrioritySliderButton("Visszavon", request.priority, new PrioritySliderAction(request, queue));
                item.appendChild(cancelButton);
                return item;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}