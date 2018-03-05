function Back(){
    viewStack = ["#galaxyviewcontainer"];
    
    this.addBackListeners = function addBackListeners(){
        //Eseményfigyelő hozzáadása az ablakokhoz
        try{
            $(".viewcontainer").contextmenu(function(){back.backOneWindow()});
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.switchWindow = function switchWindow(windowid){
        //A megadott id-jű ablak megjelenítése
        try{
            $(".maincontainer").css("display", "none");
            viewStack.push(windowid);
            $(windowid).toggle();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }

    this.backOneWindow = function backOneWindow(){
        //Visszalép egy ablakkal
        try{
            viewStack.pop();
            this.switchWindow(viewStack.pop());
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}