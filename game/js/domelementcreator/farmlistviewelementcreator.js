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
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}