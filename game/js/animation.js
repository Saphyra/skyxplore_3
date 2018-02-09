function switchWindow(windowid){
    try{
        $(".maincontainer").css("display", "none");
        window.viewStack.push(windowid);
        $(windowid).toggle();
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function addBackListeners(){
    try{
        $(".viewcontainer").contextmenu(backOneWindow);
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

    function backOneWindow(){
        try{
            window.viewStack.pop();
            switchWindow(window.viewStack.pop());
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }

function starMapElementMouseEnter(element){
    try{
        element.setAttribute("stroke", "blue");
        element.setAttribute("stroke-width", 3);
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function starMapElementMouseOut(element){
    try{
        element.setAttribute("stroke-width", 0);
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
            map.onwheel = function(event){event.preventDefault();};
            
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}