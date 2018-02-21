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
    
    this.createListElementTitle = function createListElementTitle(title){
        try{
            title = title || "";
            const element = document.createElement("DIV");
                element.classList.add("centertext");
                element.classList.add("fontsize15rem");
                element.classList.add("overflowxauto");
                element.classList.add("overflowyhidden");
            
                element.innerHTML = title;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createListItem = function createListItem(content){
        try{
            content = content || "";
            const element = document.createElement("DIV");
                element.classList.add("border2px");
                element.classList.add("bordercolor150");
                element.classList.add("borderridge");
                element.classList.add("margin025rem");
                element.classList.add("overflowxauto");
                element.classList.add("overflowyhidden");
                element.classList.add("padding025rem");
                $(element).hover(
                        function(){
                            element.classList.remove("bordercolor150");
                            element.classList.add("bordercolor200");
                        },
                        function(){
                            element.classList.remove("bordercolor200")
                            element.classList.add("bordercolor150");
                        }
                );
            
                element.innerHTML = content;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}