function MineListView(parent){
    //Bányák listanézetének megjelenítése
    const buildingListView = parent;
    
    this.displayMineListData = displayMineListData;
    
    this.showView = function showView(starid){
        //Ablak megjelenítése
        try{
            displayMineListData(starid);
            back.switchWindow("#minelistviewcontainer");
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function displayMineListData(starid){
        //Adatok megjelenítése
        try{
            buildingListView.displaySliders(getSliderData(starid));
            buildingListView.displayBuildings(getMineData(starid));
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function getSliderData(starid){
            try{
                const sliderData = {
                    container: document.getElementById("minelistviewslidercontainer"),
                    starid: starid,
                    displayableResources: ["resource"],
                };
                
                return sliderData;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function getMineData(starid){
        //Épület lista megjelenítése
            try{
                const star = gameData.getStarService().getStarById(starid);
                const buildingData = {
                    buildings: gameData.getBuildingService().getBuildingsOfTypeOfStar(star.getStarId(), "mine", true),
                    container: document.getElementById("minelistviewbuildinglistcontainer")
                }
                
                return buildingData;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}