function StarData(starData){
    const queueService = new QueueService(starData.queue);
    const resources = starData.resources;
    let foodProductionPriority = starData.foodproductionpriority;
    const storageStatus = starData.storagestatus;
    const citizenNum = starData.citizennum;
    
    this.getQueueService = function(){return queueService};
    this.getResources = function(){return resources};
    this.getFoodProductionPriority = function(){return foodProductionPriority};
    this.getStorageStatus = function(){return storageStatus};
    this.getCitizenNum = function(){return citizenNum};
    
    this.setFoodProductionPriority = function(newPriority){foodProductionPriority = newPriority};
}