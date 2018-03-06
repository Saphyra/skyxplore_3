function BuildNewBuildingView(){
    this.showPage = function showPage(planetid, slot){
        //Oldal megjelenítése
        try{
            back.switchWindow("#newbuildingviewcontainer");
            //Megjelenítendő épületek listájának összeállítása, és rendezése
            const buildableBuildings = order.orderBuildingDatasByName(filters.getBuildableBuildingsOfSlot(slot));
            displayBuildableBuildings(planetid, buildableBuildings);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
        
        function displayBuildableBuildings(planetid, buildableBuildings){
            //Építhető épületek megjelenítése
            try{
                const container = document.getElementById("newbuildinglistcontainer");
                    container.innerHTML = "";
                
                for(let bindex in buildableBuildings){
                    const building = buildableBuildings[bindex];
                    container.appendChild(createBuildableBuildingElement(planetid, building));
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
            function createBuildableBuildingElement(planetid, building){
                //Építhető épület megjelenítése
                try{
                    const item = domElementCreator.createNewBuildingListItem();
                        //Ikonkép
                        const cover = domElementCreator.createNewBuildingIcon(building.type);
                    item.appendChild(cover);
                        
                        const contentContainer = domElementCreator.createNewBuildingContentContainer();
                    
                            const title = domElementCreator.createNewBuildingTitle(building.name);
                        contentContainer.appendChild(title);
                            
                            const hrContainer = domElementCreator.createNewBuildingHRCell(building.constructiontime, building.maxhr);
                        contentContainer.appendChild(hrContainer);
                            
                            const resourceContainer = domElementCreator.createNewBuildingResourceContainer();
                                //Építéshez szükséges nyersanyagk kijelzése
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
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
            
                function Action(planetid, building){
                    //Épület felépítése
                    this.planetid = planetid;
                    this.building = building;
                    this.change = function(){};
                    this.run = function(value){
                        gameDataModificator.buildNewBuilding(this.planetid, this.building, value);
                    }
                }
}