function Building(planetid, buildingid, buildingData){
    this.planetid = planetid;
    this.buildingid = buildingid;
    this.type = buildingData.type;
    this.level = buildingData.level;
    this.data = {
        status: buildingData.constructiontime,
        resource: {
            source: buildingData.source,
            key: buildingData.key,
        },
    };
}