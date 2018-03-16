function Visibility(visibilityData){
    const visibility = visibilityData.visibility;
    const snapshot = visibilityData.snapshot;
    
    this.getVisibility = function(){return visibility};
    this.getSnapshot = function(){return snapshot};
}