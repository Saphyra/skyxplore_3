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
            const element = document.createElement("DIV");
                element.onclick = function(){planetView.showPlanet(planet)};
                element.classList.add("starviewplanet");
                element.classList.add("starviewplanet" + planet.type);
                
                const cover = document.createElement("DIV");
                    cover.className = "cover";
                    
                    const planetName = document.createElement("DIV");
                        planetName.className = "starviewplanetname";
                        planetName.innerHTML = planet.planetname;
                        
                        const description = document.createElement("DIV");
                            description.className = "starviewplanetdescription";
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
                const farmSlotListItem = document.createElement("DIV");
                    farmSlotListItem.className = "planetlistitem";
                    if(farmNum == foodSlots){
                        farmSlotListItem.classList.add("starviewfullplanetslot");
                    }else if(farmNum){
                        farmSlotListItem.classList.add("starviewusedplanetslot");
                    }
                    farmSlotListItem.innerHTML = "Farm hely: "  + farmNum + " / " + foodSlots;
            list.appendChild(farmSlotListItem);
            
                const minefieldSlots = planet.slots.minefield
                const minefieldNum = counter.countBuildingsOfSlot(planet.planetid, "minefield");
                const mineSlotListItem = document.createElement("DIV");
                    mineSlotListItem.className = "planetlistitem";
                    if(minefieldNum == minefieldSlots){
                        mineSlotListItem.classList.add("starviewfullplanetslot");
                    }else if(minefieldNum > 0){
                        mineSlotListItem.classList.add("starviewusedplanetslot");
                    }
                    mineSlotListItem.innerHTML = "Bánya hely: " + minefieldNum + " / " + minefieldSlots;
            list.appendChild(mineSlotListItem);
            
                const buildingNum = counter.countBuildingsOfSlot(planet.planetid, "building")
                const buildingSlots = planet.slots.building;
                const buildingSlotListItem = document.createElement("DIV");
                    buildingSlotListItem.className = "planetlistitem";
                    if(buildingNum == buildingSlots){
                        buildingSlotListItem.classList.add("starviewfullplanetslot");
                    }else if(buildingNum > 0){
                        buildingSlotListItem.classList.add("starviewusedplanetslot");
                    }
                    buildingSlotListItem.innerHTML = "Épület hely: " + buildingNum + " / " + buildingSlots;
            list.appendChild(buildingSlotListItem);
            
                const defenseSlots = planet.slots.defense;
                const defenseNum = counter.countDefense(planet.planetid);
                const defenseSlotListItem = document.createElement("DIV");
                    defenseSlotListItem.className = "planetlistitem";
                    if(defenseNum == defenseSlots){
                        defenseSlotListItem.classList.add("starviewfullplanetslot");
                    }else if(defenseNum > 0){
                        defenseSlotListItem.classList.add("starviewusedplanetslot");
                    }
                    defenseSlotListItem.innerHTML = "Védelem hely: " + defenseNum + " / " + defenseSlots;
            list.appendChild(defenseSlotListItem);
                
            return list;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}