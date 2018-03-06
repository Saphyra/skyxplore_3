function Map(){
    const mapElements = {
        starElements:{},
        connectionElements:{},
    };
    
    const mapShower = new MapShower(mapElements);
    
    this.showMap = function(){mapShower.showMap()};
}

function createSVGElement(type){
    try{
        const element =  document.createElementNS("http://www.w3.org/2000/svg", type);
        element.classList.add("svgelement");
        return element;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
    }
}