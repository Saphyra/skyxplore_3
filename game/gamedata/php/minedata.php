<?php
    include("writer.php");
    
    $defaultMine["type"] = "mine";
    $defaultMine["name"] = "Bánya";
    $defaultMine["slot"] = "minefield";
    $defaultMine["income"] = 25;
    
    $level = 1;
    $mine[$level] = $defaultMine;
    $mine[$level]["level"] = $level;
    $mine[$level]["constructiontime"] = 20;
    $mine[$level]["maxhr"] = 1;
    $mine[$level]["workplace"] = $level * 2;
    $mine[$level]["resource"]["board"] = 20;
    $mine[$level]["resource"]["brick"] = 20;
    $mine[$level]["resource"]["metal"] = 50;
    
    $level = 2;
    $mine[$level] = $defaultMine;
    $mine[$level]["level"] = $level;
    $mine[$level]["constructiontime"] = 25;
    $mine[$level]["maxhr"] = 1;
    $mine[$level]["workplace"] = $level * 2;
    $mine[$level]["resource"]["board"] = 30;
    $mine[$level]["resource"]["brick"] = 30;
    $mine[$level]["resource"]["metal"] = 75;
    
    $level = 3;
    $mine[$level] = $defaultMine;
    $mine[$level]["level"] = $level;
    $mine[$level]["constructiontime"] = 60;
    $mine[$level]["maxhr"] = 2;
    $mine[$level]["workplace"] = $level * 2;
    $mine[$level]["resource"]["board"] = 50;
    $mine[$level]["resource"]["brick"] = 50;
    $mine[$level]["resource"]["metal"] = 120;
    $mine[$level]["resource"]["wire"] = 20;
    
    $level = 4;
    $mine[$level] = $defaultMine;
    $mine[$level]["level"] = $level;
    $mine[$level]["constructiontime"] = 75;
    $mine[$level]["maxhr"] = 2;
    $mine[$level]["workplace"] = $level * 2;
    $mine[$level]["resource"]["board"] = 75;
    $mine[$level]["resource"]["brick"] = 75;
    $mine[$level]["resource"]["metal"] = 180;
    $mine[$level]["resource"]["wire"] = 35;
    
    $level = 5;
    $mine[$level] = $defaultMine;
    $mine[$level]["level"] = $level;
    $mine[$level]["constructiontime"] = 140;
    $mine[$level]["maxhr"] = 3;
    $mine[$level]["workplace"] = $level * 2;
    $mine[$level]["resource"]["board"] = 100;
    $mine[$level]["resource"]["brick"] = 100;
    $mine[$level]["resource"]["metal"] = 250;
    $mine[$level]["resource"]["wire"] = 50;
    $mine[$level]["resource"]["electronics"] = 15;
    
    $level = 6;
    $mine[$level] = $defaultMine;
    $mine[$level]["level"] = $level;
    $mine[$level]["constructiontime"] = 155;
    $mine[$level]["maxhr"] = 3;
    $mine[$level]["workplace"] = $level * 2;
    $mine[$level]["resource"]["board"] = 125;
    $mine[$level]["resource"]["brick"] = 125;
    $mine[$level]["resource"]["metal"] = 300;
    $mine[$level]["resource"]["wire"] = 75;
    $mine[$level]["resource"]["electronics"] = 25;
    
    $level = 7;
    $mine[$level] = $defaultMine;
    $mine[$level]["level"] = $level;
    $mine[$level]["constructiontime"] = 175;
    $mine[$level]["maxhr"] = 3;
    $mine[$level]["workplace"] = $level * 2;
    $mine[$level]["resource"]["board"] = 150;
    $mine[$level]["resource"]["brick"] = 150;
    $mine[$level]["resource"]["metal"] = 350;
    $mine[$level]["resource"]["wire"] = 100;
    $mine[$level]["resource"]["electronics"] = 50;
    
    $level = 8;
    $mine[$level] = $defaultMine;
    $mine[$level]["level"] = $level;
    $mine[$level]["constructiontime"] = 250;
    $mine[$level]["maxhr"] = 4;
    $mine[$level]["workplace"] = $level * 2;
    $mine[$level]["resource"]["board"] = 200;
    $mine[$level]["resource"]["brick"] = 200;
    $mine[$level]["resource"]["metal"] = 450;
    $mine[$level]["resource"]["wire"] = 150;
    $mine[$level]["resource"]["electronics"] = 75;
    
    $level = 9;
    $mine[$level] = $defaultMine;
    $mine[$level]["level"] = $level;
    $mine[$level]["constructiontime"] = 275;
    $mine[$level]["maxhr"] = 4;
    $mine[$level]["workplace"] = $level * 2;
    $mine[$level]["resource"]["board"] = 250;
    $mine[$level]["resource"]["brick"] = 250;
    $mine[$level]["resource"]["metal"] = 600;
    $mine[$level]["resource"]["wire"] = 200;
    $mine[$level]["resource"]["electronics"] = 125;
    
    $level = 10;
    $mine[$level] = $defaultMine;
    $mine[$level]["level"] = $level;
    $mine[$level]["constructiontime"] = 375;
    $mine[$level]["maxhr"] = 5;
    $mine[$level]["workplace"] = $level * 2;
    $mine[$level]["resource"]["board"] = 300;
    $mine[$level]["resource"]["brick"] = 300;
    $mine[$level]["resource"]["metal"] = 750;
    $mine[$level]["resource"]["wire"] = 250;
    $mine[$level]["resource"]["electronics"] = 175;
    
    writeData("mine", $mine);
?>