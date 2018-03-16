function MapShower(elements){
    const mapElements = elements;
    
    this.showMap = function showMap(){
        //Térkép kijelzése
        try{
            const connections = createStarMapElements();
            createConnectionMapElements(connections);
            
            showElements();
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
        function createStarMapElements(){
            //Csillagok létrehozása
            try{
                const connections = [];
                const stars = gameData.getStarService().getAllStars();
                for(let starid in stars){
                    const star = stars[starid];
                    
                    const starElement = new StarElement(star);
                    mapElements.starElements[starid] = starElement;
                    
                    //Csillag kapcsolatainak gyűjtése
                    const starConnections = star.getConnections();
                    for(let cindex in starConnections){
                        const connection = starConnections[cindex];
                        if(connections.indexOf(connection.getConnection()) === -1){
                            connections.push(connection);
                        }
                    }
                }

                return connections;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
        
        function createConnectionMapElements(connections){
            //Kapcsolatok létrehozása
            try{
                
                const starService = gameData.getStarService();
                
                for(let cindex in connections){
                    const connection = connections[cindex];
                    
                    const starIds = connection.getStarIds();
                    
                    const star1 = starService.getStarById(starIds[0]);
                    const star2 = starService.getStarById(starIds[1]);
                    
                    const connectionElement = new ConnectionElement(star1, star2, connection);
                    mapElements.connectionElements[connection.getConnection()] = connectionElement;
                }
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
    
        function showElements(){
            //Elemek megjelenítése
            try{
                const map = document.getElementById("map");
                
                for(let connectionElementIndex in mapElements.connectionElements){
                    map.appendChild(mapElements.connectionElements[connectionElementIndex].connectionMapElement);
                }
                
                for(let starElementIndex in mapElements.starElements){
                    map.appendChild(mapElements.starElements[starElementIndex].starMapElement);
                }
                
                for(let starElementIndex in mapElements.starElements){
                    map.appendChild(mapElements.starElements[starElementIndex].starNameMapElement);
                }
                
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
    
    function StarElement(star){
        //Csillag elem
        try{
            this.star = star;
            this.starMapElement = this.createStarMapElement(star);
            this.starNameMapElement = this.createStarNameMapElement(star);
            
            let visibility;
            switch(star.getVisibilityService().getVisibilityOf("player").getVisibility()){
                case "owned":
                    visibility = "ownedmapelement";
                break;
                case "visible":
                    visibility = "visiblemapelement";
                break;
                case "enemy":
                    visibility = "enemymapelement";
                break;
                case "connected":
                    visibility = "connectedmapelement";
                break;
                case "hidden":
                    visibility = "hiddenmapelement";
                break;
            }
            
            this.starMapElement.classList.add(visibility);
            this.starNameMapElement.classList.add(visibility);
            
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    StarElement.prototype.createStarMapElement = function createStarMapElement(star){
        //Csillag elem létrehozása
        try{
            const element = createSVGElement("circle");
            const starid = star.getStarId();
                element.classList.add("starmapelement");
                element.classList.add("mapelement" + starid);
                
                element.id = "starmapelement" + starid;
                element.setAttribute("r", 20);
                element.setAttribute("cx", star.getXCord());
                element.setAttribute("cy", star.getYCord());
                
                element.onclick = function(event){starView.showStar(star);};
                element.onmouseenter = function(){
                    element.setAttribute("stroke", "blue");
                    element.setAttribute("stroke-width", 3);
                };
                element.onmouseout = function(){
                    element.setAttribute("stroke-width", 0);
                };
                
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    StarElement.prototype.createStarNameMapElement = function createStarNameMapElement(star){
        //Csillagév elem létrehozása
        try{
            const element = createSVGElement("text");
            const starid = star.getStarId();
            
                element.classList.add("starnamemapelement");
                element.classList.add("mapelement" + starid);
                element.id = "starnamemapelement" + starid;
                
                if(star.getVisibilityService().getVisibilityOf("player").getVisibility() == "connected"){
                    element.innerHTML = "Ismeretlen";
                }else{
                    element.innerHTML = star.getStarName() + " (" + star.getPlanetNum() + ")";
                }
                
                element.setAttribute("x", star.getXCord());
                element.setAttribute("y", star.getYCord() - 40);
                element.setAttribute("text-anchor", "middle");
                element.setAttribute("pointer-events", "none");
                
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }

    function ConnectionElement(star1, star2, connection){
        try{
            this.connection = connection;
            this.star1 = star1;
            this.star2 = star2;
            this.connectionMapElement = this.createConnectionMapElement(star1, star2, connection);
            
            const visibility1 = star1.getVisibilityService().getVisibilityOf("player").getVisibility();
            const visibility2 = star2.getVisibilityService().getVisibilityOf("player").getVisibility();
            
            if(this.isConnectionHidden(visibility1, visibility2)){
                this.connectionMapElement.classList.add("hiddenmapelement");
            }
            
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    ConnectionElement.prototype.createConnectionMapElement = function createConnectionMapElement(star1, star2, connection){
        //Kapcsolat elem létrehozása
        try{
            const element = createSVGElement("line");
                element.classList.add("connectionmapelement");
                element.id = "connectionmapelement" + connection.getConnection();
                
                element.setAttribute("x1", star1.getXCord());
                element.setAttribute("y1", star1.getYCord());
                element.setAttribute("x2", star2.getXCord());
                element.setAttribute("y2", star2.getYCord());
                element.setAttribute("stroke", "white");
                element.setAttribute("stroke-width", 1);
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    ConnectionElement.prototype.isConnectionHidden = function isConnectionHidden(visibility1, visibility2){
        //Igaz, ha a kapcsolat látható
        try{
            let result = false;
            
            if(visibility1 == "hidden" && visibility2 == "hidden"){
                result = true;
            }else if((visibility1 == "connected" && visibility2 == "connected")){
                result = true;
            }else if((visibility1 == "connected" || visibility2 == "connected") && (visibility1 == "hidden" || visibility2 == "hidden")){
                result = true;
            }
            
            return result;
            
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}

