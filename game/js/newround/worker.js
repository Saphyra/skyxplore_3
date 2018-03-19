function Worker(parent){
    const starSteps = parent;
    
    this.work = function work(playerName, job, starInfo){
        //Munka végrehajtása
        try{
            const player = gameData.getPlayerService().getPlayer(playerName);
            let result = null;
            
            if(starInfo.availableWorkers){
                //Ha van szabad munkás
                starInfo.availableWorkers--;
                if(player.getMoney() > 0){
                    //Ha van elég pénz a munkára
                    log("Munkavégzés indul...", "debug");
                    player.spendMoney(1);
                    result = job.done();
                    log("Munka teljesítve.", "debug");
                }else{
                    player.addMoney(2);
                    log("Munka pénzhiány miatt elhalasztva. A polgártól adó begyujtve.", "debug");
                }
            }else{
                log("Nincs elegendo munkás a munka elvégzéséhez.", "debug");
            }
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}