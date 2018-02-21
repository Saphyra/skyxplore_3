function Back(){
    viewStack = ["#galaxyviewcontainer"];
    
    this.addBackListeners = function addBackListeners(){
        try{
            $(".viewcontainer").contextmenu(function(){back.backOneWindow()});
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.switchWindow = function switchWindow(windowid){
        try{
            $(".maincontainer").css("display", "none");
            viewStack.push(windowid);
            $(windowid).toggle();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }

    this.backOneWindow = function backOneWindow(){
        try{
            viewStack.pop();
            this.switchWindow(viewStack.pop());
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}