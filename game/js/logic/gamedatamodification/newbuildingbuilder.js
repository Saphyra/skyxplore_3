function NewBuildingBuilder(gameDataModificator){
    const parent = gameDataModificator;
    
    this.buildNewBuilding = function buildNewBuilding(planetid, buildingData, priority){
        //Új épület építése
        try{
            const planet = gameData.planets[planetid];
            const star = gameData.stars[planet.starid];
            
            //Épület létrehozása
            const building = createBuilding(planetid, buildingData);
            gameData.buildings[building.buildingid] = building;
            //Kérelem létrehozása
            const requestid = generator.generateId("request", star.data.queue);
            const cancel = new CancelBuilding(star.data.queue, building.buildingid, requestid, star);
            const request = new Request(requestid, "building", buildingData, priority, building.buildingid, cancel);
            star.data.queue[requestid] = request;
            
            //Ablakok frissítése
            planetView.displayPlanetData(planet);
            starView.displayStarData(star);
            back.backOneWindow();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
        
        function createBuilding(planetid, buildingData){
            //Új épület létrehozása
            try{
                const buildingid = generator.generateId("building", Object.keys(gameData.buildings));
                const building = new Building(planetid, buildingid, buildingData);

                return building;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
        
        function CancelBuilding(queue, buildingid, requestid, star){
            //Építési kérelem visszavonása
            this.queue = queue;
            this.buildingid = buildingid;
            this.requestid = requestid;
            this.star = star;
            this.undo = function(){
                delete this.queue[requestid];
                delete gameData.buildings[buildingid];
                starView.showStar(this.star);
            }
        }
}