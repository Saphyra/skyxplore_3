function NewRound(){
    const starSteps = new StarSteps();
    const mi = new MI();
    
    this.newRound = function newRound(){
        //Új kör futtatása
        try{
            //Log törlése
            document.getElementById("log").innerHTML = "";
            
            log("Új kör futtatása indul.", "look");
            data.emptyCache("newroundtemp");
            log("Gyorsítótár ürítve.", "process");
            mi.runEnemyRound();
            
            log("Körfeldolgozó futtatása...", "process");
            starSteps.runStarSteps();
            log("Körfeldolgozó futtatása befejeződött.", "process");
            
            log("Gyorsítótár ürítve.", "process");
            data.emptyCache("newroundtemp");
            refresh();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function refresh(){
            //Ablakok újratöltése
            log("Ablakok újratöltése...", "process");
            back.showMap();
        }
}