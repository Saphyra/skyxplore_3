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
            
            const ownedStars = filters.getOwnedStars();
            increasePopulation(ownedStars);
            loadStarTemps(ownedStars);

            for(let playerName in gameData.players){
                const player = gameData.players[playerName];
                const requests = order.orderRequestsByPriority(filters.getRequestsOfPlayer(playerName));
                log(requests, "debug", "All requests of " + playerName + ": ");
                for(let rindex in requests){
                    const request = requests[rindex];
                    requestProcessor.workOnRequest(playerName, request);
                }
            }
            
            addMoneyForUneployedCitizens(ownedStars);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
        
        function increasePopulation(ownedStars){
            //Népesség növelése / csökkentése
            try{
                for(let sindex in ownedStars){
                    const star = ownedStars[sindex];
                
                    const populationChange = counter.countNetPopulationGrowth(star.starid);
                    log("PopulationChange at " + star.starname + ": " + populationChange, "debug");
                    star.data.citizennum += populationChange;
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function loadStarTemps(ownedStars){
            //Csillagok aktuális körére vonatkozó adatok
            try{
                for(let sindex in ownedStars){
                    const star = ownedStars[sindex];
                    const tempData = {};
                    
                    tempData.availableWorkers = star.data.citizennum;
                    tempData.availableFarmers = counter.countWorkplacesOfStar(star.starid, "farm");
                    
                    data.putToCache("newroundtemp", star.starid, tempData);
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function addMoneyForUneployedCitizens(ownedStars){
            //A körben nem dolgozó munkások után pénzegyenleg növelése
            try{
                for(let sindex in ownedStars){
                    const star = ownedStars[sindex];
                    const starInfo = data.getFromCache("newroundtemp", star.starid);
                    
                    gameData.players[star.owner].money += starInfo.availableWorkers * 2;
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}