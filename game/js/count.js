function countHouseNum(star){
    try{
        let num = 0;
        for(let buildingid in gameData.buildings){
            const building = gameData.buildings[buildingid];
            if(building.type === "house" && gameData.planets[building.planetid].starid === star.starid){
                const buildingData = getElementData(building.data.resource);
                num += buildingData.capacity;
            }
        }
        return num;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function countPopulationGrowth(star){
    try{
        return "populationgrowth";
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function countNetFoodIncome(star){
    try{
        return "netfoodincome";
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}