function log(message, level){
    //Logolás
    try{
        level = level || "message";
        document.getElementById("logcontainer").style.display = "block";
        const div = document.getElementById("log");
        
        const color = getColor(level);
        
        const container = document.createElement("DIV");
            container.style.marginBottom = "0.5rem";
            container.style.color = color;
            const levelNode = createLevelNode(level);
        container.appendChild(levelNode);
            const textNode = createTextNode(message);
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
}