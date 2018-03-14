function BuildingUpgrader(parent){
    const gameDataModificator = parent;
    
    this.upgradeBuilding = function upgradeBuilding(buildingid, priority){
        //Épület fejlesztése
        try{
            const building = gameData.buildings[buildingid];
            const planet = gameData.planets[building.planetid];
            const star = gameData.stars[planet.starid];
            const queue = star.data.queue;
            
            const upgradeLevel = building.level + 1;
            const upgradeBuildingData = filters.searchElements({type: building.type, level: upgradeLevel}, true);
            building.data.upgradestatus = upgradeBuildingData.constructiontime;
            
            
            const requestid = generator.generateId("request", Object.keys(queue));
            building.data.requestid = requestid;
            const request = new Request(star.starid, requestid, "buildingupgrade", "collectresources", priority, buildingid);
            queue[requestid] = request;
            
            buildingListView.refresh(star.starid);
            planetView.displayPlanetData(planet);
            starView.displayStarData(star);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}