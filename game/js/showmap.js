function showMap(){
    try{
        window.mapElements = {
            starElements:{},
            connectionElements:{},
        };
        
        const connections = createStarMapElements();
        createConnectionMapElements(connections);
        
        showElements();
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
    
}
function createSVGElement(type){
    try{
        return document.createElementNS("http://www.w3.org/2000/svg", type);
    }catch(err){
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}
function showElements(){
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
        log(arguments.callee.name + " - " + err.name + ": " + err.message);
    }
}

    function createStarMapElements(){
        try{
            const connections = [];
            for(let starid in gameData.stars){
                const star = gameData.stars[starid];
                
                const starElement = new StarElement(star);
                mapElements.starElements[star.starid] = starElement;
                
                for(let connectionIndex in star.connections){
                    if(connections.indexOf(star.connections[connectionIndex]) === -1){
                        connections.push(star.connections[connectionIndex]);
                    }
                }
            }

            return connections;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }

        function StarElement(star){
            try{
                this.star = star;
                this.starMapElement = createStarMapElement(star);
                this.starNameMapElement = createStarNameMapElement(star);
                
                let visibility;
                switch(star.visibility.player.visibility){
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
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }

            function createStarMapElement(star){
                try{
                    const element = createSVGElement("circle");
                    
                        element.classList.add("starmapelement");
                        element.classList.add("mapelement" + star.starid);
                        
                        element.id = "starmapelement" + star.starid;
                        element.setAttribute("r", 20);
                        element.setAttribute("cx", star.xcord);
                        element.setAttribute("cy", star.ycord);
                        
                        element.onclick = function(){showStar(star)};
                        element.onmouseenter = function(){starMapElementMouseEnter(element)};
                        element.onmouseout = function(){starMapElementMouseOut(element)};
                        
                    return element;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message);
                }
            }
    
            function createStarNameMapElement(star){
                try{
                    const element = createSVGElement("text");
                        element.classList.add("starnamemapelement");
                        element.classList.add("mapelement" + star.starid);
                        element.id = "starnamemapelement" + star.starid;
                        
                        element.innerHTML = star.starname + " (" + star.planetnum + ")";
                        element.setAttribute("x", star.xcord);
                        element.setAttribute("y", star.ycord - 40);
                        element.setAttribute("text-anchor", "middle");
                        
                    return element;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message);
                }
            }
            
    function createConnectionMapElements(connections){
        try{
            const stars = gameData.stars;
            
            for(let connectionIndex in connections){
                const connection = connections[connectionIndex];
                
                const starids = connection.split("-");
                
                const connectionElement = new ConnectionElement(stars[starids[0]], stars[starids[1]], connection);
                mapElements.connectionElements[connection] = connectionElement;
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
    
        function ConnectionElement(star1, star2, connection){
            try{
                this.connection = connection;
                this.star1 = star1;
                this.star2 = star2;
                this.connectionMapElement = createConnectionMapElement(star1, star2, connection);
                
                if(star1.visibility.player.visibility === "hidden" || star2.visibility.player.visibility === "hidden"){
                    this.connectionMapElement.classList.add("hiddenmapelement");
                }
                
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message);
            }
        }
        
            function createConnectionMapElement(star1, star2, connection){
                try{
                    const element = createSVGElement("line");
                        element.classList.add("connectionmapelement");
                        element.id = "connectionmapelement" + connection;
                        
                        element.setAttribute("x1", star1.xcord);
                        element.setAttribute("y1", star1.ycord);
                        element.setAttribute("x2", star2.xcord);
                        element.setAttribute("y2", star2.ycord);
                        element.setAttribute("stroke", "white");
                        element.setAttribute("stroke-width", 1);
                    return element;
                }catch(err){
                    log(arguments.callee.name + " - " + err.name + ": " + err.message);
                }
            }