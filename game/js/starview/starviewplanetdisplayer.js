function StarViewPlanetDisplayer(){
    this.displayPlanets = function displayPlanets(starid){
        //Csillag bolyóinak megjelenítése
        try{
            const container = document.getElementById("starviewplanetlist");
                container.innerHTML = "";
                
            const planets = gameData.getPlanetService().getPlanetsOfStar(starid);
            
            for(let planetid in planets){
                const planet = planets[planetid];
                container.appendChild(displayPlanet(planet));
            }
            
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function displayPlanet(planet){
        //Bolygó megjelenítése
        try{
            const element = domElementCreator.createStarViewPlanet(planet);
                const cover = domElementCreator.createCoverElement();
                    
                    const planetName = domElementCreator.createStarViewPlanetName(planet.getPlanetName());
                        const description = domElementCreator.createStarViewPlanetDescription(nameConverter.convertPlanetSize(planet.getSize()), nameConverter.convertPlanetType(planet.getType()));
                    planetName.appendChild(description);
                    
                cover.appendChild(planetName);
                cover.appendChild(displayPlanetSlots(planet));
                
            element.appendChild(cover);
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function displayPlanetSlots(planet){
        //Bolygó slot összesétés megjelenítése
        try{
            const list = document.createElement("DIV");
                const slotNames = data.getElementData({source: "constants", key: "slotname"});
                
                const farmNum = counter.countBuildingsOfSlot(planet.getPlanetId(), "food");
                const foodSlots = planet.getSlots().food;
                const farmSlotListItem = domElementCreator.createPlanetSlotListItem(farmNum, foodSlots);
                    farmSlotListItem.innerHTML = slotNames.food + " "  + farmNum + " / " + foodSlots;
            list.appendChild(farmSlotListItem);
            
                const minefieldSlots = planet.getSlots().minefield
                const minefieldNum = counter.countBuildingsOfSlot(planet.getPlanetId(), "minefield");
                const mineSlotListItem = domElementCreator.createPlanetSlotListItem(minefieldNum, minefieldSlots);
                    mineSlotListItem.innerHTML = slotNames.minefield + " " + minefieldNum + " / " + minefieldSlots;
            list.appendChild(mineSlotListItem);
            
                const buildingNum = counter.countBuildingsOfSlot(planet.getPlanetId(), "building")
                const buildingSlots = planet.getSlots().building;
                const buildingSlotListItem = domElementCreator.createPlanetSlotListItem(buildingNum, buildingSlots);
                    buildingSlotListItem.innerHTML = slotNames.building + " " + buildingNum + " / " + buildingSlots;
            list.appendChild(buildingSlotListItem);
            
                const defenseSlots = planet.getSlots().defense;
                const defenseNum = counter.countDefenseOfPlanet(planet.getPlanetId());
                const defenseSlotListItem = domElementCreator.createPlanetSlotListItem(defenseNum, defenseSlots);
                    defenseSlotListItem.innerHTML = slotNames.defense + " " + defenseNum + " / " + defenseSlots;
            list.appendChild(defenseSlotListItem);
                
            return list;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}