function starMapElementMouseEnter(element){
    try{
        element.setAttribute("stroke", "blue");
        element.setAttribute("stroke-width", 3);
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function starMapElementMouseOut(element){
    try{
        element.setAttribute("stroke-width", 0);
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}