function DOMElementCreator(){
    const elementManipulator = new ElementManipulator();
        this.removeClassesContains = elementManipulator.removeClassesContains;
    
    const commonElementCreator = new CommonElementCreator(this);
        this.createCoverElement = commonElementCreator.createCoverElement;
        this.createDIV = commonElementCreator.createDIV;
        this.createListElement = commonElementCreator.createListElement;
        this.createListElementTitle = commonElementCreator.createListElementTitle;
        this.createListItem = commonElementCreator.createListItem;
        this.createTextElement = commonElementCreator.createTextElement;
        this.createTextLabel = commonElementCreator.createTextLabel;
        
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
        this.createBuildButtonContainer = newBuildingViewElementCreator.createBuildButtonContainer;
        this.createBuildButton = newBuildingViewElementCreator.createBuildButton;
        this.createNewBuildingPrioritySlider = newBuildingViewElementCreator.createNewBuildingPrioritySlider;
        
    const planetViewElementCreator = new PlanetViewElementCreator(this);
        this.createPlanetSlotContainer = planetViewElementCreator.createPlanetSlotContainer;
        this.createPlanetSlotContainerName = planetViewElementCreator.createPlanetSlotContainerName;
        this.createPlanetSlot = function(type){
            const backgroundType = getBackgroundByType(type);
            return planetViewElementCreator.createPlanetSlot(backgroundType);
        }
        this.createPlanetSlotTitle = planetViewElementCreator.createPlanetSlotTitle;
        this.createPlanetSlotLevel = planetViewElementCreator.createPlanetSlotLevel;        
        
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
                    log("Unknown building type: " + type);
                    background = null;
                break;
            }
            
            return background;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}