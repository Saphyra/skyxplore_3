function PlanetView(){
    this.showPlanet = function showPlanet(planet){
        //Bolygó nézet megjelenítése
        try{
            const star = gameData.stars[planet.starid];
            switch(star.visibility.player.visibility){
                default:
                    this.displayPlanetData(planet);
                    back.switchWindow("#planetviewcontainer");
                break;
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
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
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
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
                                //Építési állapot megjelenítése
                                const buildStatus = domElementCreator.createPlanetSlotBuildStatus(building.building.data.status, building.buildingData.constructiontime);
                                buildingSlotCover.appendChild(buildStatus);
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
                    log(arguments.callee.name + " - " + err.name + ": " + err.message);
                }
            }
}