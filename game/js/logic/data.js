function Data(){
    cache = {};
    
    this.getElementData = function getElementData(resource){
        //Elem adatainak beolvasása
        try{
            let element = this.getFromCache(resource.source);
            
            if(element === null){
                element = loadElementData(resource.source);
                this.putToCache(resource.source, element);
            }
            const result = element[resource.key] || function(){log("No data in element " + resource.source + " with key " + resource.key); return null};
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    loadElementData = function loadElementData(source){
        //Forrás betöltése fájlból
        try{
            const request = new XMLHttpRequest();
                request.open("GET", "gamedata/data/" + source + ".json", 0);
                request.send();
                if(request.status == 404){
                    log("loadElementData - target at " + source + " not found.");
                    return null;
                }else{
                    return JSON.parse(request.responseText);
                }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.putToCache = function putToCache(key, data){
        //Gyorsítótárazás
        try{
            cache[key] = data;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.getFromCache = function getFromCache(key){
        //Kiolvasás gyorsítótárból
        try{
            return cache[key] || null;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.loadGameData = function loadGameData(){
        //Játékadatok betöltése
        try{
            for(let index in gameDataSources){
                const entry = gameDataSources[index];
                this.putToCache(entry, loadElementData(entry));
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}