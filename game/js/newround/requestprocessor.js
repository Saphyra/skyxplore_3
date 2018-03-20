function RequestProcessor(parent){
    const starSteps = parent;
    const resourceProducer = new ResourceProducerService(starSteps);
    this.workOnRequest = function workOnRequest(playerName, request, requests){
        //Kérelmek teljesítése
        try{
            const star = gameData.getStarService().getStarById(request.getStarId());
            const starInfo = data.getFromCache("newroundtemp", star.getStarId());
            
            if(starInfo.availableWorkers){
                //Ha vannak a csillagon szabad munkások
                log("Kísérlet a kérelem teljesítésére " + star.getStarName() + " csillagon...", "warn");
                
                if(isFoodProductionMoreImportant(star, starInfo, request)){
                    //Ha az ételtermelés prioritása nagyobb, mint a kérelemé, és túl kevés a raktározott kaja
                    log("Kevés az élelem! Munkás átirányítása a farmokra...", "debug");
                    
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
                    
                    starSteps.work(playerName, job, starInfo);
                    
                    log("Kérelem újra feladása " + star.getStarName() + " csillagon.", "warn");
                    this.workOnRequest(playerName, request);
                }else{
                    //Ha a kérelem kerül sorra...
                    log("Kérelem teljesítése " + star.getStarName() + " csillagon...", "warn");
                    
                    if(request.getStatus() == "collectresources"){
                        resourceProducer.produceResourcesForRequest(request, star, starInfo);
                        //TODO change status if all resources are ready
                    }
                    
                    log("Kérelem feldolgozva " + star.getStarName() + " csillagon.", "warn");
                }
                
                log("Kérelem feldolgozása befejezve " + star.getStarName() + " csillagon.", "warn");
            }else{
                log("Nincs elég munkás a kérelem teljesítése " + star.getStarName() + " csillagon...", "warn");
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function isFoodProductionMoreImportant(star, starInfo, request){
            /*Fontosabb-e az étel termelése, mint a kérelem teljesítése
                Igaz, ha
                    - Van farm kapacitás
                    - A kajatermelés prioritása nagyobb, mint a kérelemé
                    - Az aktuális ételmennyiség kisebb, mint a minimum
            */
            try{
                const availableFarmers = (starInfo.availableFarmers > 0);
                const priority = (star.getData().getFoodProductionPriority() > request.getPriority());
                
                if(availableFarmers && priority){
                    const fridgeStatus = counter.countFridgeStatusOfStar(star.getStarId());
                    if(fridgeStatus < star.getData().getStorageStatus().minfridgestatus){
                        return true;
                    }
                }
                return false;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}