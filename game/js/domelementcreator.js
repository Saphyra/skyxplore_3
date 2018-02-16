function DOMElementCreator(){
    this.createCoverElement = function createCoverElement(){
        try{    
            const element = document.createElement("DIV");
                element.classList.add("absolute0");
                element.classList.add("backgroundblack5");
                element.classList.add("overflowauto");
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createPlanetListItem = function createPlanetListItem(num, slot){
        try{
            let borderColor;
            if(num === slot && num !== undefined){
                borderColor = "bordercolorred";
            }else if(num){
                borderColor = "bordercolorgreen";
            }else{
                borderColor = "bordercolor150";
            }
            
            const element = document.createElement("DIV");
                element.classList.add("border2px");
                element.classList.add("borderridge");
                element.classList.add("inlineblock");
                element.classList.add("margin0125rem");
                element.classList.add("overflowxauto");
                element.classList.add("overflowyhidden");
                element.classList.add("padding1px");
                element.classList.add(borderColor);
                $(element).hover(
                        function(){
                            element.classList.remove(borderColor);
                            element.classList.add("bordercolor200");
                        },
                        function(){
                            element.classList.remove("bordercolor200")
                            element.classList.add(borderColor);
                        }
                );
                
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
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
    
    this.createPlanetSlotContainerName = function createPlanetSlotContainerName(){
        try{
            const element = document.createElement("DIV");
                element.classList.add("border1px");
                element.classList.add("borderbottomridge");
                element.classList.add("bordercolor150");
                element.classList.add("fontsize15rem");
                element.classList.add("marginbottom10rem");
                
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createPlanetSlot = function createPlanetSlot(type){
        try{
            const element = this.createEmptyPlanetSlot();
                element.classList.add("backgroundnorepeat");
                element.classList.add("backgroundpositioncenter");
                element.classList.add("backgroundsizecover");
                
                switch(type){
                    case "farm":
                        element.classList.add("backgroundfarm");
                    break;
                    case "mine":
                        element.classList.add("backgroundmine");
                    break;
                    case "factory":
                        element.classList.add("backgroundfactory");
                    break;
                    case "house":
                        element.classList.add("backgroundhouse");
                    break;
                    case "fridge":
                    case "depot":
                    case "storage":
                        element.classList.add("backgroundstorage");
                    break;
                    case "defense":
                        element.classList.add("backgrounddefense");
                    break;
                    case "empty":
                        element.classList.add("backgroundplus");
                    break;
                }
            
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createEmptyPlanetSlot = function createEmptyPlanetSlot(){
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
                $(element).hover(
                    function(){element.classList.add("bordercolor255")},
                    function(){element.classList.remove("bordercolor255")}
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
                element.classList.add("fontsize125rem");
                element.classList.add("border2px");
                element.classList.add("borderbottomridge");
                element.classList.add("bordercolor150");
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
                element.classList.add("fontsize125rem");
                element.classList.add("width100percent");
                
                
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createStarViewPlanet = function createStarViewPlanet(planet){
        try{
            const element = document.createElement("DIV");
                element.classList.add("backgroundnorepeat");
                element.classList.add("backgroundpositioncenter");
                element.classList.add("backgroundsizecover");
                element.classList.add("border3px");
                element.classList.add("bordercolor150");
                element.classList.add("borderinset");
                element.classList.add("height15vw");
                element.classList.add("inlineblock");
                element.classList.add("margin025rem");
                element.classList.add("maxheight200rem");
                element.classList.add("maxwidth200rem");
                element.classList.add("minheight100rem");
                element.classList.add("minwidth100rem");
                element.classList.add("relative");
                element.classList.add("width15vw");
                element.classList.add("background" + planet.type);
                $(element).hover(
                    function(){element.classList.add("bordercolor255")},
                    function(){element.classList.remove("bordercolor255")}
                );
                element.onclick = function(){planetView.showPlanet(planet)};
            
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}