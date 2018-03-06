function NewBuildingBuilder(gameDataModificator){
    const parent = gameDataModificator;
    
    this.buildNewBuilding = function buildNewBuilding(planetid, buildingData, priority){
        //Új épület építése
        try{
            const planet = gameData.planets[planetid];
            const star = gameData.stars[planet.starid];
            
            const requestid = generator.generateId("request", star.data.queue);
            //Épület létrehozása
            const building = createBuilding(planetid, buildingData, requestid);
            gameData.buildings[building.buildingid] = building;
            //Kérelem létrehozása
            
            const cancel = new CancelBuilding(star.data.queue, building.buildingid, requestid, star);
            const request = new Request(requestid, "building", buildingData, priority, building.buildingid, cancel);
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
        
        function CancelBuilding(queue, buildingid, requestid, star){
            //Építési kérelem visszavonása
            this.queue = queue;
            this.buildingid = buildingid;
            this.requestid = requestid;
            this.star = star;
            this.undo = function(){
                const planetid = gameData.buildings[this.buildingid].planetid;
                delete this.queue[requestid];
                delete gameData.buildings[this.buildingid];
                starView.displayStarData(this.star);
                planetView.displayPlanetData(gameData.planets[planetid]);
            }
        }
}