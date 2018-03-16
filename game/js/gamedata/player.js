function Player(data){
    const playerid = data.playerid;
    const money = data.money;
    
    this.getPlayerId = function(){return playerid};
    this.getMoney = function(){return money};
}