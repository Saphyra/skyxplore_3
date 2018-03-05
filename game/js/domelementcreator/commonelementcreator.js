function CommonElementCreator(domElementCreator){
    const parent = domElementCreator;
    
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
    
    this.createDIV = function createDIV(){
        return document.createElement("DIV");
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
                            parent.removeClassesContains(element, "bordercolor");
                            element.classList.add("bordercolor255");
                        },
                        function(){
                            parent.removeClassesContains(element, "bordercolor");
                            element.classList.add("bordercolor150");
                        }
                );
            
                element.innerHTML = content;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createTextElement = function createTextElement(text){
        try{
            const element = document.createElement("SPAN");
                element.innerHTML = text;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createTextLabel = function createTextLabel(text){
        try{
            const element = document.createElement("LABEL");
                element.innerHTML = text;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createBuildStatus = function createBuildStatus(status, maxStatus){
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.createPrioritySliderButton = function createPrioritySliderButton(buttonText, defaultValue, action){
        try{
            const buildButtonContainer = createBuildButtonContainer();
                const label = this.createTextLabel("Prioritás: ");
                    const slider = createPrioritySlider(defaultValue);
                    const sliderValue = this.createTextElement(slider.value);
                        slider.onchange = function(){
                        action.change(slider.value);
                        sliderValue.innerHTML = slider.value;
                    }
                label.appendChild(sliderValue);
                label.appendChild(slider);
            buildButtonContainer.appendChild(label);
                
                const buildButton = createBuildButton(buttonText);
                    buildButton.onclick = function(){action.run(slider.value)};
            buildButtonContainer.appendChild(buildButton);
            
            return buildButtonContainer;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
        function createBuildButtonContainer(){
            try{
                const element = document.createElement("DIV");
                    element.classList.add("centertext");
                    element.classList.add("fontsize0125rem");
                    element.classList.add("margin5rem");
                return element;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
        
        function createBuildButton(text){
            try{
                const element = document.createElement("BUTTON");
                    element.classList.add("fontsize0125rem");
                    element.innerHTML = text;
                return element;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
        
        function createPrioritySlider(value){
            try{
                const element = document.createElement("INPUT");
                    element.type = "range";
                    element.min = 1;
                    element.max = 10;
                    element.step = 1;
                    element.value = value;
                    element.classList.add("verticalcenter");
                    element.classList.add("marginleft5rem");
                    element.classList.add("marginright5rem");
                return element;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
}