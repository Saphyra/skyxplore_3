function PlayerService(playersData){
    //Játékos adatok
    const players = convertPlayers(playersData);
    
    this.getAllPlayers = function(){return players};
    this.getPlayer = function(playerName){return players[playerName]};
    
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