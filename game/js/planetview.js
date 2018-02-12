function PlanetView(){
    this.showPlanet = function showPlanet(planet){
        try{
            log(planet.planetid);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}

