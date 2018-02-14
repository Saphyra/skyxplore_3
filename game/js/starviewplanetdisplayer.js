function StarViewPlanetDisplayer(){
    this.displayPlanets = function displayPlanets(starid){
        try{
            const container = document.getElementById("starviewplanetlist");
                container.innerHTML = "";
                
            const planets = filters.getPlanetsOfStar(starid);
            
            for(let planetid in planets){
                const planet = planets[planetid];
                container.appendChild(displayPlanet(planet));
            }
            
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    function displayPlanet(planet){
        try{
            const element = domElementCreator.createStarViewPlanet(planet);
                
                const cover = domElementCreator.createCoverElement();
                    
                    const planetName = document.createElement("DIV");
                        planetName.className = "fontsize15rem border3px borderbottomridge bordercolor100";
                        planetName.innerHTML = planet.planetname;
                        
                        const description = document.createElement("DIV");
                            description.className = "fontsize0875rem";
                            description.innerHTML = nameConverter.convertPlanetSize(planet.size)
                                + " " + nameConverter.convertPlanetType(planet.type);
                    planetName.appendChild(description);
                cover.appendChild(planetName);
                
                cover.appendChild(displayPlanetSlots(planet));
                
            element.appendChild(cover);
                
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    function displayPlanetSlots(planet){
        try{
            const list = document.createElement("DIV");
                
                const farmNum = counter.countBuildingsOfSlot(planet.planetid, "food");
                const foodSlots = planet.slots.food;
                const farmSlotListItem = domElementCreator.createPlanetListItem(farmNum, foodSlots);
                    farmSlotListItem.innerHTML = "Farm hely: "  + farmNum + " / " + foodSlots;
            list.appendChild(farmSlotListItem);
            
                const minefieldSlots = planet.slots.minefield
                const minefieldNum = counter.countBuildingsOfSlot(planet.planetid, "minefield");
                const mineSlotListItem = domElementCreator.createPlanetListItem(minefieldNum, minefieldSlots);
                    mineSlotListItem.innerHTML = "Bánya hely: " + minefieldNum + " / " + minefieldSlots;
            list.appendChild(mineSlotListItem);
            
                const buildingNum = counter.countBuildingsOfSlot(planet.planetid, "building")
                const buildingSlots = planet.slots.building;
                const buildingSlotListItem = domElementCreator.createPlanetListItem(buildingNum, buildingSlots);
                    buildingSlotListItem.innerHTML = "Épület hely: " + buildingNum + " / " + buildingSlots;
            list.appendChild(buildingSlotListItem);
            
                const defenseSlots = planet.slots.defense;
                const defenseNum = counter.countDefense(planet.planetid);
                const defenseSlotListItem = domElementCreator.createPlanetListItem(defenseNum, defenseSlots);
                    defenseSlotListItem.innerHTML = "Védelem hely: " + defenseNum + " / " + defenseSlots;
            list.appendChild(defenseSlotListItem);
                
            return list;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}