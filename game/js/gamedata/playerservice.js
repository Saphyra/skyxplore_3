function PlayerService(playersData){
    //Játékos adatok
    const players = convertPlayers(playersData);
    
    this.getAllPlayers = function getAllPlayers(){return players};
    
        function convertPlayers(playersData){
            try{
                const result = {};
                    for(let playerName in playersData){
                        result[playerName] = new Player(playersData[playerName]);
                    }
                return result;
            }catch(err){
                log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
            }
        }
}