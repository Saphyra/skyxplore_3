function ResourceProducerService(parent){
    const starSteps = parent
    this.produceResourcesForRequest = produceResourcesForRequest;
    this.getMissingResourcesOfRequest = getMissingResourcesOfRequest;
    this.produceResource = produceResource;
    
    function produceResourcesForRequest(request, star, starInfo){
        //Nyersanyag előállítása a kérelem teljesítéséhez
        try{
            log("Nyersanyagok előállítása a kérelem teljesítéséhez " + star.getStarName() + " csillagon...", "warn");
            
            const requestData = request.getData();
            const storage = star.getData().getResources();
            let missingResources = getMissingResourcesOfRequest(requestData);
            log(missingResources, "debug", "A kérelem teljesítéséhez a kérelemből hiányzó nyersanyagok: ");
            
            for(let resource in missingResources){
                const resourceData = data.getElementData({source: "resource", key: resource});
                let missingAmount = missingResources[resource];
                
                log("Szükséges mennyiség " + resource + " nyersanyagból: " + missingAmount + " (Építéshez szükséges mennyiség: " + requestData.resourcerequirements[resource] + ")" , "debug");
                
                if(storage[resourceData.storage] && storage[resourceData.storage][resource]){
                    //Ha van a raktárban nyersanyag
                    if(storage[resourceData.storage][resource] < missingAmount){
                        //Ha nincs elég
                        missingResources[resource] -= storage[resourceData.storage][resource];
                        const withdrawn = storage[resourceData.storage][resource];
                        storage[resourceData.storage][resource] = 0;
                        missingAmount = missingResources[resource];
                        log(star.getStarName() + " raktárában nincs elég " + resource + ". Kivett mennyiség: " + withdrawn + ". Hátralevő mennyiség: " + missingAmount, "debug");
                    }else{
                        //Ha van elég
                        storage[resourceData.storage][resource] -= missingResources[resource];
                        log(star.getStarName() + " raktárában van elég " + resource + ". Kivett mennyiség: " + missingResources[resource] + ". Raktárban maradt mennyiség: " + storage[resourceData.storage][resource], "debug");
                        missingResources[resource] = 0;
                        missingAmount = 0;
                    }
                }
                
                if(missingAmount){
                    log(resource + " gyártása a kérelem teljesítéséhez indul.", "warn");
                    for(let i = 0; i < missingAmount; i++){
                        produceResource(resource, star, starInfo);
                    }
                    log(resource + " gyártása a kérelem teljesítéséhez befejeződött.", "warn");
                }
            }
            
            log("Nyersanyagok előállítása befejezve " + star.getStarName() + " csillagon.", "warn");
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
                    log("Hiányzó mennyiség " + resource + " nyersanyagból: " + missing, "debug", "getMissingResourcesOfRequest - ");
                    if(missing > 0){
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
                        log("Nincs a kérelem raktárában " + resource + " nyersanyag.", "debug", "getMissingAmountOfResource - ");
                        return resourceRequirements[resource];
                    }else if(resourceRequirements[resource] !== storedResources[resource]){
                        return resourceRequirements[resource] - storedResources[resource];
                    }else{
                        log("Rendelkezésre áll a kérelem teljesítéséhez szükséges " + resource, "debug", "getMissingAmountOfResource - ");
                        return 0;
                    }
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
        
        function produceResource(resource, star, starInfo){
            //Nyersanyag előállítása
            try{
                log(resource + " előállítása " + star.getStarName() + " csillagon.", "message");
                const resourceData = data.getElementData({source: "resource", key: resource});
                const workerType = getWorkerTypeOf(resourceData.source);
                const storedResources = star.getData().getResources();
                
                if(starInfo.availableWorkers && starInfo[workerType]){
                    //Ha van szabad munkás, és termelői kapacitás
                    if(resourceData.material){
                        //Ha további összetevőkre van szükség, összetevők gyártása
                        const materials = resourceData.material;
                        log(materials, "debug", resource + " előállításához szükséges összetevők: ");
                        for(let material in materials){
                            const materialData = data.getElementData({source: "resource", key: material});
                            let requiredAmount = materials[material];
                            log(material + " gyűjtése " + resource + " előállításához... (Szükséges mennyiség: " + requiredAmount + ")", "debug");
                            
                            let missingAmount;
                            if(storedResources[materialData.storage] && storedResources[resourceData.storage][material]){
                                //Ha van raktáron összetevő
                                if(storedResources[resourceData.storage][material] < requiredAmount){
                                    //Ha nincs elég összetevő
                                    const storedAmount = storedResources[resourceData.storage][material];
                                    missingAmount = requiredAmount - storedAmount;
                                    log("Nincs elég " + material + " " + star.getStarName() + " raktárában. Kivett mennyiség: " + storedAmount + ". Legyártandó mennyiség: " + missingAmount, "debug");
                                }else{
                                    //Ha van elég összetevő
                                    const left = storedResources[resourceData.storage][material] - requiredAmount;
                                    log("Van elég " + material + " " + star.getStarName() + " raktárában. A raktárban marad: " + left, "debug");
                                    missingAmount = 0;
                                }
                            }else{
                                //Ha nincs raktáron összetevő
                                missingAmount = requiredAmount;
                                log(star.getStarName() + " raktára nem tartalmaz " + material + "-t. Szükséges mennyiség: " + missingAmount, "debug");
                            }
                            
                            if(missingAmount){
                            //Hiányzó összetevők gyártása
                                log(material + " előállítása " + star.getStarName() + " csillagon " + resource + " gyártásához. Szükséges mennyiség: " + missingAmount, "message");
                                for(let i = 0; i < missingAmount; i++){
                                    produceResource(material, star, starInfo);
                                }
                            }
                        }
                        
                        if(allMaterialsAvailable(resourceData.material, storedResources)){
                            //Kísérlet az elkészítésre
                            const materials = resourceData.material;
                            for(let material in materials){
                                const amount = materials[material];
                                const materialData = data.getElementData({source: "resource", key: material});
                                storedResources[materialData.storage][material] -= amount;
                                log(star.getStarName() + " raktárából " + amount + " darab " + material + " lett kivéve " + resource + " előállításához. Hátralevő mennyiség: " + storedResources[materialData.storage][material], "debug");
                            }
                            
                            if(storedResources[resourceData.storage] == undefined){
                                storedResources[resourceData.storage] = {};
                            }
                            if(storedResources[resourceData.storage][resource] == undefined){
                                storedResources[resourceData.storage][resource] = 0;
                            }
                            storedResources[resourceData.storage][resource]++;
                            log(resource + " elkészült, és a raktárba került. Raktározott mennyiség: " + storedResources[resourceData.storage][resource], "warn");
                        }else{
                            log("Nem áll rendelkezésre minden összetevő " + resource + " előállításához.", "warn");
                        }
                    }else{
                        //Ha nincs szükség összetevőkre
                        const jobData = {};
                        const job = new Job(jobData, function(){
                            log("Resource mined", "debug");
                        });
                        starSteps.work(star.getOwner(), job, starInfo);
                    }
                }else{
                    log("Nincs elegendő munkaerő vagy kapacitás " + resource + " előállításához " + star.getStarName() + " csillagon.", "debug");
                }
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
                            log("getWorkerTypeOf - Unknow source: " + source, "warn");
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
                        if(!storedResources[resourceData.storage] || !storedResources[resourceData.storage][resource] || !!storedResources[resourceData.storage][resource] < requiredResources[resource]){
                            return false;
                        }
                    }
                    return true;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
}