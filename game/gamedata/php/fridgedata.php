<?php
    include("writer.php");
    
    $defaultFridge["type"] = "fridge";
    $defaultFridge["name"] = "Hűtőház";
    $defaultFridge["slot"] = "building";
    
    $level = 1;
    $fridge[$level] = $defaultFridge;
    $fridge[$level]["level"] = $level;
    $fridge[$level]["constructiontime"] = 5;
    $fridge[$level]["maxhr"] = 1;
    $fridge[$level]["capacity"] = 1000;
    $fridge[$level]["resource"]["board"] = 15;
    $fridge[$level]["resource"]["brick"] = 15;
    $fridge[$level]["resource"]["metal"] = 10;
    
    $level = 2;
    $fridge[$level] = $defaultFridge;
    $fridge[$level]["level"] = $level;
    $fridge[$level]["constructiontime"] = 10;
    $fridge[$level]["maxhr"] = 1;
    $fridge[$level]["capacity"] = 1500;
    $fridge[$level]["resource"]["board"] = 25;
    $fridge[$level]["resource"]["brick"] = 25;
    $fridge[$level]["resource"]["metal"] = 15;
    
    $level = 3;
    $fridge[$level] = $defaultFridge;
    $fridge[$level]["level"] = $level;
    $fridge[$level]["constructiontime"] = 15;
    $fridge[$level]["maxhr"] = 1;
    $fridge[$level]["capacity"] = 2000;
    $fridge[$level]["resource"]["board"] = 40;
    $fridge[$level]["resource"]["brick"] = 40;
    $fridge[$level]["resource"]["metal"] = 20;
    $fridge[$level]["resource"]["wire"] = 10;
    
    $level = 4;
    $fridge[$level] = $defaultFridge;
    $fridge[$level]["level"] = $level;
    $fridge[$level]["constructiontime"] = 35;
    $fridge[$level]["maxhr"] = 2;
    $fridge[$level]["capacity"] = 4000;
    $fridge[$level]["resource"]["board"] = 60;
    $fridge[$level]["resource"]["brick"] = 60;
    $fridge[$level]["resource"]["metal"] = 30;
    $fridge[$level]["resource"]["wire"] = 15;
    
    $level = 5;
    $fridge[$level] = $defaultFridge;
    $fridge[$level]["level"] = $level;
    $fridge[$level]["constructiontime"] = 45;
    $fridge[$level]["maxhr"] = 2;
    $fridge[$level]["capacity"] = 6000;
    $fridge[$level]["resource"]["board"] = 90;
    $fridge[$level]["resource"]["brick"] = 90;
    $fridge[$level]["resource"]["metal"] = 45;
    $fridge[$level]["resource"]["wire"] = 25;
    
    $level = 6;
    $fridge[$level] = $defaultFridge;
    $fridge[$level]["level"] = $level;
    $fridge[$level]["constructiontime"] = 75;
    $fridge[$level]["maxhr"] = 3;
    $fridge[$level]["capacity"] = 8000;
    $fridge[$level]["resource"]["board"] = 120;
    $fridge[$level]["resource"]["brick"] = 120;
    $fridge[$level]["resource"]["metal"] = 75;
    $fridge[$level]["resource"]["wire"] = 40;
    $fridge[$level]["resource"]["electronics"] = 10;
    
    $level = 7;
    $fridge[$level] = $defaultFridge;
    $fridge[$level]["level"] = $level;
    $fridge[$level]["constructiontime"] = 100;
    $fridge[$level]["maxhr"] = 3;
    $fridge[$level]["capacity"] = 10000;
    $fridge[$level]["resource"]["board"] = 175;
    $fridge[$level]["resource"]["brick"] = 175;
    $fridge[$level]["resource"]["metal"] = 120;
    $fridge[$level]["resource"]["wire"] = 60;
    $fridge[$level]["resource"]["electronics"] = 20;
    
    $level = 8;
    $fridge[$level] = $defaultFridge;
    $fridge[$level]["level"] = $level;
    $fridge[$level]["constructiontime"] = 125;
    $fridge[$level]["maxhr"] = 3;
    $fridge[$level]["capacity"] = 12500;
    $fridge[$level]["resource"]["board"] = 250;
    $fridge[$level]["resource"]["brick"] = 250;
    $fridge[$level]["resource"]["metal"] = 200;
    $fridge[$level]["resource"]["wire"] = 100;
    $fridge[$level]["resource"]["electronics"] = 40;
    
    $level = 9;
    $fridge[$level] = $defaultFridge;
    $fridge[$level]["level"] = $level;
    $fridge[$level]["constructiontime"] = 200;
    $fridge[$level]["maxhr"] = 4;
    $fridge[$level]["capacity"] = 15000;
    $fridge[$level]["resource"]["board"] = 350;
    $fridge[$level]["resource"]["brick"] = 350;
    $fridge[$level]["resource"]["metal"] = 300;
    $fridge[$level]["resource"]["wire"] = 150;
    $fridge[$level]["resource"]["electronics"] = 60;
    
    $level = 10;
    $fridge[$level] = $defaultFridge;
    $fridge[$level]["level"] = $level;
    $fridge[$level]["constructiontime"] = 300;
    $fridge[$level]["maxhr"] = 4;
    $fridge[$level]["capacity"] = 20000;
    $fridge[$level]["resource"]["board"] = 450;
    $fridge[$level]["resource"]["brick"] = 450;
    $fridge[$level]["resource"]["metal"] = 450;
    $fridge[$level]["resource"]["wire"] = 200;
    $fridge[$level]["resource"]["electronics"] = 100;
    
    writeData("fridge", $fridge);
?>