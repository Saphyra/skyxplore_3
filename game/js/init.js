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
    
    this.initialize = function initialize(){
        try{
            
            loadContent();
            document.addEventListener('contextmenu', event => event.preventDefault());
            
            createBeans();
            
            data.loadGameData();
            loadGame();
            map.showMap();
            
            back.addBackListeners();
            animation.addMapListener();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    function createBeans(){
        try{
            window.animation = new Animation();
            window.back = new Back();
            window.buildNewBuilding = new BuildNewBuilding();
            window.counter = new Counter();
            window.data = new Data();
            window.domElementCreator = new DOMElementCreator();
            window.filters = new Filters();
            window.map = new Map();
            window.nameConverter = new NameConverter();
            window.planetView = new PlanetView();
            window.starView = new StarView();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
    function loadGame(){
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
}