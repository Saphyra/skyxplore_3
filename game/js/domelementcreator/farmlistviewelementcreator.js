function FarmListViewElementCreator(parent){
    const domElementCreator = parent;
    
    this.createFarmListViewFoodStatusSlider = function createFarmListViewFoodStatusSlider(star, type, applyChanges){
        try{
            const container = domElementCreator.createListItem();
                container.appendChild(createSliderText(type == "min" ? "Minimum hűtőház telítettség" : "Maximum hűtőház telítettség"));
                
                const label = domElementCreator.createTextLabel();
                    const slider = createFoodStatusSlider(star, type);
                label.appendChild(slider);
                    const sliderValue = domElementCreator.createTextElement(slider.value + "%");
                label.appendChild(sliderValue);
                
                    applyChanges.oldValue = star.data.storagestatus[type + "fridgestatus"];
                    slider.onchange = function(){
                        applyChanges.apply(star, slider, sliderValue, type);
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
        
        function createFoodStatusSlider(star, type){
            try{
                const element = document.createElement("INPUT");
                    element.type = "range";
                    element.min = 0;
                    element.max = 100;
                    element.step = 10;
                    element.value = star.data.storagestatus[type + "fridgestatus"];
                    element.classList.add("verticalcenter");
                    element.classList.add("marginleft5rem");
                    element.classList.add("marginright5rem");
                return element;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
    this.createFarmListViewPrioritySlider = function createFarmListViewPrioritySlider(star){
        try{
            const element = domElementCreator.createListItem();
                element.appendChild(createSliderText("Prioritás"));
            
                const label = domElementCreator.createTextLabel();
                    const slider = domElementCreator.createPrioritySlider(star.data.foodproductionpriority);
                label.appendChild(slider);
                    const sliderValue = domElementCreator.createTextElement(slider.value);
                label.appendChild(sliderValue);
            element.appendChild(label);
            
                slider.onchange = function(){
                    star.data.foodproductionpriority = slider.value;
                    sliderValue.innerHTML = slider.value;
                }
                
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.createFarmListViewBuildStatus = function createFarmListViewBuildStatus(status, maxStatus){
        try{
            const element = domElementCreator.createBuildStatus(status, maxStatus);
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
    
    this.createFarmListViewUpgradeButton = function createFarmListViewUpgradeButton(text, action){
        try{
            const element = document.createElement("DIV");
                element.classList.add("centertext");
                element.classList.add("fontsize0125rem");
                element.classList.add("marginauto");
                element.classList.add("marginbottom0125rem");
                element.classList.add("margintop0125rem");
                element.classList.add("maxwidth200rem");
                element.classList.add("minwidth100rem");
                element.classList.add("padding0125rem");
                element.classList.add("width30percent");
            
                this.convertElementToButton(element, action, true);
            
                element.innerHTML = text;
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}