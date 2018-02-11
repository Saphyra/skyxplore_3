function showStar(star){
    try{
        if(star.visibility.player.visibility == "connected"){
            switchWindow("#connectedstarviewcontainer");
        }else{
            displayStarData(star);
            switchWindow("#starviewcontainer");
        }
        
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}
    
    function displayStarData(star){
        try{
            $("#starviewstarname").text(star.starname);
            displayCitizens(star);
            displayResources(star);
            
            const buildings = groupBuildingsByRole(star);
            displayIndustry(buildings.industry, star.starid);
            displayEconomy(buildings.economy, star);
            
            displayQueue(star.data.queue);
            displayPlanets(star.starid);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
        function displayCitizens(star){
            try{
                const houseNum = countHouseNum(star);
                const populationGrowth = countPopulationGrowth(star, houseNum);
                const growth = populationGrowth >= 0 ? "+ " + populationGrowth : "- " + populationGrowth;
                document.getElementById("starviewcitizens").innerHTML = 
                    "Munkás: " + star.data.citizennum
                    + " (" + growth + "/kör)"
                    + " - Lakóhely: " + houseNum;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
    
        function displayResources(star){
            try{
                const resources = star.data.resources;
                const container = document.getElementById("starviewresourcelist");
                container.innerHTML = "";
                
                const netFoodIncome = countNetFoodIncome(star);
                const foodIncome = netFoodIncome >= 0 ? "+ " + netFoodIncome : "- " + netFoodIncome;
                const fridgeCapacity = countStorageCapacity(star.starid, "fridge");
                const foodListItem = document.createElement("DIV");
                    foodListItem.className = "listitem";
                    foodListItem.innerHTML = 
                        getElementData({source: "resource", key: "food"}).name + ": " + resources.food + "/" + fridgeCapacity
                        + " (" + foodIncome + "/kör)";
                container.appendChild(foodListItem);
                
                for(let storageKey in resources){
                    const storage = resources[storageKey];
                    
                    if(storageKey !== "food" && Object.keys(storage).length){
                        const list = document.createElement("DIV");
                            list.className = "list";
                            
                            const capacity = countStorageCapacity(star.starid, storageKey);
                            const listTitle = document.createElement("DIV");
                                listTitle.className = "listtitle";
                                
                        list.appendChild(listTitle);
                        let actualCapacity = 0;
                        for(let resourceKey in storage){
                            const resourceItem = document.createElement("DIV");
                                resourceItem.className = "listitem";
                                resourceItem.innerHTML = getElementData({source: "resource", key: resourceKey}).name
                                + ": " + storage[resourceKey];
                            list.appendChild(resourceItem);
                            actualCapacity += storage[resourceKey];
                        }
                        
                            listTitle.innerHTML = getElementData({source: storageKey, key: "typename"})
                            + " (" + actualCapacity + "/" + capacity + ")";
                        container.appendChild(list);
                    }
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
        
        function groupBuildingsByRole(star){
            try{
                const buildings = gameData.buildings;
                const grouped = {industry: {}, economy: {}};
                const result = {industry: {}, economy: {}};
                
                for(let buildingid in buildings){
                    const building = gameData.buildings[buildingid]
                    if(gameData.planets[building.planetid].starid === star.starid){
                        const buildingData = getElementData(building.data.resource);
                        switch(buildingData.role){
                            case "industry":
                                grouped.industry[buildingid] = {building: building, buildingData: buildingData};
                            break;
                            default:
                                grouped.economy[buildingid] = {building: building, buildingData: buildingData};
                            break;
                        }
                    }
                }
                
                result.industry = orderBuildingsByName(groupBuildingsByType(grouped.industry));
                result.economy = orderBuildingsByName(groupBuildingsByType(grouped.economy));
                
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
        
            function groupBuildingsByType(buildings){
                try{
                    const result = {};
                    
                    for(let buildingid in buildings){
                        const building = buildings[buildingid];
                        const type = building.buildingData.type;
                        if(result[type] == undefined){
                            result[type] = [];
                        }
                        
                        result[type].push(building);
                    }
                    
                    return result;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message);
                }
            }
        
            function orderBuildingsByName(buildings){
                try{
                    const arr = [];
                    const result = {};

                    for(let type in buildings){
                        arr.push({type: type, data: buildings[type]});
                    }
                    
                    arr.sort(function(a, b){
                        return getElementData({source: a.type, key: "typename"}).localeCompare(getElementData({source: b.type, key: "typename"}))
                    });
                    
                    for(let index in arr){
                        result[arr[index].type] = arr[index].data;
                    }
                    
                    return result;
                    
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message);
                }
            }
        
        function displayIndustry(types, starid){
            try{
                const container = document.getElementById("starviewindustry");
                container.innerHTML = "";
                
                for(let type in types){
                    const buildings = types[type];
                    let listItem = document.createElement("DIV");
                    listItem.className = "listitem";
                    
                    switch(type){
                        case "farm":
                            listItem.innerHTML = getElementData({source: type, key: "typename"}) + " (+" + countFoodIncome(starid) + " étel/kör)";
                        break;
                        case "mine":
                            listItem.innerHTML = getElementData({source: type, key: "typename"}) + " (+" + countResourceIncome(starid) + " nyersanyag/kör)";
                        break;
                        case "factory":
                            listItem.innerHTML = getElementData({source: type, key: "typename"}) + " (Termelés: +" + countProductivity(starid) + "/kör)";
                        break;
                        default:
                            const buildingNum = buildings.length;
                            listItem.innerHTML = getElementData({source: type, key: "typename"}) + " - " + buildingNum;
                        break;
                    }
                    
                    container.appendChild(listItem);
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
        
        function displayEconomy(types, star){
            try{
                const container = document.getElementById("starvieweconomy");
                container.innerHTML = "";
                
                for(let type in types){
                    const buildings = types[type];
                    
                    const listItem = document.createElement("DIV");
                        listItem.className = "listitem";
                    switch(type){
                        case "storage":
                        case "depot":
                        case "fridge":
                            const capacity = countStorageCapacity(star.starid, type);
                            listItem.innerHTML = getElementData({source: type, key: "typename"})
                                + " (Kapacitás: " + capacity + ")";
                        break;
                        case "house":
                            listItem.innerHTML = getElementData({source: type, key: "typename"})
                                + " (Lakóhely: " + countHouseNum(star) + ")";
                        break;
                        default:
                            const buildingNum = buildings.length;
                            listItem.innerHTML = getElementData({source: type, key: "typename"}) + " - " + buildingNum;
                        break;
                    }
                    container.appendChild(listItem);
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
        
    function displayQueue(queue){
        try{
            const container = document.getElementById("starviewqueue");
                container.innerHTML = "";
                
            if(!queue.length){
                container.innerHTML = "<DIV class='listtitle'>Nincs tétel</DIV>";
            }else{
                for(let index in queue){
                    const element = queue[index];
                    
                    const item = document.createElement("DIV");
                        item.className = "listitem";
                        item.innerHTML = "Tétel";
                    container.appendChild(item);
                }
            }
            
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    function displayPlanets(starid){
        try{
            const container = document.getElementById("starviewplanetlist");
                container.innerHTML = "";
                
            const planets = getPlanetsOfStar(starid);
            
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
                    element.classList.add("starviewplanet");
                    element.classList.add("starviewplanet" + planet.type);
                    
                    const cover = document.createElement("DIV");
                        cover.className = "starviewplanetcover";
                        
                        const planetName = document.createElement("DIV");
                            planetName.className = "starviewplanetname";
                            planetName.innerHTML = planet.planetname;
                            
                            const description = document.createElement("DIV");
                                description.className = "starviewplanetdescription";
                                description.innerHTML = convertPlanetSize(planet.size) + " " + convertPlanetType(planet.type);
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
                        
                        const farmNum = countFarms(planet.planetid);
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
                        const minefieldNum = countMinefields(planet.planetid);
                        const mineSlotListItem = document.createElement("DIV");
                            mineSlotListItem.className = "planetlistitem";
                            if(minefieldNum == minefieldSlots){
                                mineSlotListItem.classList.add("starviewfullplanetslot");
                            }else if(minefieldNum > 0){
                                mineSlotListItem.classList.add("starviewusedplanetslot");
                            }
                            mineSlotListItem.innerHTML = "Bánya hely: " + minefieldNum + " / " + minefieldSlots;
                    list.appendChild(mineSlotListItem);
                    
                        const buildingNum = countBuildings(planet.planetid);
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
                        const defenseNum = countDefense(planet.planetid);
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