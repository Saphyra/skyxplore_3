function BuildingService(buildingsData){
    const buildings = convertBuildings(buildingsData);
    
    this.getAllBuildings = function(){return buildings};
    this.getBuildingsOfPlanet = getBuildingsOfPlanet;
    this.getBuildingsOfStar = getBuildingsOfStar;
    this.getBuildingsOfTypeOfStar = getBuildingsOfTypeOfStar;
    this.groupBuildingsByRole = groupBuildingsByRole;
    this.groupBuildingsByType = groupBuildingsByType;
    this.orderBuildingsByName = orderBuildingsByName;
    
    function getBuildingsOfPlanet(planetid){
        //Egy bolygó épületei
        try{
            const result = {};
                for(let buildingid in buildings){
                    const building = buildings[buildingid];
                    if(building.getPlanetId() == planetid){
                        result[buildingid] = building;
                    }
                }
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function getBuildingsOfStar(starid){
        //Egy csillag épületei
        try{
            const result = {};
                const planets = gameData.getPlanetService().getPlanetsOfStar(starid);
                for(let planetid in planets){
                    const buildings = getBuildingsOfPlanet(planetid);
                    for(let buildingid in buildings){
                        result[buildingid] = buildings[buildingid];
                    }
                    
                }
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function getBuildingsOfTypeOfStar(starid, type, includeUnderConstruction){
        //Egy csillag bolygóin található épületek a megadott típusból
        try{
            if(includeUnderConstruction == undefined){
                includeUnderConstruction = includeUnderConstruction == undefined ? false : true;
            }
            
            const planets = gameData.getPlanetService().getPlanetsOfStar(starid);
            const result = {};
            
                for(let planetid in planets){
                    const planet = planets[planetid];
                    const buildings = getBuildingsOfPlanet(planetid);
                    
                    for(let buildingid in buildings){
                        const building = buildings[buildingid];
                        if(building.getType() == type){
                            if(includeUnderConstruction == true){
                                result[buildingid] = building;
                            }else if(building.getData().status === 0){
                                result[buildingid] = building;
                            }
                        }
                    }
                }
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function groupBuildingsByRole(buildings){
        //Épületek cél szerinti besorolása
        try{
            const result = {}
            
            for(let buildingid in buildings){
                const building = buildings[buildingid]
                const buildingData = data.getElementData(building.getData().resource);
                if(result[buildingData.role] == undefined){
                    result[buildingData.role] = {};
                }
                result[buildingData.role][buildingid] = building;
            }
            
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function groupBuildingsByType(buildings){
        //Épületek csoportosítása típus szerint
        try{
            const result = {};
                for(let buildingid in buildings){
                    const building = buildings[buildingid];
                    if(result[building.getType()] == undefined){
                        result[building.getType()] = {};
                    }
                    result[building.getType()][buildingid] = buildingid;
                }
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    function orderBuildingsByName(buildings){
        //Név szerint sorba rendezi az épületeket
        try{
            const arr = Object.values(buildings);
            arr.sort(function(a, b){
                return data.getElementData({source: a.getType(), key: "typename"}).localeCompare(data.getElementData({source: b.getType(), key: "typename"}));
            });
            
            const result = {};
                for(let bindex in arr){
                    result[arr[bindex].getBuildingId()] = arr[bindex];
                }
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function convertBuildings(buildingsData){
            try{
                const result = {};
                    for(let buildingid in buildingsData){
                        result[buildingid] = new Building(buildingsData[buildingid]);
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}