<?php
    $defaultShip = [];
    
    //tank
    $type="tenacity";
    $ship[$type]["type"] = $type;
    $ship[$type]["name"] = "Tenacity";
    $ship[$type]["hull"] = 75000;
    $ship[$type]["capacity"] = 250;
    $ship[$type]["bonus"] = ["shield", "armor", "battery", "maneuver", "kineticshield"];
    $ship[$type]["resource"]["hull"] = 10;
    $ship[$type]["resource"]["panel"] = 5;
    $ship[$type]["resource"]["electronics"] = 5;
    $ship[$type]["resource"]["wire"] = 10;
    $ship[$type]["resource"]["human"] = 2;
    
    //Támogatás
    $type="salvation";
    $ship[$type]["type"] = $type;
    $ship[$type]["name"] = "Salvation";
    $ship[$type]["hull"] = 40000;
    $ship[$type]["capacity"] = 200;
    $ship[$type]["bonus"] = ["regeneration", "shieldrecharge"];
    $ship[$type]["resource"]["hull"] = 5;
    $ship[$type]["resource"]["panel"] = 5;
    $ship[$type]["resource"]["electronics"] = 10;
    $ship[$type]["resource"]["wire"] = 10;
    $ship[$type]["resource"]["human"] = 2;
    
    //Energiaellátás
    $type="siren";
    $ship[$type]["type"] = $type;
    $ship[$type]["name"] = "Siren";
    $ship[$type]["capacity"] = 150;
    $ship[$type]["hull"] = 40000;
    $ship[$type]["bonus"] = ["energyrecharge", "generator"];
    $ship[$type]["resource"]["hull"] = 2;
    $ship[$type]["resource"]["panel"] = 2;
    $ship[$type]["resource"]["electronics"] = 15;
    $ship[$type]["resource"]["wire"] = 15;
    $ship[$type]["resource"]["human"] = 2;
    
    //Gyors, gyenge
    $type="revanant";
    $ship[$type]["type"] = $type;
    $ship[$type]["name"] = "Revanant";
    $ship[$type]["hull"] = 25000;
    $ship[$type]["capacity"] = 100;
    $ship[$type]["bonus"] = ["engine"];
    $ship[$type]["resource"]["hull"] = 1;
    $ship[$type]["resource"]["panel"] = 2;
    $ship[$type]["resource"]["electronics"] = 3;
    $ship[$type]["resource"]["wire"] = 5;
    $ship[$type]["resource"]["human"] = 1;
    
    //Lézer
    $type="executor";
    $ship[$type]["type"] = $type;
    $ship[$type]["name"] = "Executor";
    $ship[$type]["hull"] = 50000;
    $ship[$type]["capacity"] = 150;
    $ship[$type]["bonus"] = ["laser", "magneticfield"];
    $ship[$type]["resource"]["hull"] = 3;
    $ship[$type]["resource"]["panel"] = 5;
    $ship[$type]["resource"]["electronics"] = 5;
    $ship[$type]["resource"]["wire"] = 10;
    $ship[$type]["resource"]["human"] = 2;
    
    //Pulzuságyú
    $type="specter";
    $ship[$type]["type"] = $type;
    $ship[$type]["name"] = "Specter";
    $ship[$type]["capacity"] = 150;
    $ship[$type]["hull"] = 50000;
    $ship[$type]["bonus"] = ["ionpulse", "shieldleech"];
    $ship[$type]["resource"]["hull"] = 2;
    $ship[$type]["resource"]["panel"] = 3;
    $ship[$type]["resource"]["electronics"] = 10;
    $ship[$type]["resource"]["wire"] = 15;
    $ship[$type]["resource"]["human"] = 2;
    
    //Rakétakilövő
    $type="striker";
    $ship[$type]["type"] = $type;
    $ship[$type]["name"] = "Striker";
    $ship[$type]["capacity"] = 150;
    $ship[$type]["hull"] = 50000;
    $ship[$type]["bonus"] = ["rocketlauncher", "energyfield"];
    $ship[$type]["resource"]["hull"] = 2;
    $ship[$type]["resource"]["panel"] = 10;
    $ship[$type]["resource"]["electronics"] = 5;
    $ship[$type]["resource"]["wire"] = 10;
    $ship[$type]["resource"]["human"] = 2;
    
    //Szabotázs
    $type="nightmare";
    $ship[$type]["type"] = $type;
    $ship[$type]["name"] = "Nightmare";
    $ship[$type]["capacity"] = 200;
    $ship[$type]["hull"] = 40000;
    $ship[$type]["bonus"] = ["energyleech", "cybervirus", "ioncannon", "pld"];
    $ship[$type]["resource"]["hull"] = 2;
    $ship[$type]["resource"]["panel"] = 5;
    $ship[$type]["resource"]["electronics"] = 20;
    $ship[$type]["resource"]["wire"] = 15;
    $ship[$type]["resource"]["human"] = 1;
    
    //Szállítás
    $type="colossus";
    $ship[$type]["type"] = $type;
    $ship[$type]["name"] = "Colossus";
    $ship[$type]["capacity"] = 70;
    $ship[$type]["hull"] = 15000;
    $ship[$type]["bonus"] = ["cabin", "container", "engine"];
    $ship[$type]["resource"]["hull"] = 5;
    $ship[$type]["resource"]["panel"] = 3;
    $ship[$type]["resource"]["electronics"] = 2;
    $ship[$type]["resource"]["wire"] = 5;
    $ship[$type]["resource"]["human"] = 1;
    
    //Kolonizáció
    $type="conqueror";
    $ship[$type]["type"] = $type;
    $ship[$type]["name"] = "Conqueror";
    $ship[$type]["capacity"] = 140;
    $ship[$type]["hull"] = 20000;
    $ship[$type]["bonus"] = ["colony"];
    $ship[$type]["resource"]["hull"] = 5;
    $ship[$type]["resource"]["panel"] = 3;
    $ship[$type]["resource"]["electronics"] = 3;
    $ship[$type]["resource"]["wire"] = 5;
    $ship[$type]["resource"]["human"] = 1;

    writeData("ship", $ship);
?>