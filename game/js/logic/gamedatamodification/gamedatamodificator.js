function GameDataModificator(){
    const newBuildingBuilder = new NewBuildingBuilder(this);
        this.buildNewBuilding = newBuildingBuilder.buildNewBuilding;
}