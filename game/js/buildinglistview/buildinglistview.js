function BuildingListView(){
    //Épületek lista nézetének megjelenítése
    const farmListView = new FarmListView();
        this.showFarmListView = farmListView.showView;
        this.displayFarmListData = farmListView.displayFarmListData;
}