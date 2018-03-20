function Building(buildingData){
    const buildingid = buildingData.buildingid;
    const planetid = buildingData.planetid;
    const type = buildingData.type;
    let level = buildingData.level;
    const data = buildingData.data;
    
    this.getBuildingId = function(){return buildingid};
    this.getPlanetId = function(){return planetid};
    this.getType = function(){return type};
    this.getLevel = function(){return level};
    this.getData = function(){return data};
    
    this.setLevel = function(newLevel){level = newLevel};
}