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
            displayIndustry(buildings.industry);
            displayEconomy(buildings.economy);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
        function displayCitizens(star){
            try{
                document.getElementById("starviewcitizens").innerHTML = 
                    "Munkás: " + star.data.citizennum
                    + " (" + countPopulationGrowth(star) + "/kör)"
                    + " - Lakóhely: " + countHouseNum(star);
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
    
        function displayResources(star){
            try{
                const resources = star.data.resources;
                const container = document.getElementById("starviewresourcelist");
                container.innerHTML = "";
                
                const foodListItem = document.createElement("DIV");
                    foodListItem.className = "listitem";
                    foodListItem.innerHTML = 
                        getElementData({source: "resource", key: "food"}).name + ": " + resources.food
                        + " ( " + countNetFoodIncome(star) + "/kör)";
                container.appendChild(foodListItem);
                
                for(let storageKey in resources){
                    const storage = resources[storageKey];
                    
                    if(storageKey !== "food" && Object.keys(storage).length){
                        const list = document.createElement("DIV");
                            list.className = "list";
                            
                            const listTitle = document.createElement("DIV");
                                listTitle.className = "listtitle";
                                listTitle.innerHTML = getElementData({source: storageKey, key: 1}).name;
                        list.appendChild(listTitle);
                        
                        for(let resourceKey in storage){
                            const resourceItem = document.createElement("DIV");
                                resourceItem.className = "listitem";
                                resourceItem.innerHTML = getElementData({source: "resource", key: resourceKey}).name
                                + ": " + storage[resourceKey];
                            list.appendChild(resourceItem);
                        }
                            
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
        
        function displayIndustry(types){
            try{
                const container = document.getElementById("starviewindustry");
                
                for(let type in types){
                    const buildings = types[type];
                    
                    switch(type){
                        default:
                            const buildingNum = buildings.length;
                            
                            const listItem = document.createElement("DIV");
                                listItem.className = "listitem";
                                listItem.innerHTML = getElementData({source: type, key: "typename"}) + " - " + buildingNum;
                            container.appendChild(listItem);
                        break;
                    }
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
        
        function displayEconomy(types){
            try{
                const container = document.getElementById("starvieweconomy");
                
                for(let type in types){
                    const buildings = types[type];
                    
                    switch(type){
                        default:
                            const buildingNum = buildings.length;
                            
                            const listItem = document.createElement("DIV");
                                listItem.className = "listitem";
                                listItem.innerHTML = getElementData({source: type, key: "typename"}) + " - " + buildingNum;
                            container.appendChild(listItem);
                        break;
                    }
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }