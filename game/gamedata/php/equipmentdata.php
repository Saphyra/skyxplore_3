<?php
    
    //Overtime armor recharge
    $type = "regeneration";
    $equipment[$type]["type"] = $type;
    $equipment[$type]["name"] = "Regeneráció";
    $equipment[$type]["weight"] = 50;
    $equipment[$type]["maxequipped"] = 3;
    $equipment[$type]["energyusage"] = 20;
    $equipment[$type]["duration"] = 5;
    $equipment[$type]["effect"] = 1500;
    $equipment[$type]["reload"] = 3;
    $equipment[$type]["resource"]["wire"] = 3;
    $equipment[$type]["resource"]["panel"] = 2;
    $equipment[$type]["resource"]["electronics"] = 5;
    $equipment[$type]["resource"]["energycell"] = 3;
    
    //Overtime shield recharge
    $type = "shieldrecharge";
    $equipment[$type]["type"] = $type;
    $equipment[$type]["name"] = "Pajzstöltés";
    $equipment[$type]["weight"] = 50;
    $equipment[$type]["maxequipped"] = 3;
    $equipment[$type]["energyusage"] = 20;
    $equipment[$type]["duration"] = 5;
    $equipment[$type]["effect"] = 1000;
    $equipment[$type]["reload"] = 3;
    $equipment[$type]["resource"]["wire"] = 3;
    $equipment[$type]["resource"]["panel"] = 2;
    $equipment[$type]["resource"]["electronics"] = 5;
    $equipment[$type]["resource"]["energycell"] = 3;
    
    //Overtime energy recharge
    $type = "energyrecharge";
    $equipment[$type]["type"] = $type;
    $equipment[$type]["name"] = "Energiatöltés";
    $equipment[$type]["weight"] = 50;
    $equipment[$type]["maxequipped"] = 3;
    $equipment[$type]["energyusage"] = 20;
    $equipment[$type]["duration"] = 5;
    $equipment[$type]["effect"] = 5;
    $equipment[$type]["reload"] = 3;
    $equipment[$type]["resource"]["wire"] = 3;
    $equipment[$type]["resource"]["panel"] = 2;
    $equipment[$type]["resource"]["electronics"] = 5;
    $equipment[$type]["resource"]["energycell"] = 3;
    
    //Sebzés átvállalás
    $type = "maneuver";
    $equipment[$type]["type"] = $type;
    $equipment[$type]["name"] = "Életmentő manőver";
    $equipment[$type]["weight"] = 100;
    $equipment[$type]["maxequipped"] = 1;
    $equipment[$type]["energyusage"] = 25;
    $equipment[$type]["duration"] = 2;
    $equipment[$type]["reload"] = 5;
    $equipment[$type]["resource"]["wire"] = 5;
    $equipment[$type]["resource"]["panel"] = 3;
    $equipment[$type]["resource"]["electronics"] = 5;
    $equipment[$type]["resource"]["energycell"] = 2;
    
    //Sebzés csökkentés a páncélon
    $type = "kineticshield";
    $equipment[$type]["type"] = $type;
    $equipment[$type]["name"] = "Kinetikus pajzs";
    $equipment[$type]["weight"] = 100;
    $equipment[$type]["maxequipped"] = 2;
    $equipment[$type]["energyusage"] = 25;
    $equipment[$type]["duration"] = 3;
    $equipment[$type]["effect"] = 0.5;
    $equipment[$type]["reload"] = 6;
    $equipment[$type]["resource"]["wire"] = 3;
    $equipment[$type]["resource"]["panel"] = 2;
    $equipment[$type]["resource"]["electronics"] = 5;
    $equipment[$type]["resource"]["energycell"] = 3;
    
    //Pajzslopás sebzés alapján
    $type = "shieldleech";
    $equipment[$type]["type"] = $type;
    $equipment[$type]["name"] = "Pajzslopás";
    $equipment[$type]["weight"] = 150;
    $equipment[$type]["maxequipped"] = 1;
    $equipment[$type]["energyusage"] = 25;
    $equipment[$type]["duration"] = 5;
    $equipment[$type]["effect"] = 0.5;
    $equipment[$type]["reload"] = 10;
    $equipment[$type]["resource"]["wire"] = 5;
    $equipment[$type]["resource"]["panel"] = 2;
    $equipment[$type]["resource"]["electronics"] = 5;
    $equipment[$type]["resource"]["energycell"] = 3;
    
    //Sebezhetetlenség
    $type = "energyfield";
    $equipment[$type]["type"] = $type;
    $equipment[$type]["name"] = "Energiamező";
    $equipment[$type]["weight"] = 150;
    $equipment[$type]["maxequipped"] = 1;
    $equipment[$type]["energyusage"] = 25;
    $equipment[$type]["duration"] = 3;
    $equipment[$type]["reload"] = 10;
    $equipment[$type]["resource"]["wire"] = 5;
    $equipment[$type]["resource"]["panel"] = 2;
    $equipment[$type]["resource"]["electronics"] = 5;
    $equipment[$type]["resource"]["energycell"] = 3;
    
    //Kitérés
    $type = "magneticfield";
    $equipment[$type]["type"] = $type;
    $equipment[$type]["name"] = "Mágneses köd";
    $equipment[$type]["weight"] = 150;
    $equipment[$type]["maxequipped"] = 1;
    $equipment[$type]["energyusage"] = 25;
    $equipment[$type]["duration"] = 5;
    $equipment[$type]["effect"] = 0.35;
    $equipment[$type]["reload"] = 10;
    $equipment[$type]["resource"]["wire"] = 5;
    $equipment[$type]["resource"]["panel"] = 2;
    $equipment[$type]["resource"]["electronics"] = 5;
    $equipment[$type]["resource"]["energycell"] = 3;
    
    //Overtime energiacsökkentés
    $type = "energyleech";
    $equipment[$type]["type"] = $type;
    $equipment[$type]["name"] = "Energiaelszívás";
    $equipment[$type]["weight"] = 100;
    $equipment[$type]["maxequipped"] = 1;
    $equipment[$type]["energyusage"] = 10;
    $equipment[$type]["duration"] = 3;
    $equipment[$type]["effect"] = 10;
    $equipment[$type]["reload"] = 5;
    $equipment[$type]["resource"]["wire"] = 5;
    $equipment[$type]["resource"]["panel"] = 2;
    $equipment[$type]["resource"]["electronics"] = 5;
    $equipment[$type]["resource"]["energycell"] = 3;
    
    //Generátorok kikapcsolása
    $type = "cybervirus";
    $equipment[$type]["type"] = $type;
    $equipment[$type]["name"] = "Kibervírus";
    $equipment[$type]["weight"] = 100;
    $equipment[$type]["maxequipped"] = 1;
    $equipment[$type]["energyusage"] = 20;
    $equipment[$type]["duration"] = 3;
    $equipment[$type]["reload"] = 5;
    $equipment[$type]["resource"]["wire"] = 5;
    $equipment[$type]["resource"]["panel"] = 2;
    $equipment[$type]["resource"]["electronics"] = 5;
    $equipment[$type]["resource"]["energycell"] = 3;
    
    //Képességek blokkolása
    $type = "ioncannon";
    $equipment[$type]["type"] = $type;
    $equipment[$type]["name"] = "Ionágyú";
    $equipment[$type]["weight"] = 100;
    $equipment[$type]["maxequipped"] = 1;
    $equipment[$type]["energyusage"] = 20;
    $equipment[$type]["duration"] = 3;
    $equipment[$type]["reload"] = 5;
    $equipment[$type]["resource"]["wire"] = 5;
    $equipment[$type]["resource"]["panel"] = 2;
    $equipment[$type]["resource"]["electronics"] = 5;
    $equipment[$type]["resource"]["energycell"] = 3;
    
    //Találati esély csökkentés
    $type = "pld";
    $equipment[$type]["type"] = $type;
    $equipment[$type]["name"] = "Plazma zavaró egység";
    $equipment[$type]["weight"] = 50;
    $equipment[$type]["maxequipped"] = 2;
    $equipment[$type]["energyusage"] = 20;
    $equipment[$type]["duration"] = 3;
    $equipment[$type]["reload"] = 5;
    $equipment[$type]["resource"]["wire"] = 3;
    $equipment[$type]["resource"]["panel"] = 2;
    $equipment[$type]["resource"]["electronics"] = 3;
    $equipment[$type]["resource"]["energycell"] = 2;
    
    //Személyszállítás
    $type = "cabin";
    $equipment[$type]["type"] = $type;
    $equipment[$type]["name"] = "Kabin";
    $equipment[$type]["weight"] = 10;
    $equipment[$type]["maxequipped"] = 0;
    $equipment[$type]["capacity"] = 5;
    $equipment[$type]["resource"]["wire"] = 2;
    $equipment[$type]["resource"]["panel"] = 1;
    $equipment[$type]["resource"]["electronics"] = 2;
    
    //Teherszállítás
    $type = "container";
    $equipment[$type]["type"] = $type;
    $equipment[$type]["name"] = "Konténer";
    $equipment[$type]["weight"] = 10;
    $equipment[$type]["maxequipped"] = 0;
    $equipment[$type]["capacity"] = 50;
    $equipment[$type]["resource"]["wire"] = 1;
    $equipment[$type]["resource"]["panel"] = 2;
    $equipment[$type]["resource"]["electronics"] = 1;
    
    //Kolonizáció
    $type = "colony";
    $equipment[$type]["type"] = $type;
    $equipment[$type]["name"] = "Kolónia";
    $equipment[$type]["weight"] = 10;
    $equipment[$type]["maxequipped"] = 1;
    $equipment[$type]["capacity"] = 200;
    $equipment[$type]["resource"]["board"] = 90;
    $equipment[$type]["resource"]["brick"] = 140;
    $equipment[$type]["resource"]["metal"] = 130;
    $equipment[$type]["resource"]["wire"] = 5;
    $equipment[$type]["resource"]["panel"] = 10;
    $equipment[$type]["resource"]["electronics"] = 2;
    $equipment[$type]["resource"]["citizen"] = 10;
    
    writeData("equipment", $equipment);
?>