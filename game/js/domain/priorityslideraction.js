function PrioritySliderAction(request, queue){
    //Kérelem visszavonása / prioritás megváltoztatása
    this.request = request;
    this.queue = queue;
    
    this.change = function(newPriority){
        this.request.priority = newPriority;
        starView.displayQueue(this.queue);
    };
    this.run = function(value){
        undoRequest.undo(request);
    }
}