function getElementData(resource){
    try{
        //log(resource.source + " - " + resource.key);
        let result = getFromCache(resource.source);
        
        if(result === null){
            result = loadElementData(resource.source);
            putToCache(resource.source, result);
        }
        
        return result[resource.key];
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

    function loadElementData(source){
        try{
            const request = new XMLHttpRequest();
                request.open("GET", "gamedata/data/" + source + ".json", 0);
                request.send();
            return JSON.parse(request.responseText);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
function putToCache(key, data){
    try{
        window.cache[key] = data;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function getFromCache(key){
    try{
        return window.cache[key] || null;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}