function FarmListView(){
    //Farmok listanézetének megjelenítése
    
    this.showView = function showView(starid){
        //Ablak megjelenítése
        try{
            this.displayFarmListData(starid);
            back.switchWindow("#farmlistviewcontainer");
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.displayFarmListData = function displayFarmListData(starid){
        //Adatok megjelenítése
        try{
            const star = gameData.stars[starid];
            displaySliders(star);
            displayFarms(star);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function displaySliders(star){
            //Étel státusz csúszkák megjelenítése
            try{
                const container = document.getElementById("farmlistviewslidercontainer");
                    container.innerHTML = "";
                    
                    const minSlider = domElementCreator.createFarmListViewFoodStatusSlider(star, "min", new ApplySliderChanges());
                container.appendChild(minSlider);
                    const maxSlider = domElementCreator.createFarmListViewFoodStatusSlider(star, "max", new ApplySliderChanges());
                container.appendChild(maxSlider);
                    const prioritySlider = domElementCreator.createFarmListViewPrioritySlider(star);
                container.appendChild(prioritySlider);
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function displayFarms(star){
            try{
                const farms = filters.getBuildingsOfTypeOfStar(star.starid, "farm", true);
                const container = document.getElementById("farmlistviewbuildinglistcontainer");
                container.innerHTML = "";
                
                for(let findex in farms){
                    const farm = farms[findex];
                    container.appendChild(displayFarm(farm, star));
                }
                
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
            function displayFarm(farm, star){
                try{
                    const farmData = data.getElementData(farm.data.resource);
                    const container = domElementCreator.createListItem();
                        container.appendChild(domElementCreator.createListElementTitle(farmData.name + " - Szint: " + farmData.level));
                        
                        if(farm.data.status === 0){
                            //Ha az épület kész
                            const detailsContainer = domElementCreator.createListElementLeftText();
                                const income = farmData.income;
                                const workplace = farmData.workplace;
                                const production = income * workplace;
                            detailsContainer.appendChild(domElementCreator.createListItem(
                                "Termelés: " + production + " Étel / kör (" + income + " / fő X " + workplace + " munkahely)"
                            ));
                            
                            if(farm.data.upgradestatus !== 0){
                                //Ha az épület fejlesztés alatt áll
                                const upgradeFarmData = filters.searchElements({type: "farm", level: farmData.level + 1});
                                const buildStatus = domElementCreator.createFarmListViewBuildStatus(farm.data.upgradestatus, upgradeFarmData.constructiontime, "Fejlesztés");
                                container.appendChild(buildStatus);
                                
                                const queue = star.data.queue;
                                const request = filters.getRequestOfBuilding(farm.buildingid, queue);
                                const prioritySlider = domElementCreator.createPrioritySliderButton("Visszavon", request.priority, new PrioritySliderModificationAction(request, queue));
                                container.appendChild(prioritySlider);
                            }else if(farmData.level < 3){
                                //Ha az épület fejleszthető
                                const upgradeFarmData = filters.searchElements({type: "farm", level: farmData.level + 1});
                                
                                const upgradeContainer = domElementCreator.createListItem();
                                    const title = domElementCreator.createTextCell("Fejlesztés (" + upgradeFarmData.name + " - Szint: " + upgradeFarmData.level + ")", "1.25rem", "center");
                                upgradeContainer.appendChild(title);
                                
                                    const upgradeIncome = upgradeFarmData.income;
                                    const upgradeWorkplace = upgradeFarmData.workplace;
                                    const upgradeProduction = upgradeIncome * upgradeWorkplace;
                                upgradeContainer.appendChild(domElementCreator.createListItemUnhovered(
                                    "Termelés: " + production + " => " + upgradeProduction + " Étel / kör (" + income + " => " + upgradeIncome + " / fő X " + workplace + " => " + upgradeWorkplace + " munkahely)"
                                ));
                                
                                    const upgradeCosts = upgradeFarmData.resource;
                                    const upgradeCostContainer = domElementCreator.createListItemUnhovered();
                                    
                                        for(let ucindex in upgradeCosts){
                                            const upgradeCost = upgradeCosts[ucindex];
                                            const resource = data.getElementData({source: "resource", key: ucindex});
                                            
                                            const upgradeCostCell = domElementCreator.createTextCell(resource.name + ": " + upgradeCost);
                                            
                                            upgradeCostContainer.appendChild(upgradeCostCell);
                                        }
                                
                                upgradeContainer.appendChild(upgradeCostContainer);
                                
                                    const upgradePrioritySlider = domElementCreator.createPrioritySliderButton("Fejlesztés", 5, new PrioritySliderUpgradeAction(farm.buildingid));
                                upgradeContainer.appendChild(upgradePrioritySlider);
                                
                                detailsContainer.appendChild(upgradeContainer);
                            }
                            
                            container.appendChild(detailsContainer);
                        }else{
                            const buildStatus = domElementCreator.createFarmListViewBuildStatus(farm.data.status, farmData.constructiontime, "Építés");
                            container.appendChild(buildStatus);
                            
                            const queue = star.data.queue;
                            const request = filters.getRequestOfBuilding(farm.buildingid, queue);
                            const prioritySlider = domElementCreator.createPrioritySliderButton("Visszavon", request.priority, new PrioritySliderModificationAction(request, queue));
                            container.appendChild(prioritySlider);
                        }
                        
                    return container;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
        
    function ApplySliderChanges(){
        this.oldValue;
        
        this.apply = function(star, slider, sliderValueLabel, type){
            const minValue = type === "min" ? Number(slider.value) : star.data.storagestatus["minfridgestatus"];
            const maxValue = type === "max" ? Number(slider.value) : star.data.storagestatus["maxfridgestatus"];
            
            if(maxValue < minValue){
                alert("A maximális telítettség nem lehet kisebb, mint a minimális.");
                slider.value = this.oldValue;
            }else{
                star.data.storagestatus[type + "fridgestatus"] = slider.value;
                this.oldValue = slider.value;
                sliderValueLabel.innerHTML = slider.value + "%";
            }
        }
    }
}