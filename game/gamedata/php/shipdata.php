<?php
    $defaultShip["type"] = "ship";
    
    //tank
    $subtype="tenacity";
    $ship[$subtype] = $defaultShip;
    $ship[$subtype]["subtype"] = $subtype;
    $ship[$subtype]["name"] = "Tenacity";
    $ship[$subtype]["hull"] = 75000;
    $ship[$subtype]["capacity"] = 250;
    $ship[$subtype]["bonus"] = ["shield", "armor", "battery", "maneuver", "kineticshield"];
    $ship[$subtype]["resource"]["hull"] = 10;
    $ship[$subtype]["resource"]["panel"] = 5;
    $ship[$subtype]["resource"]["electronics"] = 5;
    $ship[$subtype]["resource"]["wire"] = 10;
    $ship[$subtype]["resource"]["human"] = 2;
    
    //Támogatás
    $subtype="salvation";
    $ship[$subtype] = $defaultShip;
    $ship[$subtype]["subtype"] = $subtype;
    $ship[$subtype]["name"] = "Salvation";
    $ship[$subtype]["hull"] = 40000;
    $ship[$subtype]["capacity"] = 200;
    $ship[$subtype]["bonus"] = ["regeneration", "shieldrecharge"];
    $ship[$subtype]["resource"]["hull"] = 5;
    $ship[$subtype]["resource"]["panel"] = 5;
    $ship[$subtype]["resource"]["electronics"] = 10;
    $ship[$subtype]["resource"]["wire"] = 10;
    $ship[$subtype]["resource"]["human"] = 2;
    
    //Energiaellátás
    $subtype="siren";
    $ship[$subtype] = $defaultShip;
    $ship[$subtype]["subtype"] = $subtype;
    $ship[$subtype]["name"] = "Siren";
    $ship[$subtype]["capacity"] = 150;
    $ship[$subtype]["hull"] = 40000;
    $ship[$subtype]["bonus"] = ["energyrecharge", "generator"];
    $ship[$subtype]["resource"]["hull"] = 2;
    $ship[$subtype]["resource"]["panel"] = 2;
    $ship[$subtype]["resource"]["electronics"] = 15;
    $ship[$subtype]["resource"]["wire"] = 15;
    $ship[$subtype]["resource"]["human"] = 2;
    
    //Gyors, gyenge
    $subtype="revanant";
    $ship[$subtype] = $defaultShip;
    $ship[$subtype]["subtype"] = $subtype;
    $ship[$subtype]["name"] = "Revanant";
    $ship[$subtype]["hull"] = 25000;
    $ship[$subtype]["capacity"] = 100;
    $ship[$subtype]["bonus"] = ["engine"];
    $ship[$subtype]["resource"]["hull"] = 1;
    $ship[$subtype]["resource"]["panel"] = 2;
    $ship[$subtype]["resource"]["electronics"] = 3;
    $ship[$subtype]["resource"]["wire"] = 5;
    $ship[$subtype]["resource"]["human"] = 1;
    
    //Lézer
    $subtype="executor";
    $ship[$subtype] = $defaultShip;
    $ship[$subtype]["subtype"] = $subtype;
    $ship[$subtype]["name"] = "Executor";
    $ship[$subtype]["hull"] = 50000;
    $ship[$subtype]["capacity"] = 150;
    $ship[$subtype]["bonus"] = ["laser", "magneticfield"];
    $ship[$subtype]["resource"]["hull"] = 3;
    $ship[$subtype]["resource"]["panel"] = 5;
    $ship[$subtype]["resource"]["electronics"] = 5;
    $ship[$subtype]["resource"]["wire"] = 10;
    $ship[$subtype]["resource"]["human"] = 2;
    
    //Pulzuságyú
    $subtype="specter";
    $ship[$subtype] = $defaultShip;
    $ship[$subtype]["subtype"] = $subtype;
    $ship[$subtype]["name"] = "Specter";
    $ship[$subtype]["capacity"] = 150;
    $ship[$subtype]["hull"] = 50000;
    $ship[$subtype]["bonus"] = ["ionpulse", "shieldleech"];
    $ship[$subtype]["resource"]["hull"] = 2;
    $ship[$subtype]["resource"]["panel"] = 3;
    $ship[$subtype]["resource"]["electronics"] = 10;
    $ship[$subtype]["resource"]["wire"] = 15;
    $ship[$subtype]["resource"]["human"] = 2;
    
    //Rakétakilövő
    $subtype="striker";
    $ship[$subtype] = $defaultShip;
    $ship[$subtype]["subtype"] = $subtype;
    $ship[$subtype]["name"] = "Striker";
    $ship[$subtype]["capacity"] = 150;
    $ship[$subtype]["hull"] = 50000;
    $ship[$subtype]["bonus"] = ["rocketlauncher", "energyfield"];
    $ship[$subtype]["resource"]["hull"] = 2;
    $ship[$subtype]["resource"]["panel"] = 10;
    $ship[$subtype]["resource"]["electronics"] = 5;
    $ship[$subtype]["resource"]["wire"] = 10;
    $ship[$subtype]["resource"]["human"] = 2;
    
    //Szabotázs
    $subtype="nightmare";
    $ship[$subtype] = $defaultShip;
    $ship[$subtype]["subtype"] = $subtype;
    $ship[$subtype]["name"] = "Nightmare";
    $ship[$subtype]["capacity"] = 200;
    $ship[$subtype]["hull"] = 40000;
    $ship[$subtype]["bonus"] = ["energyleech", "cybervirus", "ioncannon", "pld"];
    $ship[$subtype]["resource"]["hull"] = 2;
    $ship[$subtype]["resource"]["panel"] = 5;
    $ship[$subtype]["resource"]["electronics"] = 20;
    $ship[$subtype]["resource"]["wire"] = 15;
    $ship[$subtype]["resource"]["human"] = 1;
    
    //Szállítás
    $subtype="colossus";
    $ship[$subtype] = $defaultShip;
    $ship[$subtype]["subtype"] = $subtype;
    $ship[$subtype]["name"] = "Colossus";
    $ship[$subtype]["capacity"] = 70;
    $ship[$subtype]["hull"] = 15000;
    $ship[$subtype]["bonus"] = ["cabin", "container", "engine"];
    $ship[$subtype]["resource"]["hull"] = 5;
    $ship[$subtype]["resource"]["panel"] = 3;
    $ship[$subtype]["resource"]["electronics"] = 2;
    $ship[$subtype]["resource"]["wire"] = 5;
    $ship[$subtype]["resource"]["human"] = 1;
    
    //Kolonizáció
    $subtype="conqueror";
    $ship[$subtype] = $defaultShip;
    $ship[$subtype]["subtype"] = $subtype;
    $ship[$subtype]["name"] = "Conqueror";
    $ship[$subtype]["capacity"] = 140;
    $ship[$subtype]["hull"] = 20000;
    $ship[$subtype]["bonus"] = ["colony"];
    $ship[$subtype]["resource"]["hull"] = 5;
    $ship[$subtype]["resource"]["panel"] = 3;
    $ship[$subtype]["resource"]["electronics"] = 3;
    $ship[$subtype]["resource"]["wire"] = 5;
    $ship[$subtype]["resource"]["human"] = 1;

    writeData("ship", $ship);
?>