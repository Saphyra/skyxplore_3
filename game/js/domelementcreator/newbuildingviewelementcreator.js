function NewBuildingViewElementCreator(parent){
    const domElementCreator = parent;
    
    this.createNewBuildingListItem = function createNewBuildingListItem(){
        try{
            const element = this.createListItem();
                domElementCreator.removeClassesContains(element, "border");
                domElementCreator.removeClassesContains(element, "padding");
                domElementCreator.removeClassesContains(element, "margin");
                element.classList.add("border5px");
                element.classList.add("bordercolor150");
                element.classList.add("borderridge");
                element.classList.add("lefttext");
                element.classList.add("marginbottom10rem");
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
    
    this.createNewBuildingResourceContainer = createNewBuildingResourceContainer;
    function createNewBuildingResourceContainer(){
        try{
            const element = document.createElement("DIV");
                element.classList.add("border3px");
                element.classList.add("borderridge");
                element.classList.add("bordercolor50");
                element.classList.add("margin025rem");
                element.classList.add("padding025rem");
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createNewBuildingHRCell = function createNewBuildingHRCell(buildingTime, hr){
        try{
            const element = createNewBuildingResourceContainer();
                element.innerHTML = "Építési idő: " + buildingTime + " / Max. munkás: " + hr;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createNewBuildngResourceElement = function createNewBuildngResourceElement(resName, amount){
        try{
            const element = document.createElement("DIV");
                element.classList.add("fontsize0125rem");
                element.innerHTML = resName + ": " + amount;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createBuildButtonContainer = function createBuildButtonContainer(){
        try{
            const element = document.createElement("DIV");
                element.classList.add("centertext");
                element.classList.add("margin5rem");
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createBuildButton = function createBuildButton(){
        try{
            const element = document.createElement("BUTTON");
                element.classList.add("fontsize0125rem");
                element.innerHTML = "Felépít";
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}