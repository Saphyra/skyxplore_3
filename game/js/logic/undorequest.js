function UndoRequest(){
    this.undo = function undo(request){
        //Visszavonja az adott kérelmet
        try{
            switch(request.type){
                case "building":
                    undoBuildingRequest(request);
                break;
                default:
                    log("UndoRequest - Unknown type of request: " + request.type, "warn");
                break;
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function undoBuildingRequest(request){
            //Épületek kérelmének visszavonása
            try{
                const building = gameData.buildings[request.elementid];
                const planet = gameData.planets[building.planetid];
                const star = gameData.stars[planet.starid];
                
                delete star.data.queue[request.requestid];
                delete gameData.buildings[building.buildingid];
                starView.displayStarData(star);
                planetView.displayPlanetData(planet);
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}