function BuildingListView(){
    //Épületek lista nézetének megjelenítése
    const farmListView = new FarmListView();
        this.showFarmListView = farmListView.showView;
        this.displayFarmListData = farmListView.displayFarmListData;
        
    this.refresh = function refresh(starid){
        //Lista nézetek újratöltése
        try{
            this.displayFarmListData(starid);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}