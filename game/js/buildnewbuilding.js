function BuildNewBuilding(){
    this.showPage = function showPage(planetid, slot){
        try{
            back.switchWindow("#newbuildingviewcontainer");
            const buildableBuildings = filters.getBuildableBuildingsOfSlot(slot);
            displayBuildableBuildings(buildableBuildings);
            
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
        
        function displayBuildableBuildings(buildableBuildings){
            try{
                
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
}