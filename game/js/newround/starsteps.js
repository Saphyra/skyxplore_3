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

            const players = gameData.getPlayerService().getAllPlayers();
            for(let playerName in players){
                log(playerName + " körének feldolgozása...", "warn");
                const player = players[playerName];
                
                const starsOfPlayer = gameData.getStarService().getStarsOfPlayer(playerName);
                const requests = collectRequestsOfStars(starsOfPlayer);
                log(requests, "debug", playerName + " kérelmei: ");
                
                for(let rindex in requests){
                    const request = requests[rindex];
                    requestProcessor.workOnRequest(playerName, request, requests);
                }
                
                log(playerName + " körének feldolgozása befejeződött.", "warn");
            }
            
            produceFood(ownedStars);
            addMoneyForUneployedCitizens(ownedStars);
            back.showMap();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
        function consumeFood(ownedStars){
            //Étel fogyasztás
            try{
                log("Lakosság etetése...", "warn");
                for(let starid in ownedStars){
                    const star = ownedStars[starid];
                    
                    const starData = star.getData();
                    const citizennum = starData.getCitizenNum();
                    const resources = starData.getResources();
                    log(star.getStarName() + " polgárai elfogyasztottak " + citizennum + " ételt.", "debug");
                    resources.food -= citizennum;
                    
                    if(star.getData().getResources().food < 0){
                        //Az éhező emberek meghalnak
                        log(resources.food + " lakos halt éhen " + star.getStarName() + " csillag bolygóin.", "warn");
                        star.getData().addCitizens(resources.food);
                        resources.food = 0;
                    }
                    
                    if(starData.getCitizenNum() <= 0){
                        log(star.getStarName() + " csillag utolsó lakója is meghalt.", "warn");
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
                    log(star.getStarName() + " lakossága megnövekedett " + populationChange + " fővel.", "debug");
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
                    
                    tempData.availableWorkers = star.getData().getCitizenNum();
                    tempData.availableFarmers = counter.countWorkplacesOfStar(starid, "farm");
                    tempData.availableMiners = counter.countWorkplacesOfStar(starid, "mine");
                    tempData.availableFactoryWorkers = counter.countWorkplacesOfStar(starid, "factory");
                    tempData.factoryWorkerLeft = 0;
                    
                    data.putToCache("newroundtemp", starid, tempData);
                    log("StarInfo of " + star.getStarName() + " loaded.", "debug");
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
                for(let starid in ownedStars){
                    const star = ownedStars[starid];
                    const starInfo = data.getFromCache("newroundtemp", starid);
                    const maxFridgeStatus = star.getData().getStorageStatus().maxfridgestatus;
                    
                    log("Étel termelése " + star.getStarName() + " csillagon a raktárak feltöltéséhez. (Aktuális telítettség: "
                        + nameConverter.convertFloatNumber(counter.countFridgeStatusOfStar(starid), 0) + " - Cél telítettség: " + maxFridgeStatus + ")", "warn");
                    
                    while(starInfo.availableFarmers > 0 && counter.countFridgeStatusOfStar(starid) < maxFridgeStatus){
                        const produceFoodJobData = {
                            starInfo: starInfo,
                            star: star,
                            income: data.getElementData({source: "farm", key: "income"})
                        }
                        const job = new Job(produceFoodJobData, function(){
                            this.data.starInfo.availableFarmers--;
                            this.data.star.getData().getResources().food += this.data.income;
                            log(this.data.income + " étel termelve " + this.data.star.getStarName() + " csillagon.", "debug");
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
                log("Adó fizetése a nem dolgozó polgárok után...", "warn");
                const allPaid = {};
                for(let starid in ownedStars){
                    const star = ownedStars[starid];
                    const starInfo = data.getFromCache("newroundtemp", starid);
                    const income = starInfo.availableWorkers * 2;
                    
                    log(star.getOwner() + " " + income + " pénzt kapott " + star.getStarName() + " csillag lakosai után.", "debug");
                    
                    if(allPaid[star.getOwner()] === undefined){
                        allPaid[star.getOwner()] = 0;
                    }
                    allPaid[star.getOwner()] += income;
                    
                    gameData.getPlayerService().getPlayer(star.getOwner()).addMoney(income);
                }
                
                log(allPaid, "warn", "A játékosok a következő mennyiségű pénzt kapták a nem dolgozó polgárok után: ");
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}