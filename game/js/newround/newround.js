function NewRound(){
    this.newRound = function newRound(){
        //Új kör futtatása
        try{
            runStarSteps();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function runStarSteps(){
            //Csillagok körének a futtatása
            try{
                /*
                    -1. Népesség növelése
                    0. Ételtermelés, ahol az állapot a limit alatt van
                    1. Összes request összegyűjtése minden csillagról
                    2. Requestek sorba rendezése prioritás szerint
                    3. Étel termelés, ahol van szabad munkaerő, és az állapot max limit alatt van.
                */
                
                const ownedStars = filters.getOwnedStars();
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}