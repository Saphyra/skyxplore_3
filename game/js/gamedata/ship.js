function Ship(shipData){
    const shipid = shipData.shipid;
    const fleetid = shipData.fleetid;
    const owner = shipData.owner;
    const details = shipData.details;
    const stats = shipData.stats;
    
    this.getShipId = function(){return shipid};
    this.getFleetId = function(){return fleetid};
    this.getOwner = function(){return owner};
    this.getDetails = function(){return details};
    this.getStats = function(){return stats};
}