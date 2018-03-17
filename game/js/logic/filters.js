function Filters(){
    this.searchElements = function searchElements(params, singleResult){
        //Megadott paramétereknek megfelelő játékelemek keresése
        try{
            singleResult = singleResult == undefined ? true : singleResult;
            
            const sources = gameDataSources;
            const result = [];
            for(let sindex in sources){
                const source = sources[sindex];
                const elements = data.getFromCache("elements", source);
                for(let eindex in elements){
                    const element = elements[eindex];
                    if(isElementValid(element, params)){
                        result.push(element);
                    }
                }
            }
            return singleResult ? result.length === 1 ? result[0] : result : result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function isElementValid(element, params){
            //Adott játékelem megfelel-e a keresési követelményeknek
            try{
                let result = true;
                    for(let key in params){
                        if(element[key] != params[key]){
                            result = false;
                        }
                    }
                
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
    
    this.getBuildableBuildingsOfSlot = function getBuildableBuildingsOfSlot(slot){
        //Adott slotba építhető épületek
        try{
            const elements = this.searchElements({slot: slot, level: 1}, false);
            const result = [];
                for(let index in elements){
                    const element = elements[index];
                    sresult.push(element);
                }
            
            return result;
            
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