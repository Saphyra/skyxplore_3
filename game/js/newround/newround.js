function NewRound(){
    const starSteps = new StarSteps();
    const mi = new MI();
    
    this.newRound = function newRound(){
        //Új kör futtatása
        try{
            data.emptyCache("newroundtemp");
            mi.runEnemyRound();
            
            starSteps.runStarSteps();
            
            data.emptyCache("newroundtemp");
            refresh();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function refresh(){
            //Ablakok újratöltése
        }
}