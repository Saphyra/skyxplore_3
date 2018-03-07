function Counter(){    
    this.countPopulationGrowth = function countPopulationGrowth(star){
        //Népességnövekedés kiszámolása
        try{
            const netIncome = this.countNetFoodIncome(star);
            const food = star.data.resources.food;
            const citizennum = star.data.citizennum || 1;
            
            return (netIncome + food / 200) / (citizennum + 1);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countNetFoodIncome = function countNetFoodIncome(star){
        //Nettó élelmiszertermelés kiszámolása
        try{
            const income = this.countFoodIncome(star.starid);
            return income - star.data.citizennum;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.countFoodIncome = function countFoodIncome(starid){
        //Teljes élelmiszertermelés kiszámolása
        try{
            const planets = filters.getPlanetsOfStar(starid);
            let result = 0;
                
            for(let planetid in planets){
                const buildings = filters.getBuildingsOfPlanet(planetid);
                
                for(let buildingid in buildings){
                    const building = buildings[buildingid];
                    const buildingData = data.getElementData(building.data.resource);
                    if(buildingData.slot === "food" && building.data.status === 0){
                        result += buildingData.income * buildingData.workplace;
                    }
                }
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
    
    this.countDefense = function countDefense(planetid){
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
            let result = 0;
                
            for(let planetid in planets){
                const buildings = filters.getBuildingsOfPlanet(planetid);
                
                for(let buildingid in buildings){
                    const building = buildings[buildingid];
                    const buildingData = data.getElementData(building.data.resource);
                    if(buildingData.slot === "minefield" && building.data.status === 0){
                        result += buildingData.income * buildingData.workplace;
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
            let result = 0;
                
            for(let planetid in planets){
                const buildings = filters.getBuildingsOfPlanet(planetid);
                
                for(let buildingid in buildings){
                    const building = buildings[buildingid];
                    if(building.type === "factory"){
                        const buildingData = data.getElementData(building.data.resource);
                        result += buildingData.productivity * buildingData.workplace;
                    }
                }
            }
                
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}