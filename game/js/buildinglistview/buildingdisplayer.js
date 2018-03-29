function BuildingDisplayer(parent){
    const buildingListView = parent;
    
    this.displayBuildings = function displayBuildings(data){
        try{
            const container = data.container;
                container.innerHTML = "";
                
            const buildings = data.buildings;
            
            for(let buildingid in buildings){
                container.appendChild(displayBuilding(buildings[buildingid]));
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function displayBuilding(building){
            try{
                const buildingData = data.getElementData(building.getData().resource);
                
                const container = domElementCreator.createListItem();
                    container.appendChild(domElementCreator.createListElementTitle(buildingData.name + " - Szint: " + buildingData.level));
                    
                if(building.getData().status === 0){
                    //Ha az épület felépült
                    displayBuiltBuilding(container, building, buildingData);
                }else{
                    //Ha az épület építés alatt
                    displayBuildingUnderConstruction(container, building, buildingData);
                }
                
                return container;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
            function displayBuiltBuilding(container, building, buildingData){
                //Felépült épület adatainak a kijelzése
                try{
                    const detailsContainer = domElementCreator.createListElementLeftText();
                        detailsContainer.appendChild(createDetailsContainer(building, buildingData));
                        
                        if(building.getData().upgradestatus !== 0){
                            //Ha az épület fejlesztés alatt áll
                            const planet = gameData.getPlanetService().getPlanetById(building.getPlanetId());
                            const star = gameData.getStarService().getStarById(planet.getStarId());
                            const queueService = star.getData().getQueueService();
                            const request = queueService.getRequestById(building.getData().requestid);
                            
                            detailsContainer.appendChild(createUpgradedBuildingDetailsContainer(building, buildingData, request, queueService.getQueue()));
                            
                            const prioritySlider = domElementCreator.createPrioritySliderButton("Visszavon", request.getPriority(), new PrioritySliderModificationAction(request, queueService.getQueue()));
                            detailsContainer.appendChild(prioritySlider);
                            
                        }else if(buildingData.level < 3){
                            //Ha az épület fejleszthető
                            detailsContainer.appendChild(createUpgradableBuildingDetailsContainer(building, buildingData));
                        }
                    
                    container.appendChild(detailsContainer);
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
            
                function createDetailsContainer(building, buildingData){
                    //Épület részletei
                    try{
                        switch(buildingData.type){
                            case "farm":
                                const income = data.getElementData({source: "farm", key: "income"});
                                const workplace = buildingData.workplace;
                                const production = income * workplace;
                                    
                                return domElementCreator.createListItem("Termelés: " + production + " Étel / kör (" + income + " / fő X " + workplace + " munkahely)");
                            break;
                            default:
                                log("BuildingDisplayer.createDetailsContainer - unknown building type: " + buildingData.type);
                                return document.createTextNode();
                            break;
                        }
                    }catch(err){
                        log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                    }
                }
                
                function createUpgradedBuildingDetailsContainer(building, buildingData, request, queue){
                    //Fejlesztés alatt álló épület részletei
                    try{
                        const upgradeBuildingData = data.searchElements({type: buildingData.type, level: buildingData.level + 1});
                        
                        let buildStatus;
                        if(request.getStatus() === "collectresources"){
                            //Ha a kérelem nyersanyaggyűjtő státuszban van
                            const requiredResourceNum = counter.countResourceNumOfList(request.getData().resourcerequirements);
                            const storedResourceNum = counter.countResourceNumOfList(request.getData().storedresources);
                            const completed = requiredResourceNum - storedResourceNum;
                            buildStatus = domElementCreator.createBuildingListViewBuildStatus(completed, requiredResourceNum, "Nyersanyaggyűjtés");
                        }else{
                            //Ha az épület fejlesztési státuszban van
                            buildStatus = domElementCreator.createBuildingListViewBuildStatus(building.getData().upgradestatus, upgradeBuildingData.constructiontime, "Fejlesztés");
                        }
                        
                        return buildStatus;
                    }catch(err){
                        log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                    }
                }
                
                function createUpgradableBuildingDetailsContainer(building, buildingData){
                    //Épület fejlesztése részletek
                    try{
                        const upgradeBuildingData = data.searchElements({type: buildingData.type, level: buildingData.level + 1});
                        const upgradeContainer = domElementCreator.createListItem();
                        
                            const title = domElementCreator.createTextCell("Fejlesztés (" + upgradeBuildingData.name + " - Szint: " + upgradeBuildingData.level + ")", "1.25rem", "center");
                        upgradeContainer.appendChild(title);
                        
                        upgradeContainer.appendChild(createUpgradeBenefitDetails(buildingData, upgradeBuildingData));
                        
                        upgradeContainer.appendChild(createUpgradeCostDetails(upgradeBuildingData));
                        
                            const upgradePrioritySlider = domElementCreator.createPrioritySliderButton("Fejlesztés", 5, new PrioritySliderUpgradeAction(building.getBuildingId()));
                        upgradeContainer.appendChild(upgradePrioritySlider)
                            
                        return upgradeContainer;
                    }catch(err){
                        log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                    }
                }
                
                    function createUpgradeBenefitDetails(buildingData, upgradeBuildingData){
                        //Épület fejlesztésével járó előnyök kijelzése
                        try{
                            switch(buildingData.type){
                                case "farm":
                                    const income = data.getElementData({source: "farm", key: "income"});
                                    const workplace = buildingData.workplace;
                                    const production = income * workplace;
                                        
                                    const upgradeWorkplace = upgradeBuildingData.workplace;
                                    const upgradeProduction = income * upgradeWorkplace;
                                    
                                    return domElementCreator.createListItemUnhovered("Termelés: " + production + " => " + upgradeProduction + " Étel / kör (" + income + " / fő X " + workplace + " => " + upgradeWorkplace + " munkahely)");
                                break;
                                default:
                                    log("BuildingDisplayer.createUpgradeBenefitDetails - unknown building type: " + buildingData.type);
                                    return document.createTextNode();
                                break;
                            }
                        }catch(err){
                            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                        }
                    }
                    
                    function createUpgradeCostDetails(upgradeBuildingData){
                        //Fejlesztési költségek kijelzése
                        try{
                            const upgradeCosts = upgradeBuildingData.resource;
                            const upgradeCostContainer = domElementCreator.createListItemUnhovered();
                            
                                for(let ucindex in upgradeCosts){
                                    const upgradeCost = upgradeCosts[ucindex];
                                    const resource = data.getElementData({source: "resource", key: ucindex});
                                    
                                    const upgradeCostCell = domElementCreator.createTextCell(resource.name + ": " + upgradeCost);
                                    
                                    upgradeCostContainer.appendChild(upgradeCostCell);
                                }
                            return upgradeCostContainer;
                        }catch(err){
                            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                        }
                    }
                    
            function displayBuildingUnderConstruction(container, building, buildingData){
                try{
                    const planet = gameData.getPlanetService().getPlanetById(building.getBuildingId());
                    const star = gameData.getStarService().getStarById(planet.getStarId());
                    const queueService = star.getData().getQueueService();
                    const request = queueService.getRequestById(farm.getData().requestid);
                    
                    let buildStatus;
                        if(request.getStatus() === "collectresources"){
                            const requiredResourceNum = counter.countResourceNumOfList(request.getData().resourcerequirements);
                            const storedResourceNum = counter.countResourceNumOfList(request.getData().storedresources);
                            const completed = requiredResourceNum - storedResourceNum;
                            buildStatus = domElementCreator.createBuildingListViewBuildStatus(completed, requiredResourceNum, "Nyersanyaggyűjtés");
                        }else{
                            buildStatus = domElementCreator.createBuildingListViewBuildStatus(building.getData().status, farmData.constructiontime, "Építés");
                        }
                    container.appendChild(buildStatus);
                    
                    const prioritySlider = domElementCreator.createPrioritySliderButton("Visszavon", request.getPriority(), new PrioritySliderModificationAction(request, queueService.getQueue()));
                    container.appendChild(prioritySlider);
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
}