function countHouseNum(star){
    try{
        return countStorageCapacity(star.starid, "house");
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function countPopulationGrowth(star, houseNum){
    try{
        houseNum = houseNum || countHouseNum(star);
        const netIncome = countNetFoodIncome(star);
        const food = star.data.resources.food;
        const citizennum = star.data.citizennum || 1;
        
        return (netIncome + food / 200) / (citizennum + 1);
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function countNetFoodIncome(star){
    try{
        const income = countFoodIncome(star.starid);
        return income - star.data.citizennum;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

    function countFoodIncome(starid){
        try{
            const planets = getPlanetsOfStar(starid);
            let result = 0;
                
            for(let planetid in planets){
                const buildings = getBuildingsOfPlanet(planetid);
                
                for(let buildingid in buildings){
                    const building = buildings[buildingid];
                    const buildingData = getElementData(building.data.resource);
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
    
function countStorageCapacity(starid, type){
    try{
        const planetids = Object.keys(getPlanetsOfStar(starid));
        const buildings = gameData.buildings;
        let capacity = 0;
        
        for(let buildingid in buildings){
            const building = buildings[buildingid];
            if(building.type == type && planetids.indexOf(building.planetid) > -1){
                const buildingData = getElementData(building.data.resource);
                capacity += buildingData.capacity;
            }
        }
        
        return capacity;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function countFarms(planetid){
    try{
        let result = 0;
        const buildings = getBuildingsOfPlanet(planetid);
                    
        for(let buildingid in buildings){
            const building = buildings[buildingid];
            const buildingData = getElementData(building.data.resource);
            if(buildingData.slot === "food"){
                result++;
            }
        }
        return result;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function countMinefields(planetid){
    try{
        let result = 0;
        const buildings = getBuildingsOfPlanet(planetid);
                    
        for(let buildingid in buildings){
            const building = buildings[buildingid];
            const buildingData = getElementData(building.data.resource);
            if(buildingData.slot === "minefield"){
                result++;
            }
        }
        return result;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function countBuildings(planetid){
    try{
        let result = 0;
        const buildings = getBuildingsOfPlanet(planetid);
                    
        for(let buildingid in buildings){
            const building = buildings[buildingid];
            const buildingData = getElementData(building.data.resource);
            if(buildingData.slot === "building"){
                result++;
            }
        }
        return result;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function countDefense(planetid){
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

function countResourceIncome(starid){
    try{
        const planets = getPlanetsOfStar(starid);
        let result = 0;
            
        for(let planetid in planets){
            const buildings = getBuildingsOfPlanet(planetid);
            
            for(let buildingid in buildings){
                const building = buildings[buildingid];
                const buildingData = getElementData(building.data.resource);
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

function countProductivity(starid){
    try{
        const planets = getPlanetsOfStar(starid);
        let result = 0;
            
        for(let planetid in planets){
            const buildings = getBuildingsOfPlanet(planetid);
            
            for(let buildingid in buildings){
                const building = buildings[buildingid];
                if(building.type === "factory"){
                    const buildingData = getElementData(building.data.resource);
                    result += buildingData.productivity * buildingData.workplace;
                }
            }
        }
            
        return result;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}