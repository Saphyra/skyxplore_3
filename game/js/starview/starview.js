function StarView(){
    this.detailDisplayer = new StarViewDetailsDisplayer();
    this.queueDisplayer = new StarViewQueueDisplayer();
    this.planetDisplayer = new StarViewPlanetDisplayer();
    
    this.showStar = function showStar(star){
        try{
            switch(star.visibility.player.visibility){
                case "connected":
                    back.switchWindow("#connectedstarviewcontainer");
                break;
                default:
                    this.displayStarData(star);
                    back.switchWindow("#starviewcontainer");
                break;
            }
            
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.displayStarData = function displayStarData(star){
        try{
            this.detailDisplayer.displayDetails(star);
            this.queueDisplayer.displayQueue(star.data.queue);
            this.planetDisplayer.displayPlanets(star.starid);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}