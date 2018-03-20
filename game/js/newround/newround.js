function NewRound(){
    const starSteps = new StarSteps();
    const mi = new MI();
    
    this.newRound = function newRound(){
        //Új kör futtatása
        try{
            //Log törlése
            document.getElementById("log").innerHTML = "";
            
            log("Új kör futtatása indul.", "warn");
            data.emptyCache("newroundtemp");
            log("Gyorsítótár ürítve.", "debug");
            mi.runEnemyRound();
            
            log("Körfeldolgozó futtatása...", "warn");
            starSteps.runStarSteps();
            log("Körfeldolgozó futtatása befejeződött.", "warn");
            
            log("Gyorsítótár ürítve.", "debug");
            data.emptyCache("newroundtemp");
            refresh();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function refresh(){
            //Ablakok újratöltése
            log("Ablakok újratöltése...", "debug");
        }
}