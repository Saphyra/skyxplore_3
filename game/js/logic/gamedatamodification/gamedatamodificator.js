function GameDataModificator(){
    //Új épület építése
    const newBuildingBuilder = new NewBuildingBuilder(this);
        this.buildNewBuilding = newBuildingBuilder.buildNewBuilding;
}