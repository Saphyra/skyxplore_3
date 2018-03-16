function Star(starData){
    const starid = starData.starid;
    const xcord = starData.xcord;
    const ycord = starData.ycord;
    const owner = starData.owner;
    const starname = starData.starname;
    const planetnum = starData.planetnum;
    const connections = convertConnections(starData.connections);
    const visibilityService = new VisibilityService(starData.visibility);
    const data = starData.data;
    
    this.getStarId = function(){return starid};
    this.getXCord = function(){return xcord};
    this.getYCord = function(){return ycord};
    this.getOwner = function(){return owner};
    this.getStarName = function(){return starname};
    this.getPlanetNum = function(){return planetnum};
    this.getConnections = function(){return connections};
    this.getVisibilityService = function(){return visibilityService};
    this.getStarData = function(){return data};
    
        function convertConnections(connections){
            try{
                const result = [];
                    for(let cindex in connections){
                        const connection = connections[cindex];
                        result.push(new Connection(connection));
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}