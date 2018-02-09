<?php
    $battery["typename"] = "Akkumulátor";

    $defaultBattery["type"] = "battery";
    $defaultBattery["name"] = "Akkumulátor";
    $defaultBattery["storage"] = "storage";
    $defaultBattery["weight"] = 10;
    
    $level = 1;
    $battery[$level] = $defaultBattery;
    $battery[$level]["level"] = $level;
    $battery[$level]["capacity"] = 200;
    $battery[$level]["resource"]["wire"] = 2;
    $battery[$level]["resource"]["panel"] = 1;
    $battery[$level]["resource"]["electronics"] = 1;
    $battery[$level]["resource"]["energycell"] = 2;
    
    $level = 2;
    $battery[$level] = $defaultBattery;
    $battery[$level]["level"] = $level;
    $battery[$level]["capacity"] = 300;
    $battery[$level]["resource"]["wire"] = 6;
    $battery[$level]["resource"]["panel"] = 3;
    $battery[$level]["resource"]["electronics"] = 3;
    $battery[$level]["resource"]["energycell"] = 6;
    
    $level = 3;
    $battery[$level] = $defaultBattery;
    $battery[$level]["level"] = $level;
    $battery[$level]["capacity"] = 400;
    $battery[$level]["resource"]["wire"] = 18;
    $battery[$level]["resource"]["panel"] = 9;
    $battery[$level]["resource"]["electronics"] = 9;
    $battery[$level]["resource"]["energycell"] = 18;
    
    writeData("battery", $battery);
?>