function Planet(planetData){
    const planetid = planetData.planetid;
    const starid = planetData.starid;
    const planetName = planetData.planetName;
    const size = planetData.size;
    const type = planetData.type;
    const slots = planetData.slots;
    
    this.getPlanetId = function(){return planetid};
    this.getStarId = function(){return starid};
    this.getPlanetName = function(){return planetName};
    this.getSize = function(){return size};
    this.getType = function(){return type};
    this.getSlots = function(){return slots};
}