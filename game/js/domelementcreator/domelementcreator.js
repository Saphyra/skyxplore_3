function DOMElementCreator(){
    //Elemek módosítása
    const elementManipulator = new ElementManipulator();
        this.removeClassesContains = elementManipulator.removeClassesContains;
    
    //Közös elemek létrehozása
    const commonElementCreator = new CommonElementCreator(this);
        this.createCoverElement = commonElementCreator.createCoverElement;
        this.createDIV = commonElementCreator.createDIV;
        this.createListElement = commonElementCreator.createListElement;
        this.createListElementTitle = commonElementCreator.createListElementTitle;
        this.createListItem = commonElementCreator.createListItem;
        this.createTextElement = commonElementCreator.createTextElement;
        this.createTextLabel = commonElementCreator.createTextLabel;
        this.createBuildStatus = commonElementCreator.createBuildStatus;
        this.createPrioritySliderButton = commonElementCreator.createPrioritySliderButton;
        
    //Új épület létrehozása oldal
    const newBuildingViewElementCreator = new NewBuildingViewElementCreator(this);
        this.createNewBuildingListItem = newBuildingViewElementCreator.createNewBuildingListItem;
        this.createNewBuildingIcon = function(type){
            const backgroundType = getBackgroundByType(type);
            return newBuildingViewElementCreator.createNewBuildingIcon(backgroundType);
        }
        this.createNewBuildingContentContainer = newBuildingViewElementCreator.createNewBuildingContentContainer;
        this.createNewBuildingTitle = newBuildingViewElementCreator.createNewBuildingTitle;
        this.createNewBuildingHRCell = newBuildingViewElementCreator.createNewBuildingHRCell;
        this.createNewBuildingResourceContainer = newBuildingViewElementCreator.createNewBuildingResourceContainer;
        this.createNewBuildngResourceElement = newBuildingViewElementCreator.createNewBuildngResourceElement;
        
    //Bolygó nézet
    const planetViewElementCreator = new PlanetViewElementCreator(this);
        this.createPlanetSlotContainer = planetViewElementCreator.createPlanetSlotContainer;
        this.createPlanetSlotContainerName = planetViewElementCreator.createPlanetSlotContainerName;
        this.createPlanetSlot = function(type){
            const backgroundType = getBackgroundByType(type);
            return planetViewElementCreator.createPlanetSlot(backgroundType);
        }
        this.createPlanetSlotTitle = planetViewElementCreator.createPlanetSlotTitle;
        this.createPlanetSlotBuildStatus = planetViewElementCreator.createPlanetSlotBuildStatus;
        this.createPlanetSlotLevel = planetViewElementCreator.createPlanetSlotLevel;        
        
    //Csillag nézet
    const starViewElementCreator = new StarViewElementCreator(this);
        this.createPlanetSlotListItem = function(num, slot){
            let borderColor;
            if(num === slot && num !== undefined){
                borderColor = "bordercolorred";
            }else if(num){
                borderColor = "bordercolorgreen";
            }else{
                borderColor = "bordercolor150";
            }
            
            return starViewElementCreator.createPlanetSlotListItem(borderColor);
        }
        this.createStarViewPlanet = starViewElementCreator.createStarViewPlanet;
        this.createStarViewPlanetName = starViewElementCreator.createStarViewPlanetName;
        this.createStarViewPlanetDescription = starViewElementCreator.createStarViewPlanetDescription;
        this.createStarViewQueueBuildStatus = starViewElementCreator.createStarViewQueueBuildStatus;
    
    //Elem típusához tartozó háttér osztálynevének kiválasztása
    function getBackgroundByType(type){
        try{
            let background;
            switch(type){
                case "farm":
                    background = "backgroundfarm"
                break;
                case "mine":
                    background = "backgroundmine";
                break;
                case "factory":
                    background = "backgroundfactory";
                break;
                case "house":
                    background = "backgroundhouse";
                break;
                case "fridge":
                case "depot":
                case "storage":
                    background = "backgroundstorage";
                break;
                case "deflector":
                    background = "backgrounddeflector";
                break;
                case "gausscannon":
                    background = "backgroundgausscannon";
                break;
                case "minefield":
                    background = "backgroundminefield";
                break;
                case "repairstation":
                    background = "backgroundrepairstation";
                break;
                case "starbase":
                    background = "backgroundstarbase";
                break;
                case "empty":
                    background = "backgroundplus";
                break;
                default:
                    log(arguments.callee.name + ": Unknown building type: " + type);
                    background = null;
                break;
            }
            
            return background;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}