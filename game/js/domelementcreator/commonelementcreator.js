function CommonElementCreator(parent){
    const domElementCreator = parent;
    
    this.createCoverElement = function createCoverElement(){
        //Teljes tárolót lefedő fólia, félig átlátszó háttérrel
        try{    
            const element = document.createElement("DIV");
                element.classList.add("absolute0");
                element.classList.add("backgroundblack5");
                element.classList.add("overflowauto");
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createListElement = function createListElement(content){
        //Lista tároló, sötét szegéllyel
        try{
            content = content || "";
            
            const element = document.createElement("DIV");
                element.classList.add("border3px");
                element.classList.add("borderbottom5px");
                element.classList.add("bordercolor50");
                element.classList.add("borderridge");
                element.classList.add("margin025rem");
                element.classList.add("overflowxauto");
                element.classList.add("overflowyhidden");
                
                element.innerHTML = content;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createListElementTitle = function createListElementTitle(title){
        //Lista cím
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createListItemUnhovered = function createListItemUnhovered(content){
        //Lista elem szegélyszín változtatás nélkül
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
                
                element.innerHTML = content;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createListItem = function createListItem(content){
        //Lista elem, szegélyszín változtatással
        try{
            content = content || "";
            const element = this.createListItemUnhovered(content);
                $(element).hover(
                        function(){
                            domElementCreator.removeClassesContains(element, "bordercolor");
                            element.classList.add("bordercolor255");
                        },
                        function(){
                            domElementCreator.removeClassesContains(element, "bordercolor");
                            element.classList.add("bordercolor150");
                        }
                );
            
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createTextElement = function createTextElement(text){
        //Inline szöveg megjelenítése
        try{
            const element = document.createElement("SPAN");
                element.innerHTML = text;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createTextCell = function createTextCell(text, size, align){
        //Inline szöveg megjelenítése
        try{
            const element = document.createElement("DIV");
                element.innerHTML = text;
                element.style.fontSize = size || "1rem";
                element.style.textAlign = align || "left";
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createTextLabel = function createTextLabel(text){
        //INPUT mezőhöz tartozó felirat
        try{
            text = text || "";
            const element = document.createElement("LABEL");
                element.innerHTML = text;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createBuildStatus = function createBuildStatus(status, maxStatus){
        //Építési állapotot jelző sáv, megfelelő arányban kitöltve
        try{
            const element = document.createElement("DIV");
                element.classList.add("backgroundblack5");
                element.classList.add("backgroundgreenpixel");
                element.classList.add("backgroundnorepeat");
                element.classList.add("backgroundpositionleftcenter");
                element.classList.add("centertext");
                
                const completed = maxStatus - status;
                const backgroundWidth = Math.round(completed / maxStatus * 100) + "%";
                element.style.backgroundSize = backgroundWidth + " 100%";
                
                element.innerHTML = "Építés: " + completed + "/" + maxStatus;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createPrioritySliderButton = function createPrioritySliderButton(buttonText, defaultValue, action){
        /*Prioritást állító csúszka a hozzá tartozó feliratokkal, és küldés gombbal.
            buttonText: a gomb szövege
            defaultValue: a csúszka kezdőértéke
            action: az események kezeléséhez tartozó objektum
                action.change(sliderValue): A slider értékének megváltozásakor fut
                action.run(sliderValue): A gomb megnyomásakor fut
        */
        try{
            const buildButtonContainer = createBuildButtonContainer();
                //Csúszka és szövegek létrehozása
                const label = this.createTextLabel("Prioritás: ");
                    const slider = this.createPrioritySlider(defaultValue);
                    //Felirat értékének szinkronizálása a csúszka értékével
                    const sliderValue = this.createTextElement(slider.value);
                        slider.onchange = function(){
                        action.change(slider.value);
                        sliderValue.innerHTML = slider.value;
                    }
                label.appendChild(sliderValue);
                label.appendChild(slider);
            buildButtonContainer.appendChild(label);
                
                //Gomb létrehozása
                const buildButton = createBuildButton(buttonText);
                    buildButton.onclick = function(){action.run(slider.value)};
            buildButtonContainer.appendChild(buildButton);
            
            return buildButtonContainer;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function createBuildButtonContainer(){
            //Prioritást állító csúszka és  ahozzá tartozó elemek közös tárolója
            try{
                const element = document.createElement("DIV");
                    element.classList.add("centertext");
                    element.classList.add("fontsize0125rem");
                    element.classList.add("margin5rem");
                return element;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function createBuildButton(text){
            //Prioritást állító csúszkához tartozó gomb
            try{
                const element = document.createElement("BUTTON");
                    element.classList.add("fontsize0125rem");
                    element.innerHTML = text;
                return element;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        this.createPrioritySlider = function createPrioritySlider(value){
            //Prioritást állító csúszka létrehozása a megadott kezdőértékkel
            try{
                const element = document.createElement("INPUT");
                    element.type = "range";
                    element.min = 1;
                    element.max = 10;
                    element.step = 1;
                    element.value = value;
                    element.classList.add("marginleft5rem");
                    element.classList.add("marginright5rem");
                    element.classList.add("verticalcenter");
                return element;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        this.createListElementLeftText = function createListElementLeftText(content){
            try{
                const element = this.createListElement(content);
                    element.classList.add("lefttext");
                return element;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}