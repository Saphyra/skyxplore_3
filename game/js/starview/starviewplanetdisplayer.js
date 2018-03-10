function StarViewPlanetDisplayer(){
    this.displayPlanets = function displayPlanets(starid){
        //Csillag bolyóinak megjelenítése
        try{
            const container = document.getElementById("starviewplanetlist");
                container.innerHTML = "";
                
            const planets = filters.getPlanetsOfStar(starid);
            
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
                    
                    const planetName = domElementCreator.createStarViewPlanetName(planet.planetname);
                        const description = domElementCreator.createStarViewPlanetDescription(nameConverter.convertPlanetSize(planet.size), nameConverter.convertPlanetType(planet.type));
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
                
                const farmNum = counter.countBuildingsOfSlot(planet.planetid, "food");
                const foodSlots = planet.slots.food;
                const farmSlotListItem = domElementCreator.createPlanetSlotListItem(farmNum, foodSlots);
                    farmSlotListItem.innerHTML = slotNames.food + " "  + farmNum + " / " + foodSlots;
            list.appendChild(farmSlotListItem);
            
                const minefieldSlots = planet.slots.minefield
                const minefieldNum = counter.countBuildingsOfSlot(planet.planetid, "minefield");
                const mineSlotListItem = domElementCreator.createPlanetSlotListItem(minefieldNum, minefieldSlots);
                    mineSlotListItem.innerHTML = slotNames.minefield + " " + minefieldNum + " / " + minefieldSlots;
            list.appendChild(mineSlotListItem);
            
                const buildingNum = counter.countBuildingsOfSlot(planet.planetid, "building")
                const buildingSlots = planet.slots.building;
                const buildingSlotListItem = domElementCreator.createPlanetSlotListItem(buildingNum, buildingSlots);
                    buildingSlotListItem.innerHTML = slotNames.building + " " + buildingNum + " / " + buildingSlots;
            list.appendChild(buildingSlotListItem);
            
                const defenseSlots = planet.slots.defense;
                const defenseNum = counter.countDefenseOfPlanet(planet.planetid);
                const defenseSlotListItem = domElementCreator.createPlanetSlotListItem(defenseNum, defenseSlots);
                    defenseSlotListItem.innerHTML = slotNames.defense + " " + defenseNum + " / " + defenseSlots;
            list.appendChild(defenseSlotListItem);
                
            return list;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}