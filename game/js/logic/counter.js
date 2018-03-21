function Counter(){
    this.countPopulationGrowth = function countPopulationGrowth(starid){
        //Népességnövekedés kiszámolása
        try{
            const star = gameData.getStarService().getStarById(starid);
            const netIncome = this.countNetFoodIncome(starid);
            const food = star.getData().getResources().food;
            const citizennum = star.getData().getCitizenNum();
            
            return (netIncome + food / 20) / (citizennum + 1);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countNetPopulationGrowth = function countNetPopulationGrowth(starid){
        //Tényleges népességnövekedés kiszámítása
        try{
            const star = gameData.getStarService().getStarById(starid);
            const citizennum = star.getData().getCitizenNum();
            const growth = this.countPopulationGrowth(starid);
            const place = this.countStorageCapacity(starid, "house");
            
            const emptyPlace = place - citizennum;
            
            if(emptyPlace <= growth){
                return emptyPlace;
            }else{
                return growth;
            }
            
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countNetFoodIncome = function countNetFoodIncome(starid){
        //Nettó élelmiszertermelés kiszámolása
        try{
            const star = gameData.getStarService().getStarById(starid);
            const income = this.countFoodIncome(starid);
            return income - Math.floor(star.getData().getCitizenNum());
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countFoodIncome = function countFoodIncome(starid){
        //Teljes élelmiszertermelés kiszámolása
        try{
            let result = 0;
            const farms = gameData.getBuildingService().getBuildingsOfTypeOfStar(starid, "farm", false);
            const income = data.getElementData({source: "farm", key: "income"});
                
            for(let buildingid in farms){
                const farm = farms[buildingid];
                const buildingData = data.getElementData(farm.getData().resource);
                result += income * buildingData.workplace;
            }
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countStorageCapacity = function countStorageCapacity(starid, type){
        //Tárolókapacitás kiszámolása
        try{
            const planetids = Object.keys(gameData.getPlanetService().getPlanetsOfStar(starid));
            const buildings = gameData.getBuildingService().getAllBuildings();
            let capacity = 0;
            
            for(let buildingid in buildings){
                const building = buildings[buildingid];
                if(building.getType() == type && planetids.indexOf(building.getPlanetId()) > -1 && building.getData().status === 0){
                    const buildingData = data.getElementData(building.getData().resource);
                    
                    capacity += buildingData.capacity;
                }
            }
            
            return capacity;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countBuildingsOfSlot = function countBuildingsOfSlot(planetid, slot){
        //Bolygó slot épületeinek megszámolása
        try{
            let result = 0;
            const buildings = gameData.getBuildingService().getBuildingsOfPlanet(planetid);
                        
            for(let buildingid in buildings){
                const building = buildings[buildingid];
                const buildingData = data.getElementData(building.getData().resource);
                if(buildingData.slot === slot){
                    result++;
                }
            }
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countDefenseOfPlanet = function countDefenseOfPlanet(planetid){
        //Bolygó védelmi rendszerének száma
        try{
            let result = 0;
            
            const defenses = gameData.defenses;
            
            for(let defenseid in defenses){
                const defense = defenses[defenseid];
                if(defense.planetid == planetid){
                    result++;
                }
            }
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countResourceIncome = function countResourceIncome(starid){
        //Bányák termelése
        try{
            const planets = gameData.getPlanetService().getPlanetsOfStar(starid);
            const income = data.getElementData({source: "mine", key: "income"});
            let result = 0;
                
            for(let planetid in planets){
                const buildings = gameData.getBuildingService().getBuildingsOfPlanet(planetid);
                
                for(let buildingid in buildings){
                    const building = buildings[buildingid];
                    const buildingData = data.getElementData(building.getData().resource);
                    if(buildingData.type === "mine" && building.getData().status === 0){
                        result += income * buildingData.workplace;
                    }
                }
            }
                
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countProductivity = function countProductivity(starid){
        //Gyárak termelése
        try{
            const planets = gameData.getPlanetService().getPlanetsOfStar(starid);
            const productivity = data.getElementData({source: "factory", key: "productivity"});
            let result = 0;
                
            for(let planetid in planets){
                const buildings = gameData.getBuildingService().getBuildingsOfPlanet(planetid);
                
                for(let buildingid in buildings){
                    const building = buildings[buildingid];
                    if(building.getType() === "factory" && building.getData().status === 0){
                        const buildingData = data.getElementData(building.getData().resource);
                        result += productivity * buildingData.workplace;
                    }
                }
            }
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countFridgeStatusOfStar = function countFridgeStatusOfStar(starid){
        //Hűtőház telítettségének kiszámolása
        try{
            const star = gameData.getStarService().getStarById(starid);
            const capacity = this.countStorageCapacity(starid, "fridge");
            const food = star.getData().getResources().food;
            
            const result = food / capacity * 100;
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countDepotStatusOfStar = function countDepotStatusOfStar(starid){
        //Depó telítettségének kiszámolása
        try{
            const storedResources = gameData.getStarService().getStarById(starid).getData().getResources().depot;
            const storedAmount = this.countResourceNumOfList(storedResources);
            const capacity = this.countStorageCapacity(starid, "depot");
            
            const result = storedAmount / capacity * 100;
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countWorkplacesOfStar = function countWorkplacesOfStar(starid, type){
        //Az adott csillaghoz és épülethez tartozó munkahelyek
        try{
            let result = 0;
                const buildings = gameData.getBuildingService().getBuildingsOfStar(starid);
                for(let buildingid in buildings){
                    const building = buildings[buildingid];
                    if(building.getType() == type && building.getData().status === 0){
                        const buildingData = data.getElementData(building.getData().resource);
                        result += buildingData.workplace;
                    }
                }
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countResourceNumOfList = function countResourceNumOfList(resources){
        //Nyersanyagok listájábban szereplő nyersanyagok összege
        try{
            let result = 0;
                for(let resource in resources){
                    result += resources[resource];
                }
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}