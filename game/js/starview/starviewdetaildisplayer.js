function StarViewDetailsDisplayer(){
    const buildingGrouper = new BuildingGrouper();
    
    this.displayDetails = function(star){
        $("#starviewstarname").text(star.starname);
        displayCitizens(star);
        displayResources(star);
        
        const buildings = buildingGrouper.groupBuildingsByRole(star);
        displayIndustry(buildings.industry, star.starid);
        displayEconomy(buildings.economy, star);
    }
    
    function displayCitizens(star){
        try{
            const houseNum = counter.countHouseNum(star);
            const populationGrowth = counter.countPopulationGrowth(star, houseNum);
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
            
            const netFoodIncome = counter.countNetFoodIncome(star);
            const foodIncome = netFoodIncome >= 0 ? "+ " + netFoodIncome : "- " + netFoodIncome;
            const fridgeCapacity = counter.countStorageCapacity(star.starid, "fridge");
            
            const content = data.getElementData({source: "resource", key: "food"}).name + ": " + resources.food + "/" + fridgeCapacity
                    + " (" + foodIncome + "/kör)";
            const foodListItem = domElementCreator.createListItem(content);
            container.appendChild(foodListItem);
            
            for(let storageKey in resources){
                const storage = resources[storageKey];
                
                if(storageKey !== "food" && Object.keys(storage).length){
                    const list = domElementCreator.createListElement();
                        
                        const capacity = counter.countStorageCapacity(star.starid, storageKey);
                        const listTitle = domElementCreator.createListElementTitle();
                            
                    list.appendChild(listTitle);
                    let actualCapacity = 0;
                    for(let resourceKey in storage){
                        const resourceItem = domElementCreator.createListItem()
                            resourceItem.innerHTML = data.getElementData({source: "resource", key: resourceKey}).name
                            + ": " + storage[resourceKey];
                        list.appendChild(resourceItem);
                        actualCapacity += storage[resourceKey];
                    }
                    
                        listTitle.innerHTML = data.getElementData({source: storageKey, key: "typename"})
                        + " (" + actualCapacity + "/" + capacity + ")";
                    container.appendChild(list);
                }
            }
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
                
                let content;
                    switch(type){
                        case "farm":
                            content = data.getElementData({source: type, key: "typename"}) + " (+" + counter.countFoodIncome(starid) + " étel/kör)";
                        break;
                        case "mine":
                            content = data.getElementData({source: type, key: "typename"}) + " (+" + counter.countResourceIncome(starid) + " nyersanyag/kör)";
                        break;
                        case "factory":
                            content = data.getElementData({source: type, key: "typename"}) + " (Termelés: +" + counter.countProductivity(starid) + "/kör)";
                        break;
                        default:
                            const buildingNum = buildings.length;
                            content = data.getElementData({source: type, key: "typename"}) + " - " + buildingNum;
                        break;
                    }
                container.appendChild(domElementCreator.createListItem(content));
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
                
                let content;
                    switch(type){
                        case "storage":
                        case "depot":
                        case "fridge":
                            const capacity = counter.countStorageCapacity(star.starid, type);
                            content = data.getElementData({source: type, key: "typename"})
                                + " (Kapacitás: " + capacity + ")";
                        break;
                        case "house":
                            content = data.getElementData({source: type, key: "typename"})
                                + " (Lakóhely: " + counter.countHouseNum(star) + ")";
                        break;
                        default:
                            const buildingNum = buildings.length;
                            content = data.getElementData({source: type, key: "typename"}) + " - " + buildingNum;
                        break;
                    }
                container.appendChild(domElementCreator.createListItem(content));
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}