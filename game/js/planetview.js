function PlanetView(){
    this.showPlanet = function showPlanet(planet){
        try{
            const star = gameData.stars[planet.starid];
            switch(star.visibility.player.visibility){
                default:
                    displayPlanetData(planet);
                    back.switchWindow("#planetviewcontainer");
                break;
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    function displayPlanetData(planet){
        try{
            $("#planetviewplanetname").text(planet.planetname);
            const imgUrl = "url('../content/img/" + planet.type + "_background.jpg')";
            $("#planetviewcontainer").css("backgroundImage", imgUrl);
            displaySlots(planet);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
        function displaySlots(planet){
            try{
                const container = document.getElementById("planetviewslotlist");
                    container.innerHTML = "";
                    
                    const groupper = new BuildingGrouper();
                    const buildings = groupper.groupBuildingsBySlot(filters.getBuildingsOfPlanet(planet.planetid));
                    
                    for(let slot in planet.slots){
                        container.appendChild(createSlots(planet, buildings, slot));
                    }
                
                    /*container.appendChild(createFarmSlots(planet, buildings));
                    container.appendChild(createMineSlots(planet, buildings));
                    container.appendChild(createBuildingSlots(planet, buildings));
                    container.appendChild(createDefenseSlots(planet, buildings));*/
                
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
        
            function createSlots(planet, buildings, slot){
                try{
                    let num = 0;
                    const element = domElementCreator.createPlanetSlotContainer();
                        const elementTitle = domElementCreator.createPlanetSlotContainerName()
                            elementTitle.innerHTML = data.getElementData({source: "constants", key: "slotname"})[slot];
                    element.appendChild(elementTitle);
                    
                    for(let index in buildings[slot]){
                        const building = buildings[slot][index];
                        const buildingSlot = domElementCreator.createPlanetSlot(building.buildingData.type);
                            const buildingSlotCover = domElementCreator.createCoverElement();
                        buildingSlot.appendChild(buildingSlotCover);
                        element.appendChild(buildingSlot);
                        num++
                    }
                    
                    for(num; num < planet.slots[slot]; num++){
                        const emptySlot = domElementCreator.createPlanetSlot("empty");
                            const emptySlotCover = domElementCreator.createCoverElement();
                        emptySlot.appendChild(emptySlotCover);
                        element.appendChild(emptySlot);
                    }
                    
                    return element;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message);
                }
            }
            
            function createMineSlots(planet, buildings){
                try{
                    const element = domElementCreator.createPlanetSlotContainer();  
                        const elementTitle = domElementCreator.createPlanetSlotContainerName()
                            elementTitle.innerHTML = data.getElementData({source: "constants", key: "slotname"}).minefield;
                    element.appendChild(elementTitle);
                    
                    return element;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message);
                }
            }
            
            function createBuildingSlots(planet, buildings){
                try{
                    const element = domElementCreator.createPlanetSlotContainer();
                        element.appendChild(domElementCreator.createPlanetSlotContainerName());
                        const elementTitle = domElementCreator.createPlanetSlotContainerName()
                            elementTitle.innerHTML = data.getElementData({source: "constants", key: "slotname"}).building;
                    element.appendChild(elementTitle);
                    
                    return element;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message);
                }
            }
            
            function createDefenseSlots(planet, buildings){
                try{
                    const element = domElementCreator.createPlanetSlotContainer();
                        const elementTitle = domElementCreator.createPlanetSlotContainerName()
                            elementTitle.innerHTML = data.getElementData({source: "constants", key: "slotname"}).defense;
                    element.appendChild(elementTitle);
                    
                    return element;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message);
                }
            }
}