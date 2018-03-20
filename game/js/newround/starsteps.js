function StarSteps(){
    const requestProcessor = new RequestProcessor(this);
    const worker = new Worker(this);
        this.work = worker.work;
    
    this.runStarSteps = function runStarSteps(){
        //Csillagok körének a futtatása
        try{
            const ownedStars = gameData.getStarService().getOwnedStars();
            consumeFood(ownedStars);
            increasePopulation(ownedStars);
            loadStarTemps(ownedStars);
            log(data.getFromCache("newroundtemp", null), "look", "Csillagok kihasználtsága a kör elején: ");

            const players = gameData.getPlayerService().getAllPlayers();
            for(let playerName in players){
                log("", "look");
                log(playerName + " körének feldolgozása...", "look");
                const player = players[playerName];
                
                const starsOfPlayer = gameData.getStarService().getStarsOfPlayer(playerName);
                const requests = collectRequestsOfStars(starsOfPlayer);
                log(requests.length, "look", playerName + " kérelmeinek száma: ");
                
                for(let rindex in requests){
                    log("", "look");
                    const request = requests[rindex];
                    requestProcessor.workOnRequest(playerName, request, requests);
                }
                log(playerName + " körének feldolgozása befejeződött.", "look");
            }
            
            produceFood(ownedStars);
            log(data.getFromCache("newroundtemp", null), "complete", "Csillagok kihasználtsága a kör végén: ");
            addMoneyForUneployedCitizens(ownedStars);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
        function consumeFood(ownedStars){
            //Étel fogyasztás
            try{
                log("Lakosság etetése...", "look");
                for(let starid in ownedStars){
                    const star = ownedStars[starid];
                    
                    const starData = star.getData();
                    const citizennum = Math.floor(starData.getCitizenNum());
                    const resources = starData.getResources();
                    log(star.getStarName() + " polgárai elfogyasztottak " + citizennum + " ételt.", "look");
                    resources.food -= citizennum;
                    
                    if(star.getData().getResources().food < 0){
                        //Az éhező emberek meghalnak
                        log(resources.food + " lakos halt éhen " + star.getStarName() + " csillag bolygóin.", "important");
                        star.getData().addCitizens(resources.food);
                        resources.food = 0;
                    }
                    
                    if(starData.getCitizenNum() <= 0){
                        log(star.getStarName() + " csillag utolsó lakója is meghalt.", "important");
                        //TODO Kihalt a csillag
                    }
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function increasePopulation(ownedStars){
            //Népesség növelése / csökkentése
            try{
                for(let starid in ownedStars){
                    const star = ownedStars[starid];
                    const populationChange = counter.countNetPopulationGrowth(starid);
                    log(star.getStarName() + " lakossága megnövekedett " + populationChange + " fővel.", "step");
                    star.getData().addCitizens(populationChange);
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function loadStarTemps(ownedStars){
            //Csillagok aktuális körére vonatkozó adatok
            try{
                for(let starid in ownedStars){
                    const star = ownedStars[starid];
                    const tempData = {};
                    
                    tempData.availableWorkers = Math.floor(star.getData().getCitizenNum());
                    tempData.availableFarmers = counter.countWorkplacesOfStar(starid, "farm");
                    tempData.availableMiners = counter.countWorkplacesOfStar(starid, "mine");
                    tempData.availableFactoryWorkers = counter.countWorkplacesOfStar(starid, "factory");
                    tempData.factoryWorkerLeft = 0;
                    
                    data.putToCache("newroundtemp", starid, tempData);
                    log("StarInfo of " + star.getStarName() + " loaded.", "process");
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function collectRequestsOfStars(stars){
            //A csillagok összes kérelme prioritás szerint rendezve
            try{
                const result = [];
                    for(let starid in stars){
                        const star = stars[starid];
                        const requests = star.getData().getQueueService().getQueue();
                        for(let requestid in requests){
                            result.push(requests[requestid]);
                        }
                    }
                result.sort(function(a, b){return b.getPriority() - a.getPriority()});
                
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function produceFood(ownedStars){
            //Étel termelése azokon a csillagokon, ahol van szabad munkaerő, és szükséges az ételtermelés
            try{
                log("", "look");
                log("Étel termelése a csillagokon a raktárak feltöltéséhez...", "look")
                for(let starid in ownedStars){
                    const star = ownedStars[starid];
                    const starInfo = data.getFromCache("newroundtemp", starid);
                    const maxFridgeStatus = star.getData().getStorageStatus().maxfridgestatus;
                    
                    log("Étel termelése " + star.getStarName() + " csillagon a raktárak feltöltéséhez. (Aktuális telítettség: "
                        + nameConverter.convertFloatNumber(counter.countFridgeStatusOfStar(starid), 2) + " - Cél telítettség: " + maxFridgeStatus + ")", "step");
                        
                    while(starInfo.availableWorkers > 0 && starInfo.availableFarmers > 0 && counter.countFridgeStatusOfStar(starid) < maxFridgeStatus){
                        const produceFoodJobData = {
                            starInfo: starInfo,
                            star: star,
                            income: data.getElementData({source: "farm", key: "income"})
                        }
                        const job = new Job(produceFoodJobData, function(){
                            try{
                                this.data.starInfo.availableFarmers--;
                                this.data.star.getData().getResources().food += this.data.income;
                                log(this.data.income + " étel termelve " + this.data.star.getStarName() + " csillagon.", "look");
                            }catch(err){
                                log("produceFoodJob" + " - " + err.name + ": " + err.message, "error");
                            }
                            
                        });
                        worker.work(star.getOwner(), job, starInfo);
                    }
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function addMoneyForUneployedCitizens(ownedStars){
            //A körben nem dolgozó munkások után pénzegyenleg növelése
            try{
                log("Adó fizetése a nem dolgozó polgárok után...", "look");
                const allPaid = {};
                for(let starid in ownedStars){
                    const star = ownedStars[starid];
                    const starInfo = data.getFromCache("newroundtemp", starid);
                    const income = starInfo.availableWorkers * 2;
                    
                    log(star.getOwner() + " " + income + " pénzt kapott " + star.getStarName() + " csillag lakosai után.", "step");
                    
                    if(allPaid[star.getOwner()] === undefined){
                        allPaid[star.getOwner()] = 0;
                    }
                    allPaid[star.getOwner()] += income;
                    
                    gameData.getPlayerService().getPlayer(star.getOwner()).addMoney(income);
                }
                
                log(allPaid, "complete", "A játékosok a következő mennyiségű pénzt kapták a nem dolgozó polgárok után: ");
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}