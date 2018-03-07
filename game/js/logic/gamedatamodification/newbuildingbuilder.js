function NewBuildingBuilder(gameDataModificator){
    const parent = gameDataModificator;
    
    this.buildNewBuilding = function buildNewBuilding(planetid, buildingData, priority){
        //Új épület építése
        try{
            const planet = gameData.planets[planetid];
            const star = gameData.stars[planet.starid];
            
            const requestid = generator.generateId("request", Object.keys(star.data.queue));
            //Épület létrehozása
            const building = createBuilding(planetid, buildingData, requestid);
            gameData.buildings[building.buildingid] = building;
            
            //Kérelem létrehozása
            const request = new Request(requestid, "building", priority, building.buildingid);
            star.data.queue[requestid] = request;
            
            //Ablakok frissítése
            planetView.displayPlanetData(planet);
            starView.displayStarData(star);
            back.backOneWindow();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
        
        function createBuilding(planetid, buildingData, requestid){
            //Új épület létrehozása
            try{
                const buildingid = generator.generateId("building", Object.keys(gameData.buildings));
                const building = new Building(planetid, buildingid, buildingData, requestid);

                return building;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}