function showStar(star){
    try{
        alert(star);
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}