function PlanetView(){
    this.showPlanet = function showPlanet(planet){
        //Bolygó nézet megjelenítése
        try{
            this.displayPlanetData(planet);
            back.switchWindow("#planetviewcontainer");
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.displayPlanetData = function displayPlanetData(planet){
        //Bolygó adatainak megjelenítése
        try{
            $("#planetviewplanetname").text(planet.getPlanetName());
            const imgUrl = "url('../content/img/" + planet.getType() + "_background.jpg')";
            $("#planetviewcontainer").css("backgroundImage", imgUrl);
            displaySlots(planet);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function displaySlots(planet){
            //Bolygó slotjainak megjelenítése
            try{
                const container = document.getElementById("planetviewslotlist");
                    container.innerHTML = "";
                    
                    const buildingService = gameData.getBuildingService();
                    let buildings = buildingService.getBuildingsOfPlanet(planet.getPlanetId());
                    buildings = buildingService.groupBuildingsBySlot(buildings);
                    
                    for(let slot in planet.getSlots()){
                        if(slot === "defense"){
                            //TODO Do
                        }else{
                            container.appendChild(createSlots(planet, buildings, slot));
                        }
                    }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
            function createSlots(planet, buildings, slot){
                //Slotok létrehozása
                try{
                    let num = 0;
                    const container = domElementCreator.createPlanetSlotContainer();
                        const containerTitle = domElementCreator.createPlanetSlotContainerName(data.getElementData({source: "constants", key: "slotname"})[slot]);
                    container.appendChild(containerTitle);
                    
                    //Épületek megjelenítése
                    for(let buildingid in buildings[slot]){
                        const building = buildings[slot][buildingid];
                        const buildingData = data.getElementData(building.getData().resource);
                        
                        const buildingSlot = domElementCreator.createPlanetSlot(buildingData.type);
                            const buildingSlotCover = domElementCreator.createCoverElement();
                                const planetSlotTitle = domElementCreator.createPlanetSlotTitle(buildingData.name);
                            buildingSlotCover.appendChild(planetSlotTitle);
                            
                            if(building.getData().status !== 0){
                                //Ha az épület építés alatt
                                //Építési állapot megjelenítése
                                const buildStatus = domElementCreator.createPlanetSlotBuildStatus(building.getData().status, buildingData.constructiontime, "Építés");
                                buildingSlotCover.appendChild(buildStatus);
                                
                                //Építés visszavonása
                                const star = gameData.getStarService().getStarById(planet.getStarId());
                                const requestid = building.getData().requestid;
                                const request = star.getData().getQueueService().getRequestById(requestid);
                                
                                const cancelBuilding = domElementCreator.createPlanetViewActionBuildingButton("Visszavon", function(){undoRequest.undo(request)});
                                buildingSlotCover.appendChild(cancelBuilding);
                            }else if(building.getData().upgradestatus !== 0){
                                //Ha az épület fejlesztés alatt áll
                                const upgradeBuildingData = data.searchElements({type: buildingData.type, level: buildingData.level + 1})
                                const buildStatus = domElementCreator.createPlanetSlotBuildStatus(building.getData().upgradestatus, upgradeBuildingData.constructiontime, "Fejlesztés");
                                buildingSlotCover.appendChild(buildStatus);
                                
                                //Fejlesztés visszavonása
                                const star = gameData.getStarService().getStarById(planet.getStarId());
                                const requestid = building.getData().requestid;
                                const request = star.getData().getQueueService().getRequestById(requestid);
                                
                                const cancelBuilding = domElementCreator.createPlanetViewActionBuildingButton("Visszavon", function(){undoRequest.undo(request)});
                                buildingSlotCover.appendChild(cancelBuilding);
                            }else if(building.getLevel() < 3){
                                //Épület fejlesztése
                                const upgradeBuilding = domElementCreator.createPlanetViewActionBuildingButton("Fejlesztés", function(){gameDataModificator.upgradeBuilding(building.getBuildingId(), 5)});
                                buildingSlotCover.appendChild(upgradeBuilding);
                            }
                            
                                const planetSlotLevel = domElementCreator.createPlanetSlotLevel(buildingData.level);
                            buildingSlotCover.appendChild(planetSlotLevel);
                        buildingSlot.appendChild(buildingSlotCover);
                        container.appendChild(buildingSlot);
                        num++
                    }
                    
                    //Üres slotok megjelenítése
                    for(num; num < planet.getSlots()[slot]; num++){
                        const emptySlot = domElementCreator.createPlanetSlot("empty");
                            const emptySlotCover = domElementCreator.createCoverElement();
                        emptySlot.appendChild(emptySlotCover);
                        emptySlot.onclick = function(){buildNewBuildingView.showPage(planet.getPlanetId(), slot)};
                        container.appendChild(emptySlot);
                    }
                    
                    return container;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
}