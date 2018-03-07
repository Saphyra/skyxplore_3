function NewRound(){
    this.newRound = function newRound(){
        try{
            log("New round started.");
            //TODO implement
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}