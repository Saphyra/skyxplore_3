function BuildingService(buildingsData){
    const buildings = convertBuildings(buildingsData);
    
    this.getAllBuildings = function(){return buildings};
    
        function convertBuildings(buildingsData){
            try{
                const result = {};
                    for(let buildingid in buildingsData){
                        result[buildingid] = new Building(buildingsData[buildingid]);
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}