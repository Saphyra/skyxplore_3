$(document).ready(load);

function load(){
    try{
        document.addEventListener('contextmenu', event => event.preventDefault());
        
        const path = "saves/" + window.startGameid + ".json";
        const request = new XMLHttpRequest();
            request.open("GET", path, 1);
            request.send();
            request.onreadystatechange = function(){
                if(request.readyState === 4 && request.status === 200){
                    window.gameData = JSON.parse(request.responseText);
                    showMap();
                    addMapListener();
                }
            }
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
    
}

    function addMapListener(){
        try{
            let lastX = 0;
            let lastY = 0;
            const map = document.getElementById("map");
                map.onmousedown = function(event){
                    lastX = event.clientX;
                    lastY = event.clientY;
                    window.clicked = true;
                    window.clickedButton = event.button;
                };
                map.onmouseup = function(){window.clicked = false;};
                map.onmousemove = function(event){
                    if(window.clicked && window.clickedButton == 2){
                        const diffX = lastX - event.clientX;
                        const diffY = lastY - event.clientY;
                        document.getElementById("mapcontainer").scrollBy(diffX * 1.5, diffY * 1.5);
                        lastX = event.clientX;
                        lastY = event.clientY;
                    }
                };
                
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }