function QueueService(queueData){
    const queue = convertQueue(queueData);
    
    this.getQueue = function(){return queue};
    this.addRequest = function(request){queue[request.getRequestId()] = request};
    this.deleteRequest = function(requestid){delete queue[requestid]};
    this.getRequestById = function(requestid){return queue[requestid] || null};
    this.getRequestIds = function(){return Object.keys(queue)};
    this.orderQueueByPriority = orderQueueByPriority;
    
    function orderQueueByPriority(queue){
        //Kérelmek prioritás szerinti sorba rendezése
        try{
            const requests = Object.values(queue);
            requests.sort(function(a, b){return b.getPriority() - a.getPriority()});
            
            const result = {};
            for(let rindex in requests){
                const request = requests[rindex];
                result[request.getRequestId()] = request;
            }
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function convertQueue(queueData){
            try{
                const result = {};
                    for(let requestid in queueData){
                        result[requestid] = new Request(queueData[requestid]);
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}