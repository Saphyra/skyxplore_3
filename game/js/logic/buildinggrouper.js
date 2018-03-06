function BuildingGrouper(){
    
}

BuildingGrouper.prototype.groupBuildingsByRole = function groupBuildingsByRole(star){
    //Épületek csoportosítása szerep szerint (gazdaság/Ipar), épületek csoportosítása típus szerint, épületek sorba rendezése név szerint
    try{
        const buildings = gameData.buildings;
        const grouped = {industry: {}, economy: {}};
        const result = {industry: {}, economy: {}};
        
        //Épületek csoportosítása szerep szerint
        for(let buildingid in buildings){
            const building = gameData.buildings[buildingid]
            if(gameData.planets[building.planetid].starid === star.starid){
                const buildingData = data.getElementData(building.data.resource);
                switch(buildingData.role){
                    case "industry":
                        grouped.industry[buildingid] = {building: building, buildingData: buildingData};
                    break;
                    case "economy":
                        grouped.economy[buildingid] = {building: building, buildingData: buildingData};
                    break;
                    default:
                        log("Unknown role: " + buildingData.role + " at: " + buildingData.resource.source + " - " + buildingData.resource.key);
                    break;
                }
            }
        }
        
        //Épületek csoportosítása típus szerint, sorba rendezése név szerint
        result.industry = order.orderBuildingsByName(this.groupBuildingsByType(grouped.industry));
        result.economy = order.orderBuildingsByName(this.groupBuildingsByType(grouped.economy));
        
        return result;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
    }
}
BuildingGrouper.prototype.groupBuildingsByType = function groupBuildingsByType(buildings){
    //Épületek csoportosítása típus szerint
    try{
        const result = {};
        
        for(let buildingid in buildings){
            const building = buildings[buildingid];
            const type = building.buildingData.type;
            if(result[type] == undefined){
                result[type] = [];
            }
            
            result[type].push(building);
        }
        
        return result;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
    }
}
BuildingGrouper.prototype.groupBuildingsBySlot = function groupBuildingsBySlot(buildings){
    //Épületek csoportosítása slot szerint
    try{
        const slots = {};

        for(let buildingid in buildings){
            const building  = buildings[buildingid];
            const buildingData = data.getElementData(building.data.resource);
            const slot = buildingData.slot;
            
            if(slots[slot] === undefined){
                slots[slot] = [];
            }
            
            slots[slot].push({building: building, buildingData: buildingData});
        }
        
        return slots;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
    }
}