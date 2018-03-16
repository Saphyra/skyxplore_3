function FleetService(fleetsData){
    const fleets = convertFleets(fleetsData);
    
    this.getAllFleets = function(){return fleets};
    
        function convertFleets(fleetsData){
            const result = {};
                for(let fleetid in fleetsData){
                    result[fleetid] = new Fleet(fleetsData[fleetid]);
                }
            return result;
        }
}