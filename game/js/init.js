$(document).ready(initializeLazy);

function initializeLazy(){
    try{
        window.initializer = new Initializer();
        initializer.initialize();
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

function Initializer(){
    this.initialize = function(){
        this.loadContent();
        document.addEventListener('contextmenu', event => event.preventDefault());
        
        window.animation = new Animation();
        window.back = new Back();
        window.data = new Data();
        window.filters = new Filters();
        window.nameConverter = new NameConverter();
        window.planetView = new PlanetView();
        window.map = new Map();
        
        
        this.loadGame();
        map.showMap();
        
        back.addBackListeners();
        animation.addMapListener();
    }
    
    this.loadGame = function loadGame(){
        try{
            const path = "saves/" + window.startGameid + ".json";
            const request = new XMLHttpRequest();
                request.open("GET", path, 0);
                request.send();
                window.gameData = JSON.parse(request.responseText);
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    this.loadContent = function loadContent(){
        try{
            const request = new XMLHttpRequest();
                request.open("GET", "content/contentloader.php", 0);
                request.send();
                document.getElementById("content").innerHTML = request.responseText;
        }catch(err){
            alert(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}