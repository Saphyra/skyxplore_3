function CommonElementCreator(domElementCreator){
    this.domElementCreator = domElementCreator;
    
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
    
    this.createListElement = function createListElement(){
        try{
            const element = document.createElement("DIV");
                element.classList.add("border3px");
                element.classList.add("borderbottom5px");
                element.classList.add("bordercolor50");
                element.classList.add("borderridge");
                element.classList.add("margin025rem");
                element.classList.add("overflowxauto");
                element.classList.add("overflowyhidden");
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}