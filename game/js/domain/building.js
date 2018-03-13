function Building(planetid, buildingid, buildingData, requestid){
    this.planetid = planetid;
    this.buildingid = buildingid;
    this.type = buildingData.type;
    this.level = buildingData.level;
    this.data = {
        status: buildingData.constructiontime,
        upgradestatus: 0,
        resource: {
            source: buildingData.source,
            key: buildingData.key,
        },
        requestid: requestid,
    };
}