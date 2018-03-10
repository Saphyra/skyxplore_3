function FarmListView(){
    //Farmok listanézetének megjelenítése
    
    this.showView = function showView(starid){
        //Ablak megjelenítése
        try{
            this.displayFarmListData(starid);
            back.switchWindow("#farmlistviewcontainer");
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.displayFarmListData = function displayFarmListData(starid){
        //Adatok megjelenítése
        try{
            const star = gameData.stars[starid];
            displaySliders(star);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function displaySliders(star){
            //Étel státusz csúszkák megjelenítése
            try{
                const container = document.getElementById("farmlistviewslidercontainer");
                    container.innerHTML = "";
                    
                    const minSlider = domElementCreator.createFarmListViewFoodStatusSlider(star, "min", new ApplySliderChanges());
                container.appendChild(minSlider);
                    const maxSlider = domElementCreator.createFarmListViewFoodStatusSlider(star, "max", new ApplySliderChanges());
                container.appendChild(maxSlider);
                    const prioritySlider = domElementCreator.createFarmListViewPrioritySlider(star);
                container.appendChild(prioritySlider);
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
            function ApplySliderChanges(){
                this.oldValue;
                
                this.apply = function(star, slider, sliderValueLabel, type){
                    const minValue = type === "min" ? Number(slider.value) : star.data.storagestatus["minfridgestatus"];
                    const maxValue = type === "max" ? Number(slider.value) : star.data.storagestatus["maxfridgestatus"];
                    
                    if(maxValue < minValue){
                        alert("A maximális telítettség nem lehet kisebb, mint a minimális.");
                        slider.value = this.oldValue;
                    }else{
                        star.data.storagestatus[type + "fridgestatus"] = slider.value;
                        this.oldValue = slider.value;
                        sliderValueLabel.innerHTML = slider.value + "%";
                    }
                }
            }
}