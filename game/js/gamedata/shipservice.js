function ShipService(shipsData){
    const ships = convertShips(shipsData);
    
    this.getAllShips = function(){return ships};
    
        function convertShips(shipsData){
            try{
                const result = {};
                    for(let shipid in shipsData){
                        result[shipid] = new Ship(shipsData[shipid]);
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}