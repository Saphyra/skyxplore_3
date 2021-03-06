function Animation(){
    this.addWindowStateChangeListener = function addWindowStateChangeListener(){
        //Ablakméret állapotfigyelő hozzáadása
        try{
            document.addEventListener("keydown", e => { if(e.key == "F11") e.preventDefault(); });
            $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e){setButtonText();});
            $(window).on('resize', function(e){setButtonText();});
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
        
        function setButtonText(){
            //Beállítja az átméretező gomb szövegét az aktuális képernyőállapot alapján
            try{
                let buttonText = (!window.screenTop && !window.screenY) ? "Teljes képernyő" : "Normál képernyő";
                $("#fullscreenbutton").text(buttonText);
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
    
    this.toggleFullScreen = function toggleFullScreen() {
        //Váltás a képernyőmódok között
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
            let clicked = false;
            let clickedButton;
            const map = document.getElementById("map");
                //Egérkattintások mappelése
                map.onmousedown = function(event){
                    lastX = event.clientX;
                    lastY = event.clientY;
                    clicked = true;
                    clickedButton = event.button;
                };
                map.onmouseup = function(){clicked = false;};
                
                //Térkép mozgatása
                map.onmousemove = function(event){
                    if(clicked && clickedButton == 2){
                        const diffX = lastX - event.clientX;
                        const diffY = lastY - event.clientY;
                        document.getElementById("mapcontainer").scrollBy(diffX * 1.5, diffY * 2.5);
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
    
    this.displayPlayerMoney = function displayPlayerMoney(money){
        //Játékos pénzmennyiségének kijelzése
        try{
            document.getElementById("playermoney").innerHTML = money;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}