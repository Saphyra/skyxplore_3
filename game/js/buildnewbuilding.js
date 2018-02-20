function BuildNewBuilding(){
    this.grouper = new BuildingGrouper();
    
    this.showPage = function showPage(planetid, slot){
        try{
            back.switchWindow("#newbuildingviewcontainer");
            const buildableBuildings = this.grouper.orderBuildingDatasByName(filters.getBuildableBuildingsOfSlot(slot));
            displayBuildableBuildings(buildableBuildings);
            
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
        
        function displayBuildableBuildings(buildableBuildings){
            try{
                const container = document.getElementById("newbuildinglistcontainer");
                    container.innerHTML = "";
                
                for(let bindex in buildableBuildings){
                    const building = buildableBuildings[bindex];
                    container.appendChild(createBuildableBuildingElement(building));
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
        
            function createBuildableBuildingElement(building){
                try{
                    const item = domElementCreator.createNewBuildingListItem();
                        
                        const cover = domElementCreator.createNewBuildingCover(building.type);
                    item.appendChild(cover);
                    
                        const contentContainer = domElementCreator.createNewBuildingContentContainer();
                    
                            const title = domElementCreator.createNewBuildingTitle();
                                title.innerHTML = building.name;
                        contentContainer.appendChild(title);
                        
                            const resourceContainer = document.createElement("DIV");
                            
                                for(let rindex in building.resource){
                                    const resource = building.resource[rindex];
                                    const resourceData = data.getElementData({source: "resource", key: rindex});
                                    const resourceElement = document.createElement("DIV");
                                        resourceElement.innerHTML = resourceData.name + ": " + resource;
                                    resourceContainer.appendChild(resourceElement);
                                }
                            
                        contentContainer.appendChild(resourceContainer);
                        
                        
                    item.appendChild(contentContainer);
                        
                    return item;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message);
                }
            }
}