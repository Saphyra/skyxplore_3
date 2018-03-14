function Data(){
    cache = {};
    
    this.getElementData = function getElementData(resource){
        //Elem adatainak beolvasása
        try{
            let element = this.getFromCache("elements", resource.source);
            
            if(element === null){
                element = loadElementData(resource.source);
                this.putToCache("elements", resource.source, element);
            }
            const result = element[resource.key] || function(){log("No data in element " + resource.source + " with key " + resource.key); return null};
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.putToCache = function putToCache(cacheName, key, data){
        //Gyorsítótárazás
        try{
            if(cache[cacheName] == undefined){
                cache[cacheName] = {};
            }
            cache[cacheName][key] = data;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.getFromCache = function getFromCache(cacheName, key){
        //Kiolvasás gyorsítótárból
        try{
            if(cache[cacheName] == undefined){
                return null;
            }
            
            return cache[cacheName][key] || null;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.getCacheNames = function getCacheNames(){
        //A gyorsítótár tárolónevei
        try{
            return Object.keys(cache);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.emptyCache = function emptyCache(cacheName){
        //Kiüríti a gyorsítótár megadott nevű tárolóját
        try{
            cache[cacheName] = {};
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.loadGameData = function loadGameData(){
        //Játékadatok betöltése
        try{
            for(let index in gameDataSources){
                const entry = gameDataSources[index];
                this.putToCache("elements", entry, loadElementData(entry));
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.loadGame = function loadGame(){
        //Mentett játék betöltése
        try{
            const path = "saves/" + startGameid + ".json";
            const request = new XMLHttpRequest();
                request.open("GET", path, 0);
                request.send();
                window.gameData = JSON.parse(request.responseText);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.saveGame = function saveGame(){
        //Játék mentése
        try{
            const request = new XMLHttpRequest();
                request.open("POST", "php/savegame.php", 0);
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                request.send("gameid=" + startGameid + "&data=" + JSON.stringify(gameData));
                if(request.responseText == "1"){
                    log("Játék elmentve.", "warn");
                }else{
                    log("Mentés sikertelen: " + request.responseText, "error");
                }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}