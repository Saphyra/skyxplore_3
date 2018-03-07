$(document).ready(initializeLazy);

function initializeLazy(){
    //Adatok betöltése
    try{
        window.initializer = new Initializer();
        initializer.initialize();
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
    }
}

function Initializer(){
    this.initialize = function initialize(){
        //Adatok betöltése
        try{
            loadContent();
            document.addEventListener('contextmenu', event => event.preventDefault());
            
            createBeans();
            
            data.loadGameData();
            data.loadGame();
            map.showMap();
            
            back.addBackListeners();
            animation.addMapListener();
            animation.addWindowStateChangeListener();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function createBeans(){
        //Komponensek létrehozása
        try{
            window.animation = new Animation();
            window.back = new Back();
            window.buildNewBuildingView = new BuildNewBuildingView();
            window.counter = new Counter();
            window.data = new Data();
            window.domElementCreator = new DOMElementCreator();
            window.filters = new Filters();
            window.gameDataModificator = new GameDataModificator();
            window.generator = new Generator();
            window.map = new Map();
            window.nameConverter = new NameConverter();
            window.newRound = new NewRound();
            window.order = new Order();
            window.planetView = new PlanetView();
            window.schemaView = new SchemaView();
            window.starView = new StarView();
            window.undoRequest = new UndoRequest();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    
    
    function loadContent(){
        //Nézetek betöltése
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