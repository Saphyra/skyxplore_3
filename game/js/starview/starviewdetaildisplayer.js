function StarViewDetailsDisplayer(){
    const buildingGrouper = new BuildingGrouper();
    
    this.displayDetails = function(star){
        //Részletek megjelenítése
        $("#starviewstarname").text(star.starname);
        displayCitizens(star);
        displayResources(star);
        
        const buildings = buildingGrouper.groupBuildingsByRole(star);
        displayIndustry(buildings.industry, star.starid);
        displayEconomy(buildings.economy, star);
    }
    
    function displayCitizens(star){
        //Lakosok adatainak megjelenítése
        try{
            const houseNum = counter.countStorageCapacity(star.starid, "house");
            const populationGrowth = counter.countPopulationGrowth(star);
            const growth = populationGrowth >= 0 ? "+ " + populationGrowth : populationGrowth;
            document.getElementById("starviewcitizens").innerHTML = 
                "Munkás: " + star.data.citizennum
                + " (" + growth + "/kör)"
                + " - Lakóhely: " + houseNum;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function displayResources(star){
        //Tárolt nyersanyagok megjelenítése
        try{
            const resources = star.data.resources;
            const container = document.getElementById("starviewresourcelist");
            container.innerHTML = "";
            
            //Élelmiszer termelés megjelenítése
            const netFoodIncome = counter.countNetFoodIncome(star);
            const foodIncome = netFoodIncome >= 0 ? "+ " + netFoodIncome : netFoodIncome;
            const fridgeCapacity = counter.countStorageCapacity(star.starid, "fridge");
            
            const content = data.getElementData({source: "resource", key: "food"}).name + ": " + resources.food + "/" + fridgeCapacity
                    + " (" + foodIncome + "/kör)";
            const foodListItem = domElementCreator.createListItem(content);
                domElementCreator.convertElementToButton(foodListItem, function(){buildingListView.showFarmListView(star.starid)}, true);
            container.appendChild(foodListItem);
            
            //Tárolt anyagtípusok megjelenítése
            for(let storageKey in resources){
                const storage = resources[storageKey];
                
                if(storageKey !== "food" && Object.keys(storage).length){
                    const list = domElementCreator.createListElement();
                        
                        const capacity = counter.countStorageCapacity(star.starid, storageKey);
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
    
    function displayIndustry(types, starid){
        //Ipar épületeinek megjelenítése
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function displayEconomy(types, star){
        //Gazdasági épületek megjelenítése
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
                            if(capacity === 0){
                                continue;
                            }
                            content = data.getElementData({source: type, key: "typename"})
                                + " (Kapacitás: " + capacity + ")";
                        break;
                        case "house":
                            content = data.getElementData({source: type, key: "typename"})
                                + " (Lakóhely: " + counter.countStorageCapacity(star.starid, "house") + ")";
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