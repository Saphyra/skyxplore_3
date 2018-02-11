initializeEager();
$(document).ready(initializeLazy);

function initializeLazy(){
    try{
        document.addEventListener('contextmenu', event => event.preventDefault());
        loadContent();
        loadGame();
        addMapListener();
        addBackListeners();
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function initializeEager(){
    try{
        window.viewStack = ["#galaxyviewcontainer"];
        window.cache = {};
    }catch(err){
        alert(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function loadContent(){
    try{
        const request = new XMLHttpRequest();
            request.open("GET", "content/contentloader.php", 0);
            request.send();
            document.getElementById("content").innerHTML = request.responseText;
    }catch(err){
        alert(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function loadGame(){
    try{
        const path = "saves/" + window.startGameid + ".json";
        const request = new XMLHttpRequest();
            request.open("GET", path, 1);
            request.send();
            request.onreadystatechange = function(){
                if(request.readyState === 4 && request.status === 200){
                    window.gameData = JSON.parse(request.responseText);
                    showMap();
                }
            }
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}