function BuildingGrouper(){
    
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