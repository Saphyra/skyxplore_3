function StarSteps(){
    const requestProcessor = new RequestProcessor(this);
    const worker = new Worker(this);
        this.work = worker.work;
    
    this.runStarSteps = function runStarSteps(){
        //Csillagok körének a futtatása
        try{
            /*
                0. Ételtermelés, ahol az állapot a limit alatt van
                3. Étel termelés, ahol van szabad munkaerő, és az állapot max limit alatt van.
            */
            
            const ownedStars = gameData.getStarService().getOwnedStars();
            consumeFood(ownedStars);
            increasePopulation(ownedStars);
            loadStarTemps(ownedStars);

            const players = gameData.getPlayerService().getAllPlayers();
            for(let playerName in players){
                const player = players[playerName];
                
                const starsOfPlayer = gameData.getStarService().getStarsOfPlayer(playerName);
                const requests = collectRequestsOfStars(starsOfPlayer);
                
                log(requests, "debug", "All requests of " + playerName + ": ");
                for(let rindex in requests){
                    const request = requests[rindex];
                    requestProcessor.workOnRequest(playerName, request);
                }
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
                for(let starid in ownedStars){
                    const star = ownedStars[starid];
                    
                    const starData = star.getData();
                    const citizennum = starData.getCitizenNum();
                    const resources = starData.getResources();
                    resources.food -= citizennum;
                    
                    if(star.getData().getResources().food < 0){
                        star.getData().addCitizens(resources.food);
                        resources.food = 0;
                    }
                    
                    if(starData.getCitizenNum() <= 0){
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
                    log("PopulationChange at " + star.getStarName() + ": " + populationChange, "debug");
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
                    
                    data.putToCache("newroundtemp", starid, tempData);
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
                    
                    while(starInfo.availableFarmers > 0 && counter.countFridgeStatusOfStar(starid) < maxFridgeStatus){
                        const produceFoodJobData = {
                            starInfo: starInfo,
                            star: star,
                            income: data.getElementData({source: "farm", key: "income"})
                        }
                        const job = new Job(produceFoodJobData, function(){
                            this.data.starInfo.availableFarmers--;
                            this.data.star.getData().getResources().food += this.data.income;
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
                for(let starid in ownedStars){
                    const star = ownedStars[starid];
                    const starInfo = data.getFromCache("newroundtemp", starid);
                    
                    gameData.getPlayerService().getPlayer(star.getOwner()).addMoney(starInfo.availableWorkers * 2);
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}