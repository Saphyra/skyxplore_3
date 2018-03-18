function StarService(starsData){
    const stars = convertStars(starsData);
    
    this.getAllStars = function(){return stars};
    this.getStarById = function(starid){return stars[starid] || null};
    this.getOwnedStars = getOwnedStars;
    this.getStarsOfPlayer = getStarsOfPlayer;
    
    function getOwnedStars(){
        //Lakott csillagok
        try{
            const result = {};
            
            for(let starid in stars){
                const star = stars[starid];
                if(star.getOwner() !== "neutral"){
                    result[starid] = star;
                }
            }
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function getStarsOfPlayer(playerName){
        //Játékos által birtokolt csillagok
        try{
            const result = {};
                for(let starid in stars){
                    const star = stars[starid];
                    if(star.getOwner() == playerName){
                        result[starid] = star;
                    }
                }
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function convertStars(starsData){
            try{
                const result = {};
                    for(let starid in starsData){
                        result[starid] = new Star(starsData[starid]);
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}