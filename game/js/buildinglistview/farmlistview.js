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
            const star = gameData.getStarService().getStarById(starid);
            
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
                const farms = gameData.getBuildingService().getBuildingsOfTypeOfStar(star.getStarId(), "farm", true);
                
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
                    const farmData = data.getElementData(farm.getData().resource);
                    const container = domElementCreator.createListItem();
                        container.appendChild(domElementCreator.createListElementTitle(farmData.name + " - Szint: " + farmData.level));
                        
                        if(farm.getData().status === 0){
                            //Ha az épület kész
                            const detailsContainer = domElementCreator.createListElementLeftText();
                                const income = data.getElementData({source: "farm", key: "income"});
                                const workplace = farmData.workplace;
                                const production = income * workplace;
                                
                            detailsContainer.appendChild(domElementCreator.createListItem(
                                "Termelés: " + production + " Étel / kör (" + income + " / fő X " + workplace + " munkahely)"
                            ));
                            
                            if(farm.getData().upgradestatus !== 0){
                                //Ha az épület fejlesztés alatt áll
                                const upgradeFarmData = data.searchElements({type: "farm", level: farmData.level + 1});
                                const buildStatus = domElementCreator.createFarmListViewBuildStatus(farm.getData().upgradestatus, upgradeFarmData.constructiontime, "Fejlesztés");
                                container.appendChild(buildStatus);
                                
                                const queueService = star.getData().getQueueService();
                                //const request = filters.getRequestOfBuilding(farm.buildingid, queue);
                                const request = queueService.getRequestById(farm.getData().requestid);
                                const prioritySlider = domElementCreator.createPrioritySliderButton("Visszavon", request.getPriority(), new PrioritySliderModificationAction(request, queueService.getQueue()));
                                container.appendChild(prioritySlider);
                            }else if(farmData.level < 3){
                                //Ha az épület fejleszthető
                                const upgradeFarmData = data.searchElements({type: "farm", level: farmData.level + 1});
                                
                                const upgradeContainer = domElementCreator.createListItem();
                                    const title = domElementCreator.createTextCell("Fejlesztés (" + upgradeFarmData.name + " - Szint: " + upgradeFarmData.level + ")", "1.25rem", "center");
                                upgradeContainer.appendChild(title);
                                
                                    const upgradeWorkplace = upgradeFarmData.workplace;
                                    const upgradeProduction = income * upgradeWorkplace;
                                upgradeContainer.appendChild(domElementCreator.createListItemUnhovered(
                                    "Termelés: " + production + " => " + upgradeProduction + " Étel / kör (" + income + " / fő X " + workplace + " => " + upgradeWorkplace + " munkahely)"
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
                                
                                    const upgradePrioritySlider = domElementCreator.createPrioritySliderButton("Fejlesztés", 5, new PrioritySliderUpgradeAction(farm.getBuildingId()));
                                upgradeContainer.appendChild(upgradePrioritySlider);
                                
                                detailsContainer.appendChild(upgradeContainer);
                            }
                            
                            container.appendChild(detailsContainer);
                        }else{
                            //Ha az épület építés alatt
                            const buildStatus = domElementCreator.createFarmListViewBuildStatus(farm.getData().status, farmData.constructiontime, "Építés");
                            container.appendChild(buildStatus);
                            
                            const queueService = star.getData().getQueueService();
                            const request = queueService.getRequestById(farm.getData().requestid);
                            const prioritySlider = domElementCreator.createPrioritySliderButton("Visszavon", request.getPriority(), new PrioritySliderModificationAction(request, queueService.getQueue()));
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
            const minValue = type === "min" ? Number(slider.value) : star.getData().getStorageStatus()["minfridgestatus"];
            const maxValue = type === "max" ? Number(slider.value) : star.getData().getStorageStatus()["maxfridgestatus"];
            
            if(maxValue < minValue){
                alert("A maximális telítettség nem lehet kisebb, mint a minimális.");
                slider.value = this.oldValue;
            }else{
                star.getData().getStorageStatus()[type + "fridgestatus"] = slider.value;
                this.oldValue = slider.value;
                sliderValueLabel.innerHTML = slider.value + "%";
            }
        }
    }
}