function Back(){
    this.viewStack = ["#galaxyviewcontainer"];
    
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
            this.viewStack.push(windowid);
            $(windowid).toggle();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }

    this.backOneWindow = function backOneWindow(){
        try{
            this.viewStack.pop();
            this.switchWindow(this.viewStack.pop());
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}