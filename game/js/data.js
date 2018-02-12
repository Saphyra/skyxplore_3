function Data(){
    this.cache = {};
    
    this.getElementData = function getElementData(resource){
        try{
            //log(resource.source + " - " + resource.key);
            let result = this.getFromCache(resource.source);
            
            if(result === null){
                result = this.loadElementData(resource.source);
                this.putToCache(resource.source, result);
            }
            
            return result[resource.key];
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.loadElementData = function loadElementData(source){
        try{
            const request = new XMLHttpRequest();
                request.open("GET", "gamedata/data/" + source + ".json", 0);
                request.send();
            return JSON.parse(request.responseText);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.putToCache = function putToCache(key, data){
        try{
            this.cache[key] = data;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.getFromCache = function getFromCache(key){
        try{
            return this.cache[key] || null;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}