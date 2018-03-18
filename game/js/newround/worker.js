function Worker(parent){
    const starSteps = parent;
    
    this.work = function work(playerName, job, starInfo){
        //Munka végrehajtása
        try{
            const player = gameData.getPlayerService().getPlayer(playerName);
            
            if(starInfo.availableWorkers){
                //Ha van szabad munkás
                starInfo.availableWorkers--;
                if(player.getMoney() > 0){
                    //Ha van elég pénz a munkára
                    player.spendMoney(1);
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