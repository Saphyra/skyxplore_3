function Worker(parent){
    const starSteps = parent;
    
    this.work = function work(playerName, job, starInfo){
        //Munka végrehajtása
        try{
            const player = gameData.players[playerName];
            
            if(starInfo.availableWorkers){
                starInfo.availableWorkers--;
                if(player.money > 0){
                    player.money--;
                    job.done();
                }else{
                    player.money += 2;
                }
            }
            
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}