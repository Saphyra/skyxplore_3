function Generator(){
    this.generateId = function generateId(prefix, reserved){
        //Egyedi azonosító generálása
        try{
            let id;
            do{
                id = prefix;
                for(let x = 0; x < 10; x++){
                    id += random(0, 9);
                }
            }while(reserved.indexOf(id) > -1);
            
            return id;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.random = random;
    function random(min, max){
        //Véletlenszerű érték
        try{
            if(typeof min !== "number" || typeof max !== "number") return NaN;
            var num = Math.floor(Math.random() * (max - min + 1) ) + min;
            return num;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}