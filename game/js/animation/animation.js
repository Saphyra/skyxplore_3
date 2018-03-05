function Animation(){
    this.starMapElementMouseEnter = function starMapElementMouseEnter(element){
        try{
            element.setAttribute("stroke", "blue");
            element.setAttribute("stroke-width", 3);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.starMapElementMouseOut = function starMapElementMouseOut(element){
        try{
            element.setAttribute("stroke-width", 0);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.addMapListener = function addMapListener(){
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
                map.onwheel = function(event){event.preventDefault();};
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}