function PlanetView(){
    this.showPlanet = function showPlanet(planet){
        try{
            const star = gameData.stars[planet.starid];
            switch(star.visibility.player.visibility){
                default:
                    this.displayPlanetData(planet);
                    back.switchWindow("#planetviewcontainer");
                break;
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.displayPlanetData = function displayPlanetData(planet){
        try{
            $("#planetviewplanetname").text(planet.planetname);
            const imgUrl = "url('../content/img/" + planet.type + "_background.jpg')";
            $("#planetviewcontainer").css("backgroundImage", imgUrl);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}

