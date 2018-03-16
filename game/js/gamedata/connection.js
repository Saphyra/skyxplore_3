function Connection(connectionData){
    const connection = connectionData;
    const starIds = connection.split("-");
    
    this.getConnection = function(){return connection};
    this.getStarIds = function(){return starIds};
}