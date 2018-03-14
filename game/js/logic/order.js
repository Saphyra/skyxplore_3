function Order(){
    this.orderQueueByPriority = function orderQueueByPriority(queue){
        //Prioritás alapján csökkenő sorrendbe rendezi az építési listát
        try{
            const requests = [];
            for(let requestid in queue){
                const request = queue[requestid];
                requests.push(request);
            }
            
            requests.sort(function(a, b){return b.priority - a.priority});
            
            const result = {};
            for(let index in requests){
                const req = requests[index];
                result[req.requestid] = req;
            }
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.orderRequestsByPriority = function orderRequestsByPriority(requests){
        try{
            requests.sort(function(a, b){return b.priority - a.priority});
            
            return requests;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.orderBuildingsByName = function orderBuildingsByName(buildings){
        //Épületek sorba rendezése név szerint
        try{
            const arr = [];
            const result = {};

            for(let type in buildings){
                arr.push({type: type, data: buildings[type]});
            }
            
            arr.sort(function(a, b){
                return data.getElementData({source: a.type, key: "typename"}).localeCompare(data.getElementData({source: b.type, key: "typename"}))
            });
            
            for(let index in arr){
                result[arr[index].type] = arr[index].data;
            }
            
            return result;
            
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.orderBuildingDatasByName = function orderBuildingDatasByName(buildings){
        //Épületek sorba rendezése név szerint
        try{
            return buildings.sort(function(a, b){a.name.localeCompare(b.name)});
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}