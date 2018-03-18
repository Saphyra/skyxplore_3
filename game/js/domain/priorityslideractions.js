function PrioritySliderModificationAction(request, queue){
    //Kérelem visszavonása / prioritás megváltoztatása
    this.request = request;
    this.queue = queue;
    
    this.change = function(newPriority){
        this.request.setPriority(newPriority);
        starView.displayQueue(this.request.getStarId());
    };
    this.run = function(value){
        undoRequest.undo(request);
    }
}

function PrioritySliderBuildNewBuildingAction(planetid, building){
    //Épület felépítése
    this.planetid = planetid;
    this.building = building;
    this.change = function(){};
    this.run = function(value){
        gameDataModificator.buildNewBuilding(this.planetid, this.building, value);
    }
}

function PrioritySliderUpgradeAction(buildingid){
    //Épület fejlesztéséhez való kérlem összeállítása
    this.buildingid = buildingid;
    this.change = function(){};
    this.run = function(value){
        gameDataModificator.upgradeBuilding(this.buildingid, value);
    }
}