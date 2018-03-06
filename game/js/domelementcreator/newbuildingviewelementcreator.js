function NewBuildingViewElementCreator(parent){
    const domElementCreator = parent;
    
    this.createNewBuildingListItem = function createNewBuildingListItem(){
        //Lista elem az Új épület nézetre specializálva
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createNewBuildingIcon = function createNewBuildingIcon(backgroundType){
        //Ikon elem létrehozása
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createNewBuildingContentContainer = function createNewBuildingContentContainer(){
        //Tartalom tároló elem létrehozása
        try{
            const element = document.createElement("DIV");
                element.classList.add("border5px");
                element.classList.add("borderbottomridge");
                element.classList.add("borderleftridge");
                element.classList.add("bordercolor150");
                element.classList.add("marginleft80rem");
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createNewBuildingTitle = function createNewBuildingTitle(title){
        //Épület cím elem létrehozása
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createNewBuildingResourceContainer = createNewBuildingResourceContainer;
    function createNewBuildingResourceContainer(){
        //Építéshez szükséges nyersanyagok tároló létrehozása
        try{
            const element = document.createElement("DIV");
                element.classList.add("border3px");
                element.classList.add("borderridge");
                element.classList.add("bordercolor50");
                element.classList.add("margin025rem");
                element.classList.add("padding025rem");
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createNewBuildingHRCell = function createNewBuildingHRCell(buildingTime, hr){
        //Építéshez szükséges rőforrás tároló létrehozása
        try{
            const element = createNewBuildingResourceContainer();
                element.innerHTML = "Építési idő: " + buildingTime + " / Max. munkás: " + hr;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createNewBuildngResourceElement = function createNewBuildngResourceElement(resName, amount){
        //Építéshez szükséges nyersanyagok elem létrehozása
        try{
            const element = document.createElement("DIV");
                element.classList.add("fontsize0125rem");
                element.innerHTML = resName + ": " + amount;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}