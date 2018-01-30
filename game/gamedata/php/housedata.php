<?php
    include("writer.php");
    
    $defaultHouse["type"] = "house";
    $defaultHouse["name"] = "Lakóház";
    $defaultHouse["slot"] = "building";
    
    $level = 1;
    $house[$level] = $defaultHouse;
    $house[$level]["level"] = $level;
    $house[$level]["constructiontime"] = 10;
    $house[$level]["capacity"] = 10;
    $house[$level]["resource"]["board"] = 10;
    $house[$level]["resource"]["brick"] = 20;
    $house[$level]["maxhr"] = 1;
    
    $level = 2;
    $house[$level] = $defaultHouse;
    $house[$level]["level"] = $level;
    $house[$level]["constructiontime"] = 10;
    $house[$level]["capacity"] = 15;
    $house[$level]["resource"]["board"] = 15;
    $house[$level]["resource"]["brick"] = 30;
    $house[$level]["maxhr"] = 1;
    
    $level = 3;
    $house[$level] = $defaultHouse;
    $house[$level]["level"] = $level;
    $house[$level]["constructiontime"] = 15;
    $house[$level]["capacity"] = 20;
    $house[$level]["resource"]["board"] = 20;
    $house[$level]["resource"]["brick"] = 40;
    $house[$level]["resource"]["wire"] = 5;
    $house[$level]["maxhr"] = 1;
    
    $level = 4;
    $house[$level] = $defaultHouse;
    $house[$level]["level"] = $level;
    $house[$level]["constructiontime"] = 35;
    $house[$level]["capacity"] = 25;
    $house[$level]["resource"]["board"] = 30;
    $house[$level]["resource"]["brick"] = 60;
    $house[$level]["resource"]["wire"] = 10;
    $house[$level]["maxhr"] = 2;
    
    $level = 5;
    $house[$level] = $defaultHouse;
    $house[$level]["level"] = $level;
    $house[$level]["constructiontime"] = 45;
    $house[$level]["capacity"] = 30;
    $house[$level]["resource"]["board"] = 50;
    $house[$level]["resource"]["brick"] = 100;
    $house[$level]["resource"]["wire"] = 10;
    $house[$level]["maxhr"] = 2;
    
    $level = 6;
    $house[$level] = $defaultHouse;
    $house[$level]["level"] = $level;
    $house[$level]["constructiontime"] = 75;
    $house[$level]["capacity"] = 35;
    $house[$level]["resource"]["board"] = 75;
    $house[$level]["resource"]["brick"] = 150;
    $house[$level]["resource"]["wire"] = 15;
    $house[$level]["resource"]["electronics"] = 5;
    $house[$level]["maxhr"] = 3;
    
    $level = 7;
    $house[$level] = $defaultHouse;
    $house[$level]["level"] = $level;
    $house[$level]["constructiontime"] = 100;
    $house[$level]["capacity"] = 40;
    $house[$level]["resource"]["board"] = 100;
    $house[$level]["resource"]["brick"] = 200;
    $house[$level]["resource"]["wire"] = 20;
    $house[$level]["resource"]["electronics"] = 10;
    $house[$level]["maxhr"] = 3;
    
    $level = 8;
    $house[$level] = $defaultHouse;
    $house[$level]["level"] = $level;
    $house[$level]["constructiontime"] = 125;
    $house[$level]["capacity"] = 45;
    $house[$level]["resource"]["board"] = 125;
    $house[$level]["resource"]["brick"] = 250;
    $house[$level]["resource"]["wire"] = 30;
    $house[$level]["resource"]["electronics"] = 15;
    $house[$level]["maxhr"] = 3;
    
    $level = 9;
    $house[$level] = $defaultHouse;
    $house[$level]["level"] = $level;
    $house[$level]["constructiontime"] = 200;
    $house[$level]["capacity"] = 50;
    $house[$level]["resource"]["board"] = 150;
    $house[$level]["resource"]["brick"] = 300;
    $house[$level]["resource"]["wire"] = 40;
    $house[$level]["resource"]["electronics"] = 20;
    $house[$level]["maxhr"] = 4;
    
    $level = 10;
    $house[$level] = $defaultHouse;
    $house[$level]["level"] = $level;
    $house[$level]["constructiontime"] = 300;
    $house[$level]["capacity"] = 60;
    $house[$level]["resource"]["board"] = 200;
    $house[$level]["resource"]["brick"] = 400;
    $house[$level]["resource"]["wire"] = 50;
    $house[$level]["resource"]["electronics"] = 25;
    $house[$level]["maxhr"] = 4;
    
    writeData("house", $house);
?>