function BuildingListView(){
    //Épületek lista nézetének megjelenítése
    const sliderDisplayer = new SliderDisplayer(this);
        this.displaySliders = sliderDisplayer.displaySliders;
        
    const buildingDisplayer = new BuildingDisplayer(this);
        this.displayBuildings = buildingDisplayer.displayBuildings;
    
    //Nézetek
    const farmListView = new FarmListView(this);
        this.showFarmListView = farmListView.showView;
        
    const mineListView = new MineListView(this);
        
    this.showView = function showView(type, starid){
        try{
            switch(type){
                case "farm":
                    farmListView.showView(starid);
                break;
                case "mine":
                    mineListView.showView(starid);
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
            farmListView.displayFarmListData(starid);
            //mineListView.displayMineListData(starid);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}