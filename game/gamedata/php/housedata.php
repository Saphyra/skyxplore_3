<?php
    $house["typename"] = "Lakóház";
    $defaultHouse["type"] = "house";
    $defaultHouse["name"] = "Lakóház";
    $defaultHouse["slot"] = "building";
    
    $level = 1;
    $house[$level] = $defaultHouse;
    $house[$level]["level"] = $level;
    $house[$level]["constructiontime"] = 10;
    $house[$level]["maxhr"] = 1;
    $house[$level]["capacity"] = 10;
    $house[$level]["resource"]["board"] = 10;
    $house[$level]["resource"]["brick"] = 20;
    
    $level = 2;
    $house[$level] = $defaultHouse;
    $house[$level]["level"] = $level;
    $house[$level]["constructiontime"] = 30;
    $house[$level]["maxhr"] = 2;
    $house[$level]["capacity"] = 15;
    $house[$level]["resource"]["board"] = 30;
    $house[$level]["resource"]["brick"] = 60;
    $house[$level]["resource"]["metal"] = 10;
    
    $level = 3;
    $house[$level] = $defaultHouse;
    $house[$level]["level"] = $level;
    $house[$level]["constructiontime"] = 60;
    $house[$level]["maxhr"] = 3;
    $house[$level]["capacity"] = 20;
    $house[$level]["resource"]["board"] = 90;
    $house[$level]["resource"]["brick"] = 180;
    $house[$level]["resource"]["metal"] = 30;
    $house[$level]["resource"]["wire"] = 10;
    
    writeData("house", $house);
?>