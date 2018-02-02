<?php
    $defaultMine["type"] = "mine";
    $defaultMine["name"] = "Bánya";
    $defaultMine["slot"] = "minefield";
    $defaultMine["income"] = 25;
    
    $level = 1;
    $mine[$level] = $defaultMine;
    $mine[$level]["level"] = $level;
    $mine[$level]["constructiontime"] = 20;
    $mine[$level]["maxhr"] = 1;
    $mine[$level]["workplace"] = 2;
    $mine[$level]["resource"]["board"] = 20;
    $mine[$level]["resource"]["brick"] = 20;
    $mine[$level]["resource"]["metal"] = 50;
    
    $level = 2;
    $mine[$level] = $defaultMine;
    $mine[$level]["level"] = $level;
    $mine[$level]["constructiontime"] = 50;
    $mine[$level]["maxhr"] = 2;
    $mine[$level]["workplace"] = 4;
    $mine[$level]["resource"]["board"] = 60;
    $mine[$level]["resource"]["brick"] = 60;
    $mine[$level]["resource"]["metal"] = 150;
    $mine[$level]["resource"]["wire"] = 20;
    
    $level = 3;
    $mine[$level] = $defaultMine;
    $mine[$level]["level"] = $level;
    $mine[$level]["constructiontime"] = 105;
    $mine[$level]["maxhr"] = 3;
    $mine[$level]["workplace"] = 8;
    $mine[$level]["resource"]["board"] = 180;
    $mine[$level]["resource"]["brick"] = 180;
    $mine[$level]["resource"]["metal"] = 450;
    $mine[$level]["resource"]["wire"] = 60;
    $mine[$level]["resource"]["electronics"] = 20;
    
    writeData("mine", $mine);
?>