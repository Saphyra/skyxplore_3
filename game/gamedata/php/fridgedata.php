<?php
    $fridge["typename"] = "Hűtőház";
    $defaultFridge["type"] = "fridge";
    $defaultFridge["name"] = "Hűtőház";
    $defaultFridge["slot"] = "building";
    $defaultFridge["role"] = "economy";
    $defaultFridge["source"] = "fridge";
    
    $level = 1;
    $fridge[$level] = $defaultFridge;
    $fridge[$level]["key"] = $level;
    $fridge[$level]["level"] = $level;
    $fridge[$level]["constructiontime"] = 5;
    $fridge[$level]["maxhr"] = 1;
    $fridge[$level]["capacity"] = 1000;
    $fridge[$level]["resource"]["board"] = 15;
    $fridge[$level]["resource"]["brick"] = 15;
    $fridge[$level]["resource"]["metal"] = 10;
    
    $level = 2;
    $fridge[$level] = $defaultFridge;
    $fridge[$level]["key"] = $level;
    $fridge[$level]["level"] = $level;
    $fridge[$level]["constructiontime"] = 20;
    $fridge[$level]["maxhr"] = 2;
    $fridge[$level]["capacity"] = 1500;
    $fridge[$level]["resource"]["board"] = 45;
    $fridge[$level]["resource"]["brick"] = 45;
    $fridge[$level]["resource"]["metal"] = 30;
    $fridge[$level]["resource"]["wire"] = 5;
    
    $level = 3;
    $fridge[$level] = $defaultFridge;
    $fridge[$level]["key"] = $level;
    $fridge[$level]["level"] = $level;
    $fridge[$level]["constructiontime"] = 45;
    $fridge[$level]["maxhr"] = 3;
    $fridge[$level]["capacity"] = 2000;
    $fridge[$level]["resource"]["board"] = 135;
    $fridge[$level]["resource"]["brick"] = 135;
    $fridge[$level]["resource"]["metal"] = 90;
    $fridge[$level]["resource"]["wire"] = 15;
    $fridge[$level]["resource"]["electronics"] = 5;
    
    writeData("fridge", $fridge);
?>