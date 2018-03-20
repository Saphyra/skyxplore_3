function ResourceProducerService(parent){
    const starSteps = parent
    this.produceResourcesForRequest = produceResourcesForRequest;
    this.getMissingResourcesOfRequest = getMissingResourcesOfRequest;
    this.produceResource = produceResource;
    
    function produceResourcesForRequest(request, star, starInfo){
        //Nyersanyag előállítása a kérelem teljesítéséhez
        try{
            log("Nyersanyagok előállítása a kérelem teljesítéséhez " + star.getStarName() + " csillagon...", "step");
            
            const requestData = request.getData();
            const storage = star.getData().getResources();
            let missingResources = getMissingResourcesOfRequest(requestData);
            log(missingResources, "look", "A kérelem teljesítéséhez a kérelemből hiányzó nyersanyagok: ");
            
            //Nyersanyagok gyűjtése a kérelemhez
            for(let resource in missingResources){
                const missingAmount = collectResourceFromStarStorageAndGetMissingAmount(missingResources, resource, storage, requestData, star);
                
                if(missingAmount){
                    //Hiányzó összetevők legyártása
                    log(resource + " gyártása a kérelem teljesítéséhez indul. Szükséges mennyiség: " + missingAmount, "step");
                    for(let i = 0; i < missingAmount; i++){
                        if(!produceResource(resource, star, starInfo)){
                            break;
                        }
                        log(resource + " elkészült. Hátralévő mennyiség: " + (missingAmount - i - 1), "process");
                    }
                    log(resource + " gyártása a kérelem teljesítéséhez befejeződött.", "step");
                    collectResourceFromStarStorageAndGetMissingAmount(missingResources, resource, storage, requestData, star);
                }
            }
            log("Nyersanyagok előállítása befejezve " + star.getStarName() + " csillagon.", "look");
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function getMissingResourcesOfRequest(requestData){
            //Kérelem teljesítéséhez hiányzó nyersanyagok
            try{
                const result = {};
                
                const resourceRequirements = requestData.resourcerequirements;
                
                for(let resource in resourceRequirements){
                    const missing = getMissingAmountOfResource(requestData, resource);
                    if(missing > 0){
                        log("Hiányzó mennyiség " + resource + " nyersanyagból: " + missing, "process");
                        result[resource] = missing;
                    }
                }
                
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
            function getMissingAmountOfResource(requestData, resource){
                //Egy nyersanyagtípusból hiányzó mennyiség
                try{
                    const resourceRequirements = requestData.resourcerequirements;
                    const storedResources = requestData.storedresources;
                    if(!storedResources[resource]){
                        log("Nincs a kérelem raktárában " + resource + " nyersanyag.", "process");
                        return resourceRequirements[resource];
                    }else if(resourceRequirements[resource] !== storedResources[resource]){
                        return resourceRequirements[resource] - storedResources[resource];
                    }else{
                        log("Rendelkezésre áll a kérelem teljesítéséhez szükséges " + resource, "process");
                        return 0;
                    }
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
            
        function collectResourceFromStarStorageAndGetMissingAmount(missingResources, resource, storage, requestData, star){
            //Kérelemhez szükséges nyersanyag a kérelembe rakodása, visszatérés a hiányzó nyersanyag mennyiség
            try{
                const resourceData = data.getElementData({source: "resource", key: resource});
                let missingAmount = missingResources[resource];
                
                log("Hiányzó mennyiség " + resource + " nyersanyagból: " + missingAmount + " (Építéshez szükséges mennyiség: " + requestData.resourcerequirements[resource] + ")" , "look");
                
                if(storage[resourceData.storage] && storage[resourceData.storage][resource]){
                    //Ha van a raktárban nyersanyag
                    if(storage[resourceData.storage][resource] < missingAmount){
                        //Ha nincs elég
                        const withdrawn = storage[resourceData.storage][resource];
                        missingResources[resource] -= withdrawn;
                        storage[resourceData.storage][resource] = 0;
                        missingAmount = missingResources[resource];
                        
                        //Nyersanyagok eltárolása a kérelembe
                        if(!requestData.storedresources[resource]){
                            requestData.storedresources[resource] = 0;
                        }
                        requestData.storedresources[resource] += withdrawn;
                        
                        log(star.getStarName() + " raktárában nincs elég " + resource + ". Kivett mennyiség: " + withdrawn + ". Hátralevő mennyiség: " + missingAmount, "step");
                    }else{
                        //Ha van elég
                        const withdrawn = missingResources[resource];
                        storage[resourceData.storage][resource] -= withdrawn;
                        
                        //Nyersanyagok eltárolása a kérelembe
                        if(!requestData.storedresources[resource]){
                            requestData.storedresources[resource] = 0;
                        }
                        requestData.storedresources[resource] += withdrawn;
                        
                        missingResources[resource] = 0;
                        missingAmount = 0;
                        
                        log(star.getStarName() + " raktárában van elég " + resource + ". Kivett mennyiség: " + withdrawn + ". Raktárban maradt mennyiség: " + storage[resourceData.storage][resource], "step");
                    }
                }
                
                return missingAmount;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function produceResource(resource, star, starInfo){
            //Nyersanyag előállítása
            try{
                log("", "process");
                log(resource + " előállítása " + star.getStarName() + " csillagon.", "process");
                const resourceData = data.getElementData({source: "resource", key: resource});
                const workerType = getWorkerTypeOf(resourceData.source);
                const storedResources = star.getData().getResources();
                
                //Ha van szabad munkás, és termelői kapacitás
                if(resourceData.material){
                    //Ha további összetevőkre van szükség, összetevők gyártása
                    const materials = resourceData.material;
                    log(materials, "process", resource + " előállításához szükséges összetevők: ");
                    for(let material in materials){
                        const materialData = data.getElementData({source: "resource", key: material});
                        let requiredAmount = materials[material];
                        log(material + " gyűjtése " + resource + " előállításához... (Szükséges mennyiség: " + requiredAmount + ")", "process");
                        
                        let missingAmount;
                        if(storedResources[materialData.storage] && storedResources[resourceData.storage][material]){
                            //Ha van raktáron összetevő
                            if(storedResources[resourceData.storage][material] < requiredAmount){
                                //Ha nincs elég összetevő
                                const storedAmount = storedResources[resourceData.storage][material];
                                missingAmount = requiredAmount - storedAmount;
                                log("Nincs elég " + material + " " + star.getStarName() + " raktárában. Kivett mennyiség: " + storedAmount + ". Legyártandó mennyiség: " + missingAmount, "process");
                            }else{
                                //Ha van elég összetevő
                                const left = storedResources[resourceData.storage][material] - requiredAmount;
                                log("Van elég " + material + " " + star.getStarName() + " raktárában. A raktárban marad: " + left, "process");
                                missingAmount = 0;
                            }
                        }else{
                            //Ha nincs raktáron összetevő
                            missingAmount = requiredAmount;
                            log(star.getStarName() + " raktára nem tartalmaz " + material + "-t. Szükséges mennyiség: " + missingAmount, "process");
                        }
                        
                        if(missingAmount){
                        //Hiányzó összetevők gyártása
                            if(material == "resource"){
                                //Resource-ból egy iterációra 25 készül el, ezért csökkenteni kell a mennyiséget.
                                const income = data.getElementData({source: "mine", key: "income"});
                                missingAmount = Math.ceil(missingAmount / income);
                            }
                        
                            log(material + " előállítása " + star.getStarName() + " csillagon " + resource + " gyártásához. Szükséges mennyiség: " + missingAmount, "process");
                            for(let i = 0; i < missingAmount; i++){
                                if(!produceResource(material, star, starInfo)){
                                    break;
                                }
                                
                                log(material + " elkészült. Hátralévő mennyiség: " + (missingAmount - i - 1), "process");
                            }
                        }
                    }
                    
                    if(allMaterialsAvailable(resourceData.material, storedResources)){
                        //Kísérlet az elkészítésre
                        const workerType = getWorkerTypeOf(resourceData.source);
                        if(reserveWorkersForType(workerType, starInfo, star.getOwner())){
                            //Ha van elég munkaerő a kérelem teljesítéséhez
                            const produceResourceJobData = {
                                resource: resource,
                                resourceData: resourceData,
                                star: star,
                                starInfo: starInfo,
                                workerType: workerType,
                            }
                            const produceResourceJob = new Job(produceResourceJobData, function(){
                                try{
                                    const storedResources = this.data.star.getData().getResources();
                                    const materials = this.data.resourceData.material;
                                    for(let material in materials){
                                        const amount = materials[material];
                                        const materialData = data.getElementData({source: "resource", key: material});
                                        storedResources[materialData.storage][material] -= amount;
                                        log(this.data.star.getStarName() + " raktárából " + amount + " darab " + material + " lett kivéve " + this.data.resource + " előállításához. Hátralevő mennyiség: " + storedResources[materialData.storage][material], "process");
                                    }
                                    
                                    if(storedResources[this.data.resourceData.storage] == undefined){
                                        storedResources[this.data.resourceData.storage] = {};
                                    }
                                    if(storedResources[this.data.resourceData.storage][this.data.resource] == undefined){
                                        storedResources[this.data.resourceData.storage][this.data.resource] = 0;
                                    }
                                    
                                    storedResources[this.data.resourceData.storage][this.data.resource]++;
                                    
                                    log(this.data.resource + " elkészült, és a raktárba került. Raktározott mennyiség: " + storedResources[this.data.resourceData.storage][this.data.resource], "process");
                                }catch(err){
                                    log("produceResourceJob.done - " + err.name + ": " + err.message, "error");
                                }
                            });
                            starSteps.work(star.getOwner(), produceResourceJob, starInfo, false);
                        }else{
                            log("Nincs elegendő munkaerő vagy kapacitás " + resource + " előállításához " + star.getStarName() + " csillagon.", "step");
                            return false;
                        }
                    }else{
                        log("Nem áll rendelkezésre minden összetevő " + resource + " előállításához.", "step");
                        return false;
                    }
                }else if(resource == "resource"){
                    //Ha nincs szükség összetevőkre
                    log(resource + " gyártása a gyárak kiszolgálásához...", "step");
                    if(starInfo.availableWorkers && starInfo.availableMiners){
                        const jobData = {
                            starInfo: starInfo,
                            star: star,
                            resource: resource,
                            resourceData: resourceData
                        };
                        const job = new Job(jobData, function(){
                            this.data.starInfo.availableMiners--;
                            const storedResources = this.data.star.getData().getResources();
                            const income = data.getElementData({source: "mine", key: "income"});
                            
                            if(storedResources[this.data.resourceData.storage] == undefined){
                                storedResources[this.data.resourceData.storage] = {};
                            }
                            if(storedResources[this.data.resourceData.storage][this.data.resource] == undefined){
                                storedResources[this.data.resourceData.storage][this.data.resource] = 0;
                            }
                            
                            storedResources[this.data.resourceData.storage][this.data.resource] += income;
                            log(this.data.resource + " elkészült, és a raktárba került. Raktározott mennyiség: " + storedResources[this.data.resourceData.storage][this.data.resource], "step");
                        });
                        starSteps.work(star.getOwner(), job, starInfo);
                    }else{
                        log("Nincs elegendő munkaerő vagy kapacitás " + resource + " előállításához " + star.getStarName() + " csillagon.", "step");
                        return false;
                    }
                }else{
                    log("produceResource - Unknown resource: " + resource, "error");
                }
                
                return true;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
            function getWorkerTypeOf(source){
                //A megadott forráshoz tartozó változónév
                try{
                    switch(source){
                        case "mine":
                            return "availableMiners";
                        break;
                        case "factory":
                            return "availableFactoryWorkers";
                        break;
                        default:
                            log("getWorkerTypeOf - Unknown source: " + source, "warn");
                        break;
                    }
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
            
            function reserveWorkersForType(workerType, starInfo, playerName){
                //Munkás lefoglalása a termeléshez
                try{
                    switch(workerType){
                        case "availableFactoryWorkers":
                        
                            if(starInfo.factoryWorkerLeft){
                                //Ha van gyármunkás lefoglalva
                                starInfo.factoryWorkerLeft--;
                                
                                log("Van a gyárban munkás, aki munkára vár. Hátralévő munka száma: " + starInfo.factoryWorkerLeft, "process");
                                return true;
                                
                            }else if(starInfo.availableFactoryWorkers && starInfo.availableWorkers){
                                //Ha van lefoglalható munkás
                                
                                const player = gameData.getPlayerService().getPlayer(playerName);
                                
                                if(player.getMoney() > 0){
                                    //Ha van elég pénz a munkára
                                    log("A gyárba új munkást kell rendelni.", "step");
                                    player.spendMoney(1);
                                    starInfo.availableFactoryWorkers--;
                                    starInfo.factoryWorkerLeft = data.getElementData({source: "factory", key: "productivity"});
                                    
                                }else{
                                    //Ha nincs elég pénz a munkára
                                    log("Nincs pénz új munkás gyárba rendelésére.", "process")
                                    player.addMoney(2);
                                }
                                
                                starInfo.availableWorkers--;
                                return reserveWorkersForType(workerType, starInfo, playerName);
                                
                            }else{
                                //Ha nincs elég munkaerő
                                log("Nincs elég munkaerő a gyár munkálatainak elkezdéséhez.", "step");
                                return false;
                            }
                            
                        break;
                        default:
                            log("reserveWorkersForType - Unknown workerType: " + workerType, "warn");
                        break;
                    }
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
            
            function allMaterialsAvailable(requiredResources, storedResources){
                //Igaz, ha raktárban elérhető minden szükséges összetevő
                try{
                    for(let resource in requiredResources){
                        const resourceData = data.getElementData({source: "resource", key: resource});
                        if(!storedResources[resourceData.storage]){
                            log("A raktárban nem található " + resource, "step");
                            return false;
                        }else if(!storedResources[resourceData.storage][resource]){
                            log("A raktárban nem található " + resource, "step");
                            return false;
                        }else if(storedResources[resourceData.storage][resource] < requiredResources[resource]){
                            log("A raktárban nincs elég " + resource + ". Szükséges mennyiség: " + requiredResources[resource] + ". Elérhető mennyiség: " + storedResources[resourceData.storage][resource], "step");
                            return false;
                        }
                    }
                    return true;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
}