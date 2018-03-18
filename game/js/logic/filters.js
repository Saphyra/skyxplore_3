function Filters(){
    
    
    
    
    
    
    this.getRequestOfBuilding = function getRequestOfBuilding(buildingid, queue){
        //Épület építéséhez tartozó kérelem megkeresése
        try{
            queue = queue || gameData.stars[gameData.buildings[buildingid].starid];
            
            for(let qindex in queue){
                const request = queue[qindex];
                if(request.elementid == buildingid){
                    return request;
                }
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.getOwnedStars = function getOwnedStars(){
        //Lakott csillagok
        try{
            const stars = gameData.stars;
            const result = [];
            
            for(let starid in stars){
                const star = stars[starid];
                if(star.owner !== "neutral"){
                    result.push(star);
                }
            }
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.getStarOfBuilding = function getStarOfBuilding(buildingid){
        try{
            return gameData.stars[gameData.planets[gameData.buildings[buildingid].planetid].starid];
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.getOwnedStars = function getOwnedStars(){
        //Lakott csillagok
        const stars = gameData.stars;
        const result = [];
        
        for(let starid in stars){
            const star = stars[starid];
            if(star.owner !== "neutral"){
                result.push(star);
            }
        }
        
        return result;
    }
    
    this.getRequestsOfPlayer = function getRequestsOfPlayer(playerName){
        //A játékos által irányított csillagok kérelmei
        try{
            const stars = gameData.stars;
            let result = [];
            
            for(let starid in stars){
                const star = stars[starid];
                const queue = star.data.queue;
                if(star.owner == playerName && Object.keys(queue).length){
                    for(requestid in queue){
                        result.push(queue[requestid]);
                    }
                }
            }
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}