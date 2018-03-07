function SchemaView(){
    this.showChemaView = function showChemaView(){
        try{
            log("Séma nézet");
            //TODO implement
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}