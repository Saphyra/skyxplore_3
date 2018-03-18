function Request(requestData){
    const starid = requestData.starid;
    const requestid = requestData.requestid;
    const type = requestData.type;
    let status = requestData.status;
    let priority = requestData.priority;
    const elementid = requestData.elementid;
    let data = requestData.data;
    
    this.getStarId = function(){return starid};
    this.getRequestId = function(){return requestid};
    this.getType = function(){return type};
    this.getStatus = function(){return status};
    this.getPriority = function(){return priority};
    this.getElementId = function(){return elementid};
    this.getData = function(){return data};
    
    this.setPriority = function(newPriority){priority = newPriority};
}