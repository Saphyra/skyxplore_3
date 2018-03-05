function PlanetViewElementCreator(parent){
    const domElementCreator = parent;
    
    this.createPlanetSlotContainer = function createPlanetSlotContainer(){
        try{
            const element = document.createElement("DIV");
                element.classList.add("border3px");
                element.classList.add("borderridge");
                element.classList.add("bordercolor150");
                element.classList.add("margintop5rem");
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createPlanetSlotContainerName = function createPlanetSlotContainerName(name){
        try{
            name = name || "";
            const element = document.createElement("DIV");
                element.classList.add("border1px");
                element.classList.add("borderbottomridge");
                element.classList.add("bordercolor150");
                element.classList.add("fontsize15rem");
                element.classList.add("marginbottom10rem");
                
                element.innerHTML = name;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createPlanetSlot = function createPlanetSlot(backgroundType){
        try{
            const element = document.createElement("DIV");
                element.classList.add("border5px");
                element.classList.add("borderinset");
                element.classList.add("bordercolor150");
                element.classList.add("inlineblock");
                element.classList.add("width75rem");
                element.classList.add("height75rem");
                element.classList.add("margin5rem");
                element.classList.add("margintop0");
                element.classList.add("relative");
                element.classList.add("backgroundnorepeat");
                element.classList.add("backgroundpositioncenter");
                element.classList.add("backgroundsizecover");
                element.classList.add(backgroundType);
                
                $(element).hover(
                    function(){
                        element.classList.remove("bordercolor150");
                        element.classList.add("bordercolor255");
                    },
                    function(){
                        element.classList.remove("bordercolor255");
                        element.classList.add("bordercolor150");
                    }
                );
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createPlanetSlotTitle = function createPlanetSlotTitle(title){
        try{
            const element = document.createElement("DIV");
                element.innerHTML = title;
                element.classList.add("backgroundblack8");
                element.classList.add("fontsize0125rem");
                element.classList.add("border2px");
                element.classList.add("borderbottomridge");
                element.classList.add("bordercolor150");
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createPlanetSlotBuildStatus = function createPlanetSlotBuildStatus(status, maxStatus){
        try{
            const element = parent.createBuildStatus(status, maxStatus);
                element.classList.add("border2px");
                element.classList.add("borderbottomridge");
                element.classList.add("bordercolor150");
                element.classList.add("paddingtop0125rem");
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createPlanetSlotLevel = function createPlanetSlotLevel(level){
        try{
            const element = document.createElement("DIV");
                element.innerHTML = "Szint: " + level
                element.classList.add("absolute");
                element.classList.add("backgroundblack8");
                element.classList.add("border2px");
                element.classList.add("bordertopridge");
                element.classList.add("bordercolor150");
                element.classList.add("bottom1px");
                element.classList.add("fontsize0125rem");
                element.classList.add("width100percent");
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}