function BuildingListView(){
    //Épületek lista nézetének megjelenítése
    const farmListView = new FarmListView();
        this.showFarmListView = farmListView.showView;
        this.displayFarmListData = farmListView.displayFarmListData;
        
    this.showView = function showView(type, starid){
        try{
            switch(type){
                case "farm":
                    this.showFarmListView(starid);
                break;
                default:
                    log("BuildingListView.shovView: Unknown building type: " + type, "error");
                break;
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
        
    this.refresh = function refresh(starid){
        //Lista nézetek újratöltése
        try{
            this.displayFarmListData(starid);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}