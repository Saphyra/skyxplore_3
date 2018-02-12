function StarViewQueueDisplayer(){
    this.displayQueue = function displayQueue(queue){
        try{
            const container = document.getElementById("starviewqueue");
                container.innerHTML = "";
                
            if(!queue.length){
                container.innerHTML = "<DIV class='listtitle'>Nincs tétel</DIV>";
            }else{
                for(let index in queue){
                    const element = queue[index];
                    
                    const item = document.createElement("DIV");
                        item.className = "listitem";
                        item.innerHTML = "Tétel";
                    container.appendChild(item);
                }
            }
            
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}