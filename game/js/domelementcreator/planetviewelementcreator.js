function PlanetViewElementCreator(parent){
    const domElementCreator = parent;
    
    this.createPlanetSlotContainer = function createPlanetSlotContainer(){
        //Slotlista tároló létrehozása
        try{
            const element = document.createElement("DIV");
                element.classList.add("borderridge");
                element.classList.add("border3px");
                element.classList.add("bordercolor150");
                element.classList.add("margintop5rem");
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createPlanetSlotContainerName = function createPlanetSlotContainerName(name){
        //Slot név létrehozása
        try{
            name = name || "";
            const element = document.createElement("DIV");
                element.classList.add("backgroundblack5");
                element.classList.add("border1px");
                element.classList.add("borderbottomridge");
                element.classList.add("bordercolor150");
                element.classList.add("fontsize15rem");
                element.classList.add("marginbottom10rem");
                
                element.innerHTML = name;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createPlanetSlot = function createPlanetSlot(backgroundType){
        //Slot létrehozása
        try{
            const element = document.createElement("DIV");
                element.classList.add("border5px");
                element.classList.add("borderinset");
                element.classList.add("bordercolor150");
                element.classList.add("inlineblock");
                element.classList.add("width120rem");
                element.classList.add("height100rem");
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createPlanetSlotTitle = function createPlanetSlotTitle(title){
        //Slot név (slotba épített elem neve)
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createPlanetSlotBuildStatus = function createPlanetSlotBuildStatus(status, maxStatus, type){
        //Épület állapot nézetre specializálása
        try{
            const element = parent.createBuildStatus(status, maxStatus, type);
                element.classList.add("border2px");
                element.classList.add("borderbottomridge");
                element.classList.add("bordercolor150");
                element.classList.add("paddingtop0125rem");
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createPlanetViewActionBuildingButton = function createPlanetViewActionBuildingButton(text, action){
        try{
            const element = document.createElement("DIV");
                element.classList.add("backgroundblack8");
                element.classList.add("border2px");
                element.classList.add("borderbottomridge");
                element.classList.add("bordercolor150");
                element.classList.add("padding1px");
                
                const button = document.createElement("BUTTON");
                    button.innerHTML = text;
                    button.onclick = action;
                
                element.appendChild(button);
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createPlanetSlotLevel = function createPlanetSlotLevel(level){
        //Épület szintje
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}