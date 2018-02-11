function Map(gameData){
    this.mapElements = {
        starElements:{},
        connectionElements:{},
    };
    
    this.mapShower = new MapShower(this.mapElements, gameData);
    this.showMap =  function(){this.mapShower.showMap()};
}

function createSVGElement(type){
    try{
        const element =  document.createElementNS("http://www.w3.org/2000/svg", type);
        element.classList.add("svgelement");
        return element;
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}