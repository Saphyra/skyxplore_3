function DefenseService(defensesData){
    const defenses = convertDefenses(defensesData);
    
    this.getAllDefenses = function(){return defenses};
    
        function convertDefenses(defensesData){
            const result = {};
                for(let defenseid in defensesData){
                    result[defenseid] = new Defense(defenses[defenseid]);
                }
            return result;
        }
}