function QueueService(queueData){
    const queue = convertQueue(queueData);
    
    this.getQueue = function(){return queue};
    
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