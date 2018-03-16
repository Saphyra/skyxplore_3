function Fleet(fleetData){
    const fleetid = fleetData.fleetid;
    const owner = fleetData.owner;
    const xcord = fleetData.xcord;
    const ycord = fleetData.ycord;
    const data = fleetData.data;
    
    this.getFleetId = function(){return fleetid};
    this.getOwner = function(){return owner};
    this.getXCord = function(){return xcord};
    this.getYCord = function(){return ycord};
    this.getData = function(){return data};
}