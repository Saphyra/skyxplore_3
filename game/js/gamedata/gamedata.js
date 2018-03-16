function GameData(data){
    //Játékadatok tárolása
    const gameid = data.gameid;
    const playerService = new PlayerService(data.players);
    const starService = new StarService(data.stars);
    const planetService = new PlanetService(data.planets);
    const buildingService = new BuildingService(data.buildings);
    const defenseService = new DefenseService(data.defenses);
    const fleetService = new FleetService(data.fleets);
    const shipService = new ShipService(data.ships);
    
    this.getGameId = function(){return gameid};
    this.getPlayerService = function(){return playerService};
    this.getStarService = function(){return starService};
    this.getPlanetService = function(){return planetService};
    this.getBuildingService = function(){return buildingService};
    this.getDefenseService = function(){return defenseService};
    this.getFleetService = function(){return fleetService};
    this.getShipService = function(){return shipService};
}