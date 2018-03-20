function Worker(parent){
    const starSteps = parent;
    
    this.work = function work(playerName, job, starInfo, spendMoney){
        //Munka végrehajtása
        try{
            if(spendMoney === undefined){
                spendMoney = true;
            }
            const player = gameData.getPlayerService().getPlayer(playerName);
            let result = null;
            
            if(starInfo.availableWorkers){
                //Ha van szabad munkás
                if(spendMoney){
                    starInfo.availableWorkers--;
                }
                if(player.getMoney() > 0 || !spendMoney){
                    //Ha van elég pénz a munkára
                    log("Munkavégzés indul...", "process");
                    if(spendMoney){
                        player.spendMoney(1);
                    }
                    result = job.done();
                    log("Munka teljesítve.", "process");
                }else if(spendMoney){
                    //Ha nincs elég pénz a munkára
                    player.addMoney(2);
                    this.work(playerName, job, starInfo, spendMoney)
                    log("Munka pénzhiány miatt elhalasztva. A polgártól adó begyűjtve.", "step");
                }
            }else{
                log("Nincs elegendő munkás a munka elvégzéséhez.", "step");
            }
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}