function VisibilityService(visibilitiesData){
    const visibilities = convertVisibilities(visibilitiesData);
    
    this.getAllVisibilities = function(){return visibilities};
    this.getVisibilityOf = function(playerName){return visibilities[playerName] || null};
    
        function convertVisibilities(visibilitiesData){
            try{
                const result = {};
                    for(let playerName in visibilitiesData){
                        result[playerName] = new Visibility(visibilitiesData[playerName]);
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}