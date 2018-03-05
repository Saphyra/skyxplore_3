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
        result.industry = this.orderBuildingsByName(this.groupBuildingsByType(grouped.industry));
        result.economy = this.orderBuildingsByName(this.groupBuildingsByType(grouped.economy));
        
        return result;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
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
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}
BuildingGrouper.prototype.orderBuildingsByName = function orderBuildingsByName(buildings){
    //Épületek sorba rendezése név szerint
    try{
        const arr = [];
        const result = {};

        for(let type in buildings){
            arr.push({type: type, data: buildings[type]});
        }
        
        arr.sort(function(a, b){
            return data.getElementData({source: a.type, key: "typename"}).localeCompare(data.getElementData({source: b.type, key: "typename"}))
        });
        
        for(let index in arr){
            result[arr[index].type] = arr[index].data;
        }
        
        return result;
        
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}
BuildingGrouper.prototype.orderBuildingDatasByName = function orderBuildingDatasByName(buildings){
    //Épületek sorba rendezése név szerint
    try{
        return buildings.sort(function(a, b){a.name.localeCompare(b.name)});
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
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
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}