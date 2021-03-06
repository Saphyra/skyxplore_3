function StarViewDetailsDisplayer(){
    this.displayDetails = function(star){
        //Részletek megjelenítése
        $("#starviewstarname").text(star.getStarName());
        displayCitizens(star);
        displayResources(star);
        
        const buildingService = gameData.getBuildingService();
        const buildings = buildingService.groupBuildingsByRole(buildingService.getBuildingsOfStar(star.getStarId()));
        displayIndustry(buildings.industry, star.getStarId());
        displayEconomy(buildings.economy, star.getStarId());
    }
    
    function displayCitizens(star){
        //Lakosok adatainak megjelenítése
        try{
            const houseNum = counter.countStorageCapacity(star.getStarId(), "house");
            const populationGrowth = nameConverter.convertFloatNumber(counter.countPopulationGrowth(star.getStarId()), 2);
            const growth = populationGrowth >= 0 ? "+ " + populationGrowth : populationGrowth;
            document.getElementById("starviewcitizens").innerHTML = 
                "Munkás: " + nameConverter.convertFloatNumber(star.getData().getCitizenNum(), 0)
                + " (" + growth + "/kör)"
                + " - Lakóhely: " + houseNum;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function displayResources(star){
        //Tárolt nyersanyagok megjelenítése
        try{
            const resources = star.getData().getResources();
            const container = document.getElementById("starviewresourcelist");
            container.innerHTML = "";
            
            //Élelmiszer termelés megjelenítése
            const netFoodIncome = counter.countNetFoodIncome(star.getStarId());
            const foodIncome = netFoodIncome >= 0 ? "+ " + netFoodIncome : netFoodIncome;
            const fridgeCapacity = counter.countStorageCapacity(star.getStarId(), "fridge");
            
            const content = data.getElementData({source: "resource", key: "food"}).name + ": " + resources.food + "/" + fridgeCapacity
                    + " (" + foodIncome + "/kör)";
            const foodListItem = domElementCreator.createListItem(content);
                domElementCreator.convertElementToButton(foodListItem, function(){buildingListView.showFarmListView(star.getStarId())}, true);
            container.appendChild(foodListItem);
            
            //Tárolt anyagtípusok megjelenítése
            for(let storageKey in resources){
                const storage = resources[storageKey];
                
                if(storageKey !== "food" && Object.keys(storage).length){
                    const list = domElementCreator.createListElement();
                        
                        const capacity = counter.countStorageCapacity(star.getStarId(), storageKey);
                        const listTitle = domElementCreator.createListElementTitle();
                            
                    list.appendChild(listTitle);
                    let actualCapacity = 0;
                    //Típus nyersanyagainek megjelenítése
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function displayIndustry(industrialBuildings, starid){
        //Ipar épületeinek megjelenítése
        try{
            const buildingService = gameData.getBuildingService();
            const orderedBuildings = buildingService.orderBuildingsByName(industrialBuildings);
            const buildingTypes = gameData.getBuildingService().groupBuildingsByType(orderedBuildings);
            
            const container = document.getElementById("starviewindustry");
            container.innerHTML = "";
            for(let type in buildingTypes){
                const buildings = buildingTypes[type];
                
                let content;
                let item;
                    switch(type){
                        case "farm":
                            content = data.getElementData({source: type, key: "typename"}) + " (+" + counter.countFoodIncome(starid) + " étel/kör)";
                            item = domElementCreator.createListItem(content);
                            domElementCreator.convertElementToButton(item, function(){buildingListView.showView(type, starid)}, false);
                        break;
                        case "mine":
                            content = data.getElementData({source: type, key: "typename"}) + " (+" + counter.countResourceIncome(starid) + " nyersanyag/kör)";
                            item = domElementCreator.createListItem(content);
                            domElementCreator.convertElementToButton(item, function(){buildingListView.showView(type, starid)}, false);
                        break;
                        case "factory":
                            content = data.getElementData({source: type, key: "typename"}) + " (Termelés: +" + counter.countProductivity(starid) + "/kör)";
                            item = domElementCreator.createListItem(content);
                            domElementCreator.convertElementToButton(item, function(){buildingListView.showView(type, starid)}, false);
                        break;
                        default:
                            const buildingNum = buildings.length;
                            content = data.getElementData({source: type, key: "typename"}) + " - " + buildingNum;
                        break;
                    }
                container.appendChild(item);
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function displayEconomy(economicBuildings, starid){
        //Gazdasági épületek megjelenítése
        try{
            const buildingService = gameData.getBuildingService();
            const orderedBuildings = buildingService.orderBuildingsByName(economicBuildings);
            const buildingTypes = gameData.getBuildingService().groupBuildingsByType(orderedBuildings);
            
            const container = document.getElementById("starvieweconomy");
            container.innerHTML = "";
            
            for(let type in buildingTypes){
                const buildings = buildingTypes[type];
                
                let content;
                    switch(type){
                        case "storage":
                        case "depot":
                        case "fridge":
                            const capacity = counter.countStorageCapacity(starid, type);
                            if(capacity === 0){
                                continue;
                            }
                            content = data.getElementData({source: type, key: "typename"})
                                + " (Kapacitás: " + capacity + ")";
                        break;
                        case "house":
                            content = data.getElementData({source: type, key: "typename"})
                                + " (Lakóhely: " + counter.countStorageCapacity(starid, "house") + ")";
                        break;
                        default:
                            const buildingNum = buildings.length;
                            content = data.getElementData({source: type, key: "typename"}) + " - " + buildingNum;
                        break;
                    }
                container.appendChild(domElementCreator.createListItem(content));
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}