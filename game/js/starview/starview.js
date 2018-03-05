function StarView(){
    const detailDisplayer = new StarViewDetailsDisplayer();
    const queueDisplayer = new StarViewQueueDisplayer();
        this.displayQueue = queueDisplayer.displayQueue;
    const planetDisplayer = new StarViewPlanetDisplayer();
    
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
            detailDisplayer.displayDetails(star);
            queueDisplayer.displayQueue(star.data.queue);
            planetDisplayer.displayPlanets(star.starid);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}