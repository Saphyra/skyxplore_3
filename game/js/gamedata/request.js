function Request(requestData){
    const starid = requestData.starid;
    const requestid = requestData.requestid;
    const type = requestData.type;
    const priority = requestData.priority;
    const elementid = requestData.elementid;
    const data = requestData.data;
    
    this.getStarId = function(){return starid};
    this.getRequestId = function(){return requestid};
    this.getType = function(){return type};
    this.getPriority = function(){return priority};
    this.getElementId = function(){return elementid};
    this.getData = function(){return data};
}