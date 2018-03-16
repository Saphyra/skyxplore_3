function log(message, level, prefix){
    //Logolás
    try{
        level = level || "message";
        prefix = prefix || "";
        
        switch(level){
            case "error":
            
            break;
            case "warn":
            
            break;
            case "message":
            
            break;
            case "debug":
            
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
        container.appendChild(createTextNode(prefix));
        
        let textNode;
            if(typeof message == "object"){
                textNode = parseObject(message);
            }else{
                textNode = createTextNode(message);
            }
        container.appendChild(textNode);
            
        div.insertBefore(container, div.childNodes[0]);
    }catch(err){
        alert("Hiba a loggerben: " + err.name + " - " + err.message);
    }
    
        function getColor(level){
            let color;
            switch(level){
                case "message":
                    color = "white";
                break;
                case "debug":
                    color = "green";
                break;
                case "warn":
                    color = "yellow";
                break;
                case "error":
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