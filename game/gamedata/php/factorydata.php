<?php
    $factory["typename"] = "Gyár";
    $defaultFactory["type"] = "factory";
    $defaultFactory["name"] = "Gyár";
    $defaultFactory["slot"] = "building";
    $defaultFactory["role"] = "industry";
    $defaultFactory["source"] = "factory";
    
    $level = 1;
    $factory[$level] = $defaultFactory;
    $factory[$level]["key"] = $level;
    $factory[$level]["level"] = $level;
    $factory[$level]["constructiontime"] = 15;
    $factory[$level]["maxhr"] = 1;
    $factory[$level]["workplace"] = 2;
    $factory[$level]["productivity"] = 25;
    $factory[$level]["resource"]["board"] = 10;
    $factory[$level]["resource"]["brick"] = 30;
    $factory[$level]["resource"]["metal"] = 50;
    
    $level = 2;
    $factory[$level] = $defaultFactory;
    $factory[$level]["key"] = $level;
    $factory[$level]["level"] = $level;
    $factory[$level]["constructiontime"] = 40;
    $factory[$level]["maxhr"] = 2;
    $factory[$level]["workplace"] = 4;
    $factory[$level]["productivity"] = 25;
    $factory[$level]["resource"]["board"] = 30;
    $factory[$level]["resource"]["brick"] = 90;
    $factory[$level]["resource"]["metal"] = 150;
    $factory[$level]["resource"]["wire"] = 20;
    
    $level = 3;
    $factory[$level] = $defaultFactory;
    $factory[$level]["key"] = $level;
    $factory[$level]["level"] = $level;
    $factory[$level]["constructiontime"] = 75;
    $factory[$level]["maxhr"] = 3;
    $factory[$level]["workplace"] = 8;
    $factory[$level]["productivity"] = 30;
    $factory[$level]["resource"]["board"] = 90;
    $factory[$level]["resource"]["brick"] = 270;
    $factory[$level]["resource"]["metal"] = 350;
    $factory[$level]["resource"]["wire"] = 60;
    $factory[$level]["resource"]["electronics"] = 30;
    
    writeData("factory", $factory);
?>