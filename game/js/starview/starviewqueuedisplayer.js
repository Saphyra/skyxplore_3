function StarViewQueueDisplayer(){
    this.displayQueue = function displayQueue(queue){
        try{
            const container = document.getElementById("starviewqueue");
                container.innerHTML = "";
                
            if(!queue.length){
                container.appendChild(domElementCreator.createListElementTitle("Nincs tétel"));
            }else{
                for(let index in queue){
                    const element = queue[index];
                    
                    const item = domElementCreator.createListItem();
                        item.innerHTML = "Tétel";
                    container.appendChild(item);
                }
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}