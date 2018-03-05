function Order(){
    this.orderQueueByPriority = function orderQueueByPriority(queue){
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
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}