<?php
    $defaultEquipment["type"] = "equipment";
    
    //Overtime armor recharge
    $subtype = "regeneration";
    $equipment[$subtype]["subtype"] = $subtype;
    $equipment[$subtype]["name"] = "Regeneráció";
    $equipment[$subtype]["weight"] = 50;
    $equipment[$subtype]["maxequipped"] = 3;
    $equipment[$subtype]["energyusage"] = 20;
    $equipment[$subtype]["duration"] = 5;
    $equipment[$subtype]["effect"] = 1500;
    $equipment[$subtype]["reload"] = 3;
    $equipment[$subtype]["resource"]["wire"] = 3;
    $equipment[$subtype]["resource"]["panel"] = 2;
    $equipment[$subtype]["resource"]["electronics"] = 5;
    $equipment[$subtype]["resource"]["energycell"] = 3;
    
    //Overtime shield recharge
    $subtype = "shieldrecharge";
    $equipment[$subtype]["subtype"] = $subtype;
    $equipment[$subtype]["name"] = "Pajzstöltés";
    $equipment[$subtype]["weight"] = 50;
    $equipment[$subtype]["maxequipped"] = 3;
    $equipment[$subtype]["energyusage"] = 20;
    $equipment[$subtype]["duration"] = 5;
    $equipment[$subtype]["effect"] = 1000;
    $equipment[$subtype]["reload"] = 3;
    $equipment[$subtype]["resource"]["wire"] = 3;
    $equipment[$subtype]["resource"]["panel"] = 2;
    $equipment[$subtype]["resource"]["electronics"] = 5;
    $equipment[$subtype]["resource"]["energycell"] = 3;
    
    //Overtime energy recharge
    $subtype = "energyrecharge";
    $equipment[$subtype]["subtype"] = $subtype;
    $equipment[$subtype]["name"] = "Energiatöltés";
    $equipment[$subtype]["weight"] = 50;
    $equipment[$subtype]["maxequipped"] = 3;
    $equipment[$subtype]["energyusage"] = 20;
    $equipment[$subtype]["duration"] = 5;
    $equipment[$subtype]["effect"] = 5;
    $equipment[$subtype]["reload"] = 3;
    $equipment[$subtype]["resource"]["wire"] = 3;
    $equipment[$subtype]["resource"]["panel"] = 2;
    $equipment[$subtype]["resource"]["electronics"] = 5;
    $equipment[$subtype]["resource"]["energycell"] = 3;
    
    //Sebzés átvállalás
    $subtype = "maneuver";
    $equipment[$subtype]["subtype"] = $subtype;
    $equipment[$subtype]["name"] = "Életmentő manőver";
    $equipment[$subtype]["weight"] = 100;
    $equipment[$subtype]["maxequipped"] = 1;
    $equipment[$subtype]["energyusage"] = 25;
    $equipment[$subtype]["duration"] = 2;
    $equipment[$subtype]["reload"] = 5;
    $equipment[$subtype]["resource"]["wire"] = 5;
    $equipment[$subtype]["resource"]["panel"] = 3;
    $equipment[$subtype]["resource"]["electronics"] = 5;
    $equipment[$subtype]["resource"]["energycell"] = 2;
    
    //Sebzés csökkentés a páncélon
    $subtype = "kineticshield";
    $equipment[$subtype]["subtype"] = $subtype;
    $equipment[$subtype]["name"] = "Kinetikus pajzs";
    $equipment[$subtype]["weight"] = 100;
    $equipment[$subtype]["maxequipped"] = 2;
    $equipment[$subtype]["energyusage"] = 25;
    $equipment[$subtype]["duration"] = 3;
    $equipment[$subtype]["effect"] = 0.5;
    $equipment[$subtype]["reload"] = 6;
    $equipment[$subtype]["resource"]["wire"] = 3;
    $equipment[$subtype]["resource"]["panel"] = 2;
    $equipment[$subtype]["resource"]["electronics"] = 5;
    $equipment[$subtype]["resource"]["energycell"] = 3;
    
    //Pajzslopás sebzés alapján
    $subtype = "shieldleech";
    $equipment[$subtype]["subtype"] = $subtype;
    $equipment[$subtype]["name"] = "Pajzslopás";
    $equipment[$subtype]["weight"] = 150;
    $equipment[$subtype]["maxequipped"] = 1;
    $equipment[$subtype]["energyusage"] = 25;
    $equipment[$subtype]["duration"] = 5;
    $equipment[$subtype]["effect"] = 0.5;
    $equipment[$subtype]["reload"] = 10;
    $equipment[$subtype]["resource"]["wire"] = 5;
    $equipment[$subtype]["resource"]["panel"] = 2;
    $equipment[$subtype]["resource"]["electronics"] = 5;
    $equipment[$subtype]["resource"]["energycell"] = 3;
    
    //Sebezhetetlenség
    $subtype = "energyfield";
    $equipment[$subtype]["subtype"] = $subtype;
    $equipment[$subtype]["name"] = "Energiamező";
    $equipment[$subtype]["weight"] = 150;
    $equipment[$subtype]["maxequipped"] = 1;
    $equipment[$subtype]["energyusage"] = 25;
    $equipment[$subtype]["duration"] = 3;
    $equipment[$subtype]["reload"] = 10;
    $equipment[$subtype]["resource"]["wire"] = 5;
    $equipment[$subtype]["resource"]["panel"] = 2;
    $equipment[$subtype]["resource"]["electronics"] = 5;
    $equipment[$subtype]["resource"]["energycell"] = 3;
    
    //Kitérés
    $subtype = "magneticfield";
    $equipment[$subtype]["subtype"] = $subtype;
    $equipment[$subtype]["name"] = "Mágneses köd";
    $equipment[$subtype]["weight"] = 150;
    $equipment[$subtype]["maxequipped"] = 1;
    $equipment[$subtype]["energyusage"] = 25;
    $equipment[$subtype]["duration"] = 5;
    $equipment[$subtype]["effect"] = 0.35;
    $equipment[$subtype]["reload"] = 10;
    $equipment[$subtype]["resource"]["wire"] = 5;
    $equipment[$subtype]["resource"]["panel"] = 2;
    $equipment[$subtype]["resource"]["electronics"] = 5;
    $equipment[$subtype]["resource"]["energycell"] = 3;
    
    //Overtime energiacsökkentés
    $subtype = "energyleech";
    $equipment[$subtype]["subtype"] = $subtype;
    $equipment[$subtype]["name"] = "Energiaelszívás";
    $equipment[$subtype]["weight"] = 100;
    $equipment[$subtype]["maxequipped"] = 1;
    $equipment[$subtype]["energyusage"] = 10;
    $equipment[$subtype]["duration"] = 3;
    $equipment[$subtype]["effect"] = 10;
    $equipment[$subtype]["reload"] = 5;
    $equipment[$subtype]["resource"]["wire"] = 5;
    $equipment[$subtype]["resource"]["panel"] = 2;
    $equipment[$subtype]["resource"]["electronics"] = 5;
    $equipment[$subtype]["resource"]["energycell"] = 3;
    
    //Generátorok kikapcsolása
    $subtype = "cybervirus";
    $equipment[$subtype]["subtype"] = $subtype;
    $equipment[$subtype]["name"] = "Kibervírus";
    $equipment[$subtype]["weight"] = 100;
    $equipment[$subtype]["maxequipped"] = 1;
    $equipment[$subtype]["energyusage"] = 20;
    $equipment[$subtype]["duration"] = 3;
    $equipment[$subtype]["reload"] = 5;
    $equipment[$subtype]["resource"]["wire"] = 5;
    $equipment[$subtype]["resource"]["panel"] = 2;
    $equipment[$subtype]["resource"]["electronics"] = 5;
    $equipment[$subtype]["resource"]["energycell"] = 3;
    
    //Képességek blokkolása
    $subtype = "ioncannon";
    $equipment[$subtype]["subtype"] = $subtype;
    $equipment[$subtype]["name"] = "Ionágyú";
    $equipment[$subtype]["weight"] = 100;
    $equipment[$subtype]["maxequipped"] = 1;
    $equipment[$subtype]["energyusage"] = 20;
    $equipment[$subtype]["duration"] = 3;
    $equipment[$subtype]["reload"] = 5;
    $equipment[$subtype]["resource"]["wire"] = 5;
    $equipment[$subtype]["resource"]["panel"] = 2;
    $equipment[$subtype]["resource"]["electronics"] = 5;
    $equipment[$subtype]["resource"]["energycell"] = 3;
    
    //Találati esély csökkentés
    $subtype = "pld";
    $equipment[$subtype]["subtype"] = $subtype;
    $equipment[$subtype]["name"] = "Plazma zavaró egység";
    $equipment[$subtype]["weight"] = 50;
    $equipment[$subtype]["maxequipped"] = 2;
    $equipment[$subtype]["energyusage"] = 20;
    $equipment[$subtype]["duration"] = 3;
    $equipment[$subtype]["reload"] = 5;
    $equipment[$subtype]["resource"]["wire"] = 3;
    $equipment[$subtype]["resource"]["panel"] = 2;
    $equipment[$subtype]["resource"]["electronics"] = 3;
    $equipment[$subtype]["resource"]["energycell"] = 2;
    
    //Személyszállítás
    $subtype = "cabin";
    $equipment[$subtype]["subtype"] = $subtype;
    $equipment[$subtype]["name"] = "Kabin";
    $equipment[$subtype]["weight"] = 10;
    $equipment[$subtype]["maxequipped"] = 0;
    $equipment[$subtype]["capacity"] = 5;
    $equipment[$subtype]["resource"]["wire"] = 2;
    $equipment[$subtype]["resource"]["panel"] = 1;
    $equipment[$subtype]["resource"]["electronics"] = 2;
    
    //Teherszállítás
    $subtype = "container";
    $equipment[$subtype]["subtype"] = $subtype;
    $equipment[$subtype]["name"] = "Konténer";
    $equipment[$subtype]["weight"] = 10;
    $equipment[$subtype]["maxequipped"] = 0;
    $equipment[$subtype]["capacity"] = 50;
    $equipment[$subtype]["resource"]["wire"] = 1;
    $equipment[$subtype]["resource"]["panel"] = 2;
    $equipment[$subtype]["resource"]["electronics"] = 1;
    
    //Kolonizáció
    $subtype = "colony";
    $equipment[$subtype]["subtype"] = $subtype;
    $equipment[$subtype]["name"] = "Kolónia";
    $equipment[$subtype]["weight"] = 10;
    $equipment[$subtype]["maxequipped"] = 1;
    $equipment[$subtype]["capacity"] = 200;
    $equipment[$subtype]["resource"]["board"] = 90;
    $equipment[$subtype]["resource"]["brick"] = 140;
    $equipment[$subtype]["resource"]["metal"] = 130;
    $equipment[$subtype]["resource"]["wire"] = 5;
    $equipment[$subtype]["resource"]["panel"] = 10;
    $equipment[$subtype]["resource"]["electronics"] = 2;
    $equipment[$subtype]["resource"]["citizen"] = 10;
    
    writeData("equipment", $equipment);
?>