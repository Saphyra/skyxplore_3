function SliderDisplayer(parent){
    const buildingListView = parent;
    
    this.displaySliders = function displaySliders(sliderData){
        //Nyersanyaghoz tartozó sliderek megjelenítése
        try{
            const container = sliderData.container;
                container.innerHTML = "";
            const star =  gameData.getStarService().getStarById(sliderData.starid);
                
                const displayableResources = sliderData.displayableResources;
                for(let rindex in displayableResources){
                    const resource = displayableResources[rindex];
                    container.appendChild(createResourceSlider(star, resource));
                }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function createResourceSlider(star, resource){
            //Nyersanyaghoz tartozó sliderek létrehozása
            try{
                const list = domElementCreator.createListElement();
                const resourceData = data.getElementData({source: "resource", key: resource});
                const storageStatus = star.getData().getStorageStatus()[resource];
                
                    const listTitle = domElementCreator.createListElementTitle(resourceData.name);
                list.appendChild(listTitle);
                
                    const minSlider = createStatusSlider("min", storageStatus, resource, resourceData);
                list.appendChild(minSlider);
                
                    const maxSlider = createStatusSlider("max", storageStatus, resource, resourceData)
                list.appendChild(maxSlider);
                
                    const prioritySlider = createPrioritySlider(storageStatus, resourceData);
                list.appendChild(prioritySlider);
                    
                return list;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
            function createStatusSlider(type, storageStatus, resource, resourceData){
                //Státusz slider létrehozása
                try{
                    const storageName = data.getElementData({source: resourceData.storage, key: "typename"});
                    const initialValue = storageStatus[type];
                    
                    const sliderData = {
                        label: (type == "min" ? "Minimum " : "Maximum ") + storageName + " telítettség:",
                        type: type,
                        storageStatus: storageStatus,
                        initialValue: initialValue
                    }
                    
                    const sliderChanges = new ApplySliderChanges(storageStatus, type, initialValue);
                    const slider = domElementCreator.createBuildingListViewResourceStatusSlider(sliderData, sliderChanges);
                    
                    return slider;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
            
            function createPrioritySlider(storageStatus, resourceData){
                //Prioritás slider létrehozása
                try{
                    const label = resourceData.name + " termelés prioritása:";
                    return domElementCreator.createBuildingListViewPrioritySlider(label, storageStatus);
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
    function ApplySliderChanges(storage, changeableIndex, initialValue){
        let oldValue = initialValue
        const storageStatus = storage;
        
        
        this.apply = function(slider, sliderValueLabel, type){
            //Min és max értékek kiválasztása a validációhoz.
            const newValue = Number(slider.value);
            
            const minValue = type === "min" ? newValue : storageStatus.min;
            const maxValue = type === "max" ? newValue : storageStatus.max;
            
            if(maxValue < minValue){
                //Max érték nem lehet nagyobb. mint a min.
                alert("A maximális telítettség nem lehet kisebb, mint a minimális.");
                slider.value = oldValue;
            }else{
                //Értékek felülírása
                storageStatus[changeableIndex] = newValue;
                this.oldValue = newValue;
                sliderValueLabel.innerHTML = newValue + "%";
            }
        }
    }
}