function Counter(){
    this.countHouseNum = function countHouseNum(star){
        try{
            return this.countStorageCapacity(star.starid, "house");
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.countPopulationGrowth = function countPopulationGrowth(star, houseNum){
        try{
            houseNum = houseNum || countHouseNum(star);
            const netIncome = this.countNetFoodIncome(star);
            const food = star.data.resources.food;
            const citizennum = star.data.citizennum || 1;
            
            return (netIncome + food / 200) / (citizennum + 1);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.countNetFoodIncome = function countNetFoodIncome(star){
        try{
            const income = this.countFoodIncome(star.starid);
            return income - star.data.citizennum;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.countFoodIncome = function countFoodIncome(starid){
        try{
            const planets = filters.getPlanetsOfStar(starid);
            let result = 0;
                
            for(let planetid in planets){
                const buildings = filters.getBuildingsOfPlanet(planetid);
                
                for(let buildingid in buildings){
                    const building = buildings[buildingid];
                    const buildingData = data.getElementData(building.data.resource);
                    if(buildingData.slot === "food"){
                        result += buildingData.income * buildingData.workplace;
                    }
                }
            }
                
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.countStorageCapacity = function countStorageCapacity(starid, type){
        try{
            const planetids = Object.keys(filters.getPlanetsOfStar(starid));
            const buildings = gameData.buildings;
            let capacity = 0;
            
            for(let buildingid in buildings){
                const building = buildings[buildingid];
                if(building.type == type && planetids.indexOf(building.planetid) > -1){
                    const buildingData = data.getElementData(building.data.resource);
                    capacity += buildingData.capacity;
                }
            }
            
            return capacity;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.countBuildingsOfSlot = function countBuildingsOfSlot(planetid, slot){
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.countDefense = function countDefense(planetid){
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.countResourceIncome = function countResourceIncome(starid){
        try{
            const planets = filters.getPlanetsOfStar(starid);
            let result = 0;
                
            for(let planetid in planets){
                const buildings = filters.getBuildingsOfPlanet(planetid);
                
                for(let buildingid in buildings){
                    const building = buildings[buildingid];
                    const buildingData = data.getElementData(building.data.resource);
                    if(buildingData.slot === "minefield"){
                        result += buildingData.income * buildingData.workplace;
                    }
                }
            }
                
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.countProductivity = function countProductivity(starid){
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}