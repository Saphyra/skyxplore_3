function Animation(){
    this.addWindowStateChangeListener = function addWindowStateChangeListener(){
        try{
            $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e){setButtonText();});
            $(window).on('resize', function(e){setButtonText();});
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
        
        function setButtonText(){
            try{
                let buttonText = (!window.screenTop && !window.screenY) ? "Teljes képernyő" : "Normál képernyő";
                $("#fullscreenbutton").text(buttonText);
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
    
    this.toggleFullScreen = function toggleFullScreen() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            //Teljes képernyőre váltás
            if (document.documentElement.requestFullScreen) {  
                document.documentElement.requestFullScreen();  
            } else if (document.documentElement.mozRequestFullScreen) {  
                document.documentElement.mozRequestFullScreen();  
            } else if (document.documentElement.webkitRequestFullScreen) {  
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
            }
        } else {
            //Visszalépés teljes képernyőből
            if (document.cancelFullScreen) {  
                document.cancelFullScreen();  
            } else if (document.mozCancelFullScreen) {  
                document.mozCancelFullScreen();  
            } else if (document.webkitCancelFullScreen) {  
                document.webkitCancelFullScreen();  
            }
        }
    }
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
                        document.getElementById("mapcontainer").scrollBy(diffX * 1.5, diffY * 2);
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