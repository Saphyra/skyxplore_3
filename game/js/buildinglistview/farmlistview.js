function FarmListView(parent){
    //Farmok listanézetének megjelenítése
    const buildingListView = parent;
    
    this.displayFarmListData = displayFarmListData;
    
    this.showView = function showView(starid){
        //Ablak megjelenítése
        try{
            displayFarmListData(starid);
            back.switchWindow("#farmlistviewcontainer");
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function displayFarmListData(starid){
        //Adatok megjelenítése
        try{
            buildingListView.displaySliders(getSliderData(starid));
            buildingListView.displayBuildings(getFarmData(starid));
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function getSliderData(starid){
            //Sliderek megjelenítéséhez szükséges adatok
            try{
                const sliderData = {
                    container: document.getElementById("farmlistviewslidercontainer"),
                    starid: starid,
                    displayableResources: ["food"],
                };
                
                return sliderData;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function getFarmData(starid){
            //Épület lista megjelenítése
            try{
                const star = gameData.getStarService().getStarById(starid);
                const buildingData = {
                    buildings: gameData.getBuildingService().getBuildingsOfTypeOfStar(star.getStarId(), "farm", true),
                    container: document.getElementById("farmlistviewbuildinglistcontainer")
                }
                
                return buildingData;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}