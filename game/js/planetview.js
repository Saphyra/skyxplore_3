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
}