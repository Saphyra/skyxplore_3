function StarService(starsData){
    const stars = convertStars(starsData);
    
    this.getAllStars = function(){return stars};
    this.getStarById = function(starId){return stars[starId] || null};
    
        function convertStars(starsData){
            try{
                const result = {};
                    for(let starid in starsData){
                        result[starid] = new Star(starsData[starid]);
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}