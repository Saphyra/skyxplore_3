function StarSteps(){
    this.runStarSteps = function runStarSteps(){
        //Csillagok körének a futtatása
        try{
            /*
                0. Ételtermelés, ahol az állapot a limit alatt van
                1. Összes request összegyűjtése minden csillagról
                2. Requestek sorba rendezése prioritás szerint
                3. Étel termelés, ahol van szabad munkaerő, és az állapot max limit alatt van.
            */
            
            const ownedStars = filters.getOwnedStars();
            increasePopulation(ownedStars);

            for(let playerName in gameData.players){
                const player = gameData.players[playerName];
                const requests = order.orderRequestsByPriority(filters.getRequestsOfPlayer(playerName));
                log(requests, "debug", "All requests of " + playerName + ": ");
            }
            
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
}