<?php
    $defense["typename"] = "Védelem";
    $defaultDefense["slot"] = "defense";
    $defaultDefense["source"] = "defense";
    
    //Támadás
    $type="gausscannon";
    $defense[$type] = $defaultDefense;
    $defense[$type]["key"] = $type;
    $defense[$type]["type"] = $type;
    $defense[$type]["name"] = "Lövegtorony";
    $defense[$type]["hull"] = 40000;
    $defense[$type]["capacity"] = 100;
    $defense[$type]["bonus"] = ["laser", "rocketlauncher", "ionpulse"];
    $defense[$type]["resource"]["hull"] = 3;
    $defense[$type]["resource"]["panel"] = 3;
    $defense[$type]["resource"]["electronics"] = 5;
    $defense[$type]["resource"]["wire"] = 5;
    $defense[$type]["soldier"] = 1;
    
    //Támogatás
    $type="repairstation";
    $defense[$type] = $defaultDefense;
    $defense[$type]["key"] = $type;
    $defense[$type]["type"] = $type;
    $defense[$type]["name"] = "Javító állomás";
    $defense[$type]["hull"] = 30000;
    $defense[$type]["capacity"] = 200;
    $defense[$type]["bonus"] = ["regeneration", "shieldrecharge", "energyrecharge", "generator"];
    $defense[$type]["resource"]["hull"] = 3;
    $defense[$type]["resource"]["panel"] = 5;
    $defense[$type]["resource"]["electronics"] = 10;
    $defense[$type]["resource"]["wire"] = 10;
    $defense[$type]["soldier"] = 2;
    
    //Védelem
    $type="deflector";
    $defense[$type] = $defaultDefense;
    $defense[$type]["key"] = $type;
    $defense[$type]["type"] = $type;
    $defense[$type]["name"] = "Deflektor";
    $defense[$type]["hull"] = 100000;
    $defense[$type]["capacity"] = 200;
    $defense[$type]["bonus"] = ["armor", "shield", "maneuver", "kineticshield"];
    $defense[$type]["resource"]["hull"] = 8;
    $defense[$type]["resource"]["panel"] = 5;
    $defense[$type]["resource"]["electronics"] = 3;
    $defense[$type]["resource"]["wire"] = 5;
    $defense[$type]["soldier"] = 1;
    
    //Szabotázs
    $type="minefield";
    $defense[$type] = $defaultDefense;
    $defense[$type]["key"] = $type;
    $defense[$type]["type"] = $type;
    $defense[$type]["name"] = "Aknamező";
    $defense[$type]["hull"] = 35000;
    $defense[$type]["capacity"] = 250;
    $defense[$type]["bonus"] = ["energyleech", "cybervirus", "ioncannon", "pld"];
    $defense[$type]["resource"]["hull"] = 3;
    $defense[$type]["resource"]["panel"] = 5;
    $defense[$type]["resource"]["electronics"] = 5;
    $defense[$type]["resource"]["wire"] = 10;
    $defense[$type]["soldier"] = 1;
    
    //Szabotázs
    $type="starbase";
    $defense[$type] = $defaultDefense;
    $defense[$type]["key"] = $type;
    $defense[$type]["type"] = $type;
    $defense[$type]["name"] = "Csillagbázis";
    $defense[$type]["hull"] = 100000;
    $defense[$type]["capacity"] = 500;
    $defense[$type]["bonus"] = ["shieldleech", "energyfield", "magneticfield", "battery"];
    $defense[$type]["resource"]["hull"] = 15;
    $defense[$type]["resource"]["panel"] = 10;
    $defense[$type]["resource"]["electronics"] = 15;
    $defense[$type]["resource"]["wire"] = 20;
    $defense[$type]["soldier"] = 4;

    writeData("defense", $defense);
?>