function Animation(){
    this.addMapListener = function addMapListener(){
        //Térkép mozgatásához szükséges eseményfigyelők hozzáadása
        try{
            let lastX = 0;
            let lastY = 0;
            const map = document.getElementById("map");
                //Egérkattintások mappelése
                map.onmousedown = function(event){
                    lastX = event.clientX;
                    lastY = event.clientY;
                    window.clicked = true;
                    window.clickedButton = event.button;
                };
                map.onmouseup = function(){window.clicked = false;};
                
                //Térkép mozgatása
                map.onmousemove = function(event){
                    if(window.clicked && window.clickedButton == 2){
                        const diffX = lastX - event.clientX;
                        const diffY = lastY - event.clientY;
                        document.getElementById("mapcontainer").scrollBy(diffX * 1.5, diffY * 1.5);
                        lastX = event.clientX;
                        lastY = event.clientY;
                    }
                };
                
                //Görgővel való görgetés tiltása
                map.onwheel = function(event){event.preventDefault();};
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}