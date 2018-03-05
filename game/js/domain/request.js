function Request(requestid, type, data, priority, elementid, cancel){
    this.requestid = requestid;
    this.type = type;
    this.data = data;
    this.priority = priority;
    this.elementid = elementid;
    this.cancel = cancel;
    this.undo = function(){cancel.undo()};
}