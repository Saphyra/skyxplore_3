function Counter(){    
    this.countPopulationGrowth = function countPopulationGrowth(starid){
        //Népességnövekedés kiszámolása
        try{
            const star = gameData.stars[starid];
            const netIncome = this.countNetFoodIncome(starid);
            const food = star.data.resources.food;
            const citizennum = star.data.citizennum;
            
            return (netIncome + food / 200) / (citizennum + 1);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countNetPopulationGrowth = function countNetPopulationGrowth(starid){
        //Tényleges népességnövekedés kiszámítása
        try{
            const star = gameData.stars[starid];
            const citizennum = star.data.citizennum;
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
            const star = gameData.stars[starid];
            const income = this.countFoodIncome(starid);
            return income - star.data.citizennum;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countFoodIncome = function countFoodIncome(starid){
        //Teljes élelmiszertermelés kiszámolása
        try{
            let result = 0;
            const farms = filters.getBuildingsOfTypeOfStar(starid, "farm", false);
            const income = data.getElementData({source: "farm", key: "income"});
                
            for(let findex in farms){
                const farm = farms[findex];
                const buildingData = data.getElementData(farm.data.resource);
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
            const planetids = Object.keys(filters.getPlanetsOfStar(starid));
            const buildings = gameData.buildings;
            let capacity = 0;
            
            for(let buildingid in buildings){
                const building = buildings[buildingid];
                if(building.type == type && planetids.indexOf(building.planetid) > -1 && building.data.status === 0){
                    const buildingData = data.getElementData(building.data.resource);
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
            const buildings = filters.getBuildingsOfPlanet(planetid);
                        
            for(let buildingid in buildings){
                const building = buildings[buildingid];
                const buildingData = data.getElementData(building.data.resource);
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
            const planets = filters.getPlanetsOfStar(starid);
            const income = data.getElementData({source: "mine", key: "income"});
            let result = 0;
                
            for(let planetid in planets){
                const buildings = filters.getBuildingsOfPlanet(planetid);
                
                for(let buildingid in buildings){
                    const building = buildings[buildingid];
                    const buildingData = data.getElementData(building.data.resource);
                    if(buildingData.slot === "minefield" && building.data.status === 0){
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
            const planets = filters.getPlanetsOfStar(starid);
            const productivity = data.getElementData({source: "factory", key: "productivity"});
            let result = 0;
                
            for(let planetid in planets){
                const buildings = filters.getBuildingsOfPlanet(planetid);
                
                for(let buildingid in buildings){
                    const building = buildings[buildingid];
                    if(building.type === "factory"){
                        const buildingData = data.getElementData(building.data.resource);
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
            const star = gameData.stars[starid];
            const capacity = this.countStorageCapacity(starid, "fridge");
            const food = star.data.resources.food;
            
            const result = food / capacity * 100;
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countWorkplacesOfStar = function countWorkplacesOfStar(starid, type){
        //Az adott csillaghoz és épülethez tartozó munkahelyek
        try{
            let result = 0;
                const buildings = filters.getBuildingsOfStar(starid);
                for(let buildingid in buildings){
                    const building = buildings[buildingid];
                    if(building.type == type && building.data.status === 0){
                        const buildingData = data.getElementData(building.data.resource);
                        result += buildingData.workplace;
                    }
                }
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}