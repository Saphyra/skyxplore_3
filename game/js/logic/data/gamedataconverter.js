function GameDataConverter(){
    this.convertGameData = function convertGameData(){
        //Játékadatok konvertálása menthetõ formára
        try{
            const result = {};
            const data = gameData;
            
            result.gameid = data.getGameId();
            result.players = convertPlayers(data);
            result.stars = convertStars(data);
            result.planets = convertPlanets(data);
            result.buildings = convertBuildings(data);
            result.defenses = convertDefense(data);
            result.fleets = convertFleets(data);
            result.ships = convertShips(data);
            return result;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function convertPlayers(data){
            try{
                const players = data.getPlayerService().getAllPlayers();
                const result = {};
                    for(let playerName in players){
                        const player = players[playerName];
                        result[playerName] = {
                            playerid: player.getPlayerId(),
                            money: player.getMoney()
                        };
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function convertStars(data){
            try{
                const stars = data.getStarService().getAllStars();
                const result = {};
                    for(let starid in stars){
                        const star = stars[starid];
                        result[starid] = {
                            starid: star.getStarId(),
                            xcord: star.getXCord(),
                            ycord: star.getYCord(),
                            owner: star.getOwner(),
                            starname: star.getStarName(),
                            planetnum: star.getPlanetNum(),
                            connections: convertConnections(star.getConnections()),
                            visibility: convertVisibilities(star.getVisibilityService().getAllVisibilities()),
                            data: convertStarData(star.getData())
                        };
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
            
            function convertConnections(connections){
                try{
                    const result = [];
                        for(let cindex in connections){
                            result.push(connections[cindex].getConnection());
                        }
                    return result;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
            
            function convertVisibilities(visibilities){
                try{
                    const result = {};
                       for(let playerName in visibilities){
                           const visibility = visibilities[playerName];
                           result[playerName] = {
                               visibility: visibility.getVisibility(),
                               snapshot: visibility.getSnapshot()
                           }
                       }
                    return result;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
            
            function convertStarData(starData){
                try{
                    const result = {
                        queue: convertQueue(starData.getQueueService().getQueue()),
                        resources: starData.getResources(),
                        foodproductionpriority: starData.getFoodProductionPriority(),
                        storagestatus: starData.getStorageStatus(),
                        citizennum: starData.getCitizenNum()
                    };
                    
                    return result;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                }
            }
            
                function convertQueue(queue){
                    try{
                        const result = {};
                            for(let requestid in queue){
                                const request = queue[requestid];
                                result[requestid] = {
                                    starid: request.getStarId(),
                                    requestid: request.getRequestId(),
                                    type: request.getType(),
                                    status: request.getStatus(),
                                    priority: request.getPriority(),
                                    elementid: request.getElementId(),
                                    data: request.getData()
                                }
                            }
                        return result;
                    }catch(err){
                        log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
                    }
                }
        
        function convertPlanets(data){
            try{
                const planets = data.getPlanetService().getAllPlanets();
                const result = {};
                    for(let planetid in planets){
                        const planet = planets[planetid];
                        result[planetid] = {
                            planetid: planet.getPlanetId(),
                            starid: planet.getStarId(),
                            planetname: planet.getPlanetName(),
                            size: planet.getSize(),
                            type: planet.getType(),
                            slots: planet.getSlots()
                        }
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function convertBuildings(data){
            try{
                const buildings = data.getBuildingService().getAllBuildings();
                const result = {};
                    for(let buildingid in buildings){
                        const building = buildings[buildingid];
                        result[buildingid] = {
                            buildingid: building.getBuildingId(),
                            planetid: building.getPlanetId(),
                            type: building.getType(),
                            level: building.getLevel(),
                            data: building.getData()
                        }
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function convertDefense(data){
            try{
                const defenses = data.getDefenseService().getAllDefenses();
                const result = {};
                    for(let defenseid in defenses){
                        const defense = defenses[defenseid];
                        result[defenseid] = {
                            
                        }
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function convertFleets(data){
            try{
                const fleets = data.getFleetService().getAllFleets();
                const result = {};
                    for(let fleetid in fleets){
                        const fleet = fleets[fleetid];
                        result[fleetid] = {
                            fleetid: fleet.getFleetId(),
                            owner: fleet.getOwner(),
                            xcord: fleet.getXCord(),
                            ycord: fleet.getYCord(),
                            data: fleet.getData()
                        }
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function convertShips(data){
            try{
                const ships = data.getShipService().getAllShips();
                const result = {};
                    for(let shipid in ships){
                        const ship = ships[shipid];
                        result[shipid] = {
                            shipid: ship.getShipId(),
                            fleetid: ship.getFleetId(),
                            owner: ship.getOwner(),
                            details: ship.getDetails(),
                            stats: ship.getStats()
                        }
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}