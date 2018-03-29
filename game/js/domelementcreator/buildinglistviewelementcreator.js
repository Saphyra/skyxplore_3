function BuildingListViewElementCreator(parent){
    const domElelementCreator = parent;
    this.createBuildingListViewSliderText = createSliderText;
    
    this.createBuildingListViewResourceStatusSlider = function createBuildingListViewResourceStatusSlider(data, applyChanges){
        try{
            const container = domElementCreator.createListItem();
                container.appendChild(createSliderText(data.label));
                
                const label = domElementCreator.createTextLabel();
                    const slider = createResourceStatusSlider(data.initialValue);
                label.appendChild(slider);
                    const sliderValue = domElementCreator.createTextElement(slider.value + "%");
                label.appendChild(sliderValue);
                    slider.onchange = function(){
                        applyChanges.apply(slider, sliderValue, data.type);
                    }
                
            container.appendChild(label);
            return container;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function createSliderText(text){
            try{
                const element = document.createElement("DIV");
                    element.classList.add("fontsize0125rem");
                    
                    element.innerHTML = text;
                return element;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function createResourceStatusSlider(initialValue){
            try{
                const element = document.createElement("INPUT");
                    element.type = "range";
                    element.min = 0;
                    element.max = 100;
                    element.step = 10;
                    element.value = initialValue;
                    element.classList.add("verticalcenter");
                    element.classList.add("marginleft5rem");
                    element.classList.add("marginright5rem");
                return element;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
    this.createBuildingListViewPrioritySlider = function createBuildingListViewPrioritySlider(text, storageStatus){
        try{
            const element = domElementCreator.createListItem();
                element.appendChild(domElementCreator.createBuildingListViewSliderText(text));
                const label = domElementCreator.createTextLabel();
                    const slider = domElementCreator.createPrioritySlider(storageStatus.priority);
                label.appendChild(slider);
                    const sliderValue = domElementCreator.createTextElement(slider.value);
                label.appendChild(sliderValue);
            element.appendChild(label);
            
                slider.onchange = function(){
                    storageStatus.priority = Number(slider.value);
                    sliderValue.innerHTML = slider.value;
                }
                
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createBuildingListViewBuildStatus = function createBuildingListViewBuildStatus(status, maxStatus, type){
        try{
            const element = domElementCreator.createBuildStatus(status, maxStatus, type);
                domElementCreator.removeClassesContains(element, "fontsize");
                domElementCreator.removeClassesContains(element, "border");
                
                element.classList.add("border3px");
                element.classList.add("bordercolor150");
                element.classList.add("borderinset");
                element.classList.add("fontsize0125rem");
                element.classList.add("margin5rem");
                element.classList.add("padding025rem");
                
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}