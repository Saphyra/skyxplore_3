<?php
    $defaultDefense["type"] = "defense";
    
    //Támadás
    $subtype="gausscannon";
    $defense[$subtype] = $defaultDefense;
    $defense[$subtype]["subtype"] = $subtype;
    $defense[$subtype]["name"] = "Lövegtorony";
    $defense[$subtype]["hull"] = 40000;
    $defense[$subtype]["capacity"] = 100;
    $defense[$subtype]["bonus"] = ["laser", "rocketlauncher", "ionpulse"];
    $defense[$subtype]["resource"]["hull"] = 3;
    $defense[$subtype]["resource"]["panel"] = 3;
    $defense[$subtype]["resource"]["electronics"] = 5;
    $defense[$subtype]["resource"]["wire"] = 5;
    $defense[$subtype]["soldier"] = 1;
    
    //Támogatás
    $subtype="repairstation";
    $defense[$subtype] = $defaultDefense;
    $defense[$subtype]["subtype"] = $subtype;
    $defense[$subtype]["name"] = "Javító állomás";
    $defense[$subtype]["hull"] = 30000;
    $defense[$subtype]["capacity"] = 200;
    $defense[$subtype]["bonus"] = ["regeneration", "shieldrecharge", "energyrecharge", "generator"];
    $defense[$subtype]["resource"]["hull"] = 3;
    $defense[$subtype]["resource"]["panel"] = 5;
    $defense[$subtype]["resource"]["electronics"] = 10;
    $defense[$subtype]["resource"]["wire"] = 10;
    $defense[$subtype]["soldier"] = 2;
    
    //Védelem
    $subtype="deflector";
    $defense[$subtype] = $defaultDefense;
    $defense[$subtype]["subtype"] = $subtype;
    $defense[$subtype]["name"] = "Deflektor";
    $defense[$subtype]["hull"] = 100000;
    $defense[$subtype]["capacity"] = 200;
    $defense[$subtype]["bonus"] = ["armor", "shield", "maneuver", "kineticshield"];
    $defense[$subtype]["resource"]["hull"] = 8;
    $defense[$subtype]["resource"]["panel"] = 5;
    $defense[$subtype]["resource"]["electronics"] = 3;
    $defense[$subtype]["resource"]["wire"] = 5;
    $defense[$subtype]["soldier"] = 1;
    
    //Szabotázs
    $subtype="minefield";
    $defense[$subtype] = $defaultDefense;
    $defense[$subtype]["subtype"] = $subtype;
    $defense[$subtype]["name"] = "Aknamező";
    $defense[$subtype]["hull"] = 35000;
    $defense[$subtype]["capacity"] = 250;
    $defense[$subtype]["bonus"] = ["energyleech", "cybervirus", "ioncannon", "pld"];
    $defense[$subtype]["resource"]["hull"] = 3;
    $defense[$subtype]["resource"]["panel"] = 5;
    $defense[$subtype]["resource"]["electronics"] = 5;
    $defense[$subtype]["resource"]["wire"] = 10;
    $defense[$subtype]["soldier"] = 1;
    
    //Szabotázs
    $subtype="starbase";
    $defense[$subtype] = $defaultDefense;
    $defense[$subtype]["subtype"] = $subtype;
    $defense[$subtype]["name"] = "Csillagbázis";
    $defense[$subtype]["hull"] = 100000;
    $defense[$subtype]["capacity"] = 500;
    $defense[$subtype]["bonus"] = ["shieldleech", "energyfield", "magneticfield", "battery"];
    $defense[$subtype]["resource"]["hull"] = 15;
    $defense[$subtype]["resource"]["panel"] = 10;
    $defense[$subtype]["resource"]["electronics"] = 15;
    $defense[$subtype]["resource"]["wire"] = 20;
    $defense[$subtype]["soldier"] = 4;

    writeData("defense", $defense);
?>