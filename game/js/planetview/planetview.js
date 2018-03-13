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
            $("#planetviewplanetname").text(planet.planetname);
            const imgUrl = "url('../content/img/" + planet.type + "_background.jpg')";
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
                    
                    const groupper = new BuildingGrouper();
                    const buildings = groupper.groupBuildingsBySlot(filters.getBuildingsOfPlanet(planet.planetid));
                    
                    for(let slot in planet.slots){
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
                    for(let index in buildings[slot]){
                        const building = buildings[slot][index];
                        const buildingSlot = domElementCreator.createPlanetSlot(building.buildingData.type);
                            const buildingSlotCover = domElementCreator.createCoverElement();
                                const planetSlotTitle = domElementCreator.createPlanetSlotTitle(building.buildingData.name);
                            buildingSlotCover.appendChild(planetSlotTitle);
                            
                            if(building.building.data.status !== 0){
                                //Ha az épület építés alatt
                                //Építési állapot megjelenítése
                                const buildStatus = domElementCreator.createPlanetSlotBuildStatus(building.building.data.status, building.buildingData.constructiontime, "Építés");
                                buildingSlotCover.appendChild(buildStatus);
                                
                                //Építés visszavonása
                                const star = gameData.stars[planet.starid];
                                const requestid = building.building.data.requestid;
                                const request = star.data.queue[requestid];
                                
                                const cancelBuilding = domElementCreator.createPlanetViewActionBuildingButton("Visszavon", function(){undoRequest.undo(request)});
                                buildingSlotCover.appendChild(cancelBuilding);
                            }else if(building.building.data.upgradestatus !== 0){
                                //Ha az épület fejlesztés alatt áll
                                const upgradeBuildingData = filters.searchElements({type: building.buildingData.type, level: building.buildingData.level + 1})
                                const buildStatus = domElementCreator.createPlanetSlotBuildStatus(building.building.data.upgradestatus, upgradeBuildingData.constructiontime, "Fejlesztés");
                                buildingSlotCover.appendChild(buildStatus);
                                
                                //Fejlesztés visszavonása
                                const star = gameData.stars[planet.starid];
                                const requestid = building.building.data.requestid;
                                const request = star.data.queue[requestid];
                                
                                const cancelBuilding = domElementCreator.createPlanetViewActionBuildingButton("Visszavon", function(){undoRequest.undo(request)});
                                buildingSlotCover.appendChild(cancelBuilding);
                            }else if(building.building.level < 3){
                                //Épület fejlesztése
                                const upgradeBuilding = domElementCreator.createPlanetViewActionBuildingButton("Fejlesztés", function(){gameDataModificator.upgradeBuilding(building.building.buildingid, 5)});
                                buildingSlotCover.appendChild(upgradeBuilding);
                            }
                            
                                const planetSlotLevel = domElementCreator.createPlanetSlotLevel(building.buildingData.level);
                            buildingSlotCover.appendChild(planetSlotLevel);
                        buildingSlot.appendChild(buildingSlotCover);
                        container.appendChild(buildingSlot);
                        num++
                    }
                    
                    //Üres slotok megjelenítése
                    for(num; num < planet.slots[slot]; num++){
                        const emptySlot = domElementCreator.createPlanetSlot("empty");
                            const emptySlotCover = domElementCreator.createCoverElement();
                        emptySlot.appendChild(emptySlotCover);
                        emptySlot.onclick = function(){buildNewBuildingView.showPage(planet.planetid, slot)};
                        container.appendChild(emptySlot);
                    }
                    
                    return container;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
}