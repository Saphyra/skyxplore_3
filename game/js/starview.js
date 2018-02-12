function StarView(){
    this.detailDisplayer = new StarViewDetailsDisplayer();
    this.queueDisplayer = new StarViewQueueDisplayer();
    this.planetDisplayer = new StarViewPlanetDisplayer();
    
    this.showStar = function showStar(star){
        try{
            if(star.visibility.player.visibility == "connected"){
                back.switchWindow("#connectedstarviewcontainer");
            }else{
                this.displayStarData(star);
                back.switchWindow("#starviewcontainer");
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
        
        
        
        
        
    
    
    
    
        
        
            