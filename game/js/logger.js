function log(message){
    //Logolás
    try{
        document.getElementById("logcontainer").style.display = "block";
        const div = document.getElementById("log");
        
        const text = document.createElement("DIV");
            text.innerHTML = message;
        div.appendChild(text);
    }catch(err){
        alert("Hiba a loggerben: " + err.name + " - " + err.message);
    }
    
}