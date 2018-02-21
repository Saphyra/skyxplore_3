function NewBuildingViewElementCreator(parent){
    const domElementCreator = parent;
    
    this.createNewBuildingListItem = function createNewBuildingListItem(){
        try{
            const element = this.createListItem();
                domElementCreator.removeClassesContains(element, "border");
                domElementCreator.removeClassesContains(element, "padding");
                element.classList.add("border5px");
                element.classList.add("bordercolor150");
                element.classList.add("borderridge");
                element.classList.add("lefttext");
                element.classList.add("minheight85rem");
                element.classList.add("padding0");
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createNewBuildingIcon = function createNewBuildingIcon(backgroundType){
        try{
            const element = document.createElement("DIV");
                element.classList.add("absolute");
                element.classList.add("backgroundpositioncenter");
                element.classList.add("backgroundsize100percent");
                element.classList.add("inlineblock");
                element.classList.add("height75rem");
                element.classList.add("width75rem");
                element.classList.add(backgroundType);
                
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createNewBuildingContentContainer = function createNewBuildingContentContainer(){
        try{
            const element = document.createElement("DIV");
                element.classList.add("border5px");
                element.classList.add("borderbottomridge");
                element.classList.add("borderleftridge");
                element.classList.add("bordercolor150");
                element.classList.add("marginleft80rem");
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createNewBuildingTitle = function createNewBuildingTitle(title){
        try{
            title = title || "";
            const element = document.createElement("DIV");
                element.classList.add("border5px");
                element.classList.add("borderbottomridge");
                element.classList.add("bordercolor150");
                element.classList.add("centertext");
                element.classList.add("fontsize20rem");
                
                element.innerHTML = title;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}