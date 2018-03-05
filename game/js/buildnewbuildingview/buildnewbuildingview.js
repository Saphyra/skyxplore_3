function BuildNewBuildingView(){
    this.grouper = new BuildingGrouper();
    
    this.showPage = function showPage(planetid, slot){
        try{
            back.switchWindow("#newbuildingviewcontainer");
            const buildableBuildings = this.grouper.orderBuildingDatasByName(filters.getBuildableBuildingsOfSlot(slot));
            displayBuildableBuildings(planetid, buildableBuildings);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
        
        function displayBuildableBuildings(planetid, buildableBuildings){
            try{
                const container = document.getElementById("newbuildinglistcontainer");
                    container.innerHTML = "";
                
                for(let bindex in buildableBuildings){
                    const building = buildableBuildings[bindex];
                    container.appendChild(createBuildableBuildingElement(planetid, building));
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
        
            function createBuildableBuildingElement(planetid, building){
                try{
                    const item = domElementCreator.createNewBuildingListItem();
                        
                        const cover = domElementCreator.createNewBuildingIcon(building.type);
                    item.appendChild(cover);
                    
                        const contentContainer = domElementCreator.createNewBuildingContentContainer();
                    
                            const title = domElementCreator.createNewBuildingTitle(building.name);
                        contentContainer.appendChild(title);
                            
                            if(building.constructiontime && building.maxhr){
                                const hrContainer = domElementCreator.createNewBuildingHRCell(building.constructiontime, building.maxhr);
                                contentContainer.appendChild(hrContainer);
                            }
                            
                            const resourceContainer = domElementCreator.createNewBuildingResourceContainer();
                            
                                for(let rindex in building.resource){
                                    const resource = building.resource[rindex];
                                    const resourceData = data.getElementData({source: "resource", key: rindex});
                                    const resourceElement = domElementCreator.createNewBuildngResourceElement(resourceData.name, resource);
                                    resourceContainer.appendChild(resourceElement);
                                }
                            
                        contentContainer.appendChild(resourceContainer);
                    item.appendChild(contentContainer);
                    
                        const buildButton = domElementCreator.createPrioritySliderButton("Felépít", 5, new Action(planetid, building));
                    item.appendChild(buildButton);
                        
                    return item;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message);
                }
            }
            
                function Action(planetid, building){
                    this.planetid = planetid;
                    this.building = building;
                    this.change = function(){};
                    this.run = function(value){
                        gameDataModificator.buildNewBuilding(this.planetid, this.building, value);
                    }
                }
}