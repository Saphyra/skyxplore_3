function Player(data){
    const playerid = data.playerid;
    let money = data.money;
    
    this.getPlayerId = function(){return playerid};
    this.getMoney = function(){return money};
    this.addMoney = addMoney;
    this.spendMoney = spendMoney;
    
    function addMoney(change){
        money += change;
        if(playerid == "player"){
            animation.displayPlayerMoney(money);
        }
    }
    
    function spendMoney(change){
        money -= change;
        if(playerid == "player"){
            animation.displayPlayerMoney(money);
        }
    }
}