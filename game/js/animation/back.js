function Back(){
    let viewStack = ["#galaxyviewcontainer"];
    
    this.addBackListeners = function addBackListeners(){
        //Eseményfigyelő hozzáadása az ablakokhoz
        try{
            $(".viewcontainer").contextmenu(function(){back.backOneWindow()});
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.switchWindow = function switchWindow(windowid){
        //A megadott id-jű ablak megjelenítése
        try{
            $(".maincontainer").css("display", "none");
            viewStack.push(windowid);
            $(windowid).toggle();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }

    this.backOneWindow = function backOneWindow(){
        //Visszalép egy ablakkal
        try{
            viewStack.pop();
            this.switchWindow(viewStack.pop());
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.showMap = function showMap(){
        //Visszalépés a térkép nézetre
        try{
            this.switchWindow("#galaxyviewcontainer");
            viewStack = ["#galaxyviewcontainer"];
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}