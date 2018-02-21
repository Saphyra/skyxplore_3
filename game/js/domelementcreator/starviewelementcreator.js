function StarViewElementCreator(parent){
    domElementCreator = parent;
    
    this.createPlanetSlotListItem = function createPlanetSlotListItem(borderColor){
        try{
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