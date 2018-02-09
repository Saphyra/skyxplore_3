function getElementData(resource){
    try{
        //log(resource.source + " - " + resource.key);
        if(!window.elementData[resource.source]){
            loadElementData(resource.source);
        }
        return window.elementData[resource.source][resource.key];
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

    function loadElementData(source){
        try{
            const request = new XMLHttpRequest();
                request.open("GET", "gamedata/data/" + source + ".json", 0);
                request.send();
                window.elementData[source] = JSON.parse(request.responseText);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }