function log(message, level, prefix){
    //Logolás
    /*Log szintek:
        error: Hibák a kódban (amit a catch elkap)
        warn: Figyelmeztetések (érvénytelen változóérték)
        message: Üzenetek
        debug: Részletes információk a futás állapotáról
        
        important: Fontos történések a játék történetében
        complete: Feladat elvégezve
        look: Figyelemfelhívás
        step: Alfeladat elvégezve
        process: Folyamat lépései
    */
    try{
        level = level || "message";
        prefix = prefix || "";
        
        switch(level){
            case "error":
                //return;
            break;
            case "warn":
                //return;
            break;
            case "message":
                //return;
            break;
            case "debug":
                //return;
            break;
            case "important":
            
            break;
            case "complete":
            
            break;
            case "look":
                return;
            break;
            case "step":
                return
            break;
            case "process":
                return;
            break;
            default:
                log("Unknown log level " + type + " with message " + message, "warn");
                return;
            break;
        }
        
        
        
        document.getElementById("logcontainer").style.display = "block";
        const div = document.getElementById("log");
        
        const color = getColor(level);
        
        const container = document.createElement("DIV");
                container.style.marginBottom = "0.5rem";
                container.style.color = color;
                const levelNode = createLevelNode(level);
            container.appendChild(levelNode);
            
        if(message === ""){
            const line = document.createElement("HR");
                line.style.borderWidth = "5px";
                line.style.display = "inline-block";
                line.style.width = "calc(100% - 15rem)";
            container.appendChild(line);
        }else{
            
            container.appendChild(createTextNode(prefix));
            
            let textNode;
                if(typeof message == "object" && message != null){
                    textNode = parseObject(message);
                }else if(message == null){
                    textNode = createTextNode("null");
                }else{
                    textNode = createTextNode(message);
                }
            container.appendChild(textNode);
        }
        
        
            
        div.insertBefore(container, div.childNodes[0]);
    }catch(err){
        alert("Hiba a loggerben: " + err.name + " - " + err.message);
    }
    
        function getColor(level){
            let color;
            switch(level){
                case "step":
                case "message":
                    color = "white";
                break;
                case "process":
                case "debug":
                    color = "green";
                break;
                case "warn":
                case "look":
                    color = "yellow";
                break;
                case "complete":
                case "error":
                case "important":
                    color = "red";
                break;
            }
            return color;
        }
    
        function createLevelNode(level){
            const element = document.createElement("DIV");
                element.style.display = "inline-block";
                element.style.width = "10rem";
                element.style.fontWeight = 700;
                element.innerHTML = level.toUpperCase();
                
            return element;
        }
        
        function createTextNode(message){
            const element = document.createElement("SPAN");
                element.innerHTML = message;
            return element;
        }
        
        function parseObject(obj){
            try{
                const element = document.createElement("OL");
                const keys = Object.keys(obj);
                
                if(keys.length  == 0){
                    return document.createTextNode("(Empty object/array)");
                }

                for(let kindex in keys){
                    const key = keys[kindex]
                    const elem = obj[key];
                    const line = document.createElement("LI");
                        if(typeof elem == "object"){
                            line.appendChild(document.createTextNode(key + ": "));
                            line.appendChild(parseObject(elem));
                        }else{
                            line.innerHTML = key + ": " + elem;
                        }
                    element.appendChild(line);
                }
                
                return element;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}