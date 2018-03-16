function RequestProcessor(parent){
    const starSteps = parent;
    this.workOnRequest = function workOnRequest(playerName, request){
        //Kérelmek teljesítése
        try{
            const star = gameData.stars[request.starid];
            const starInfo = data.getFromCache("newroundtemp", star.starid);
            
            if(starInfo.availableWorkers){
                //Ha vannak a csillagon szabad munkások
                if(isFoodProductionMoreImportant(star, starInfo, request)){
                    //Ha az ételtermelés prioritása nagyobb, mint a kérelemé, és túl kevés a raktározott kaja
                    const produceFoodJobData = {
                        starInfo: starInfo,
                        star: star,
                        income: data.getElementData({source: "farm", key: "income"})
                    }
                    const job = new Job(produceFoodJobData, function(){
                        this.data.starInfo.availableFarmers--;
                        this.data.star.data.resources.food += this.data.income;
                    });
                    starSteps.work(playerName, job, starInfo);
                }
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
            const availableFarmers = (starInfo.availableFarmers > 0);
            const priority = (star.data.foodproductionpriority > request.priority);
            
            if(availableFarmers && priority){
                const fridgeStatus = counter.countFridgeStatusOfStar(star.starid);
                if(fridgeStatus < star.data.storagestatus.minfridgestatus){
                    return true;
                }
            }
            return false;
        }
}