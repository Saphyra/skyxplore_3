function Request(requestid, type, data, priority, elementid, cancelFunction){
    this.requestid = requestid;
    this.type = type;
    this.data = data;
    this.priority = priority;
    this.elementid = elementid;
    this.undo = cancelFunction;
}