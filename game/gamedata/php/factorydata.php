<?php
    include("writer.php");
    
    $defaultFactory["type"] = "factory";
    $defaultFactory["name"] = "Gyár";
    $defaultFactory["slot"] = "building";
    
    $level = 1;
    $factory[$level] = $defaultFactory;
    $factory[$level]["level"] = $level;
    $factory[$level]["constructiontime"] = 15;
    $factory[$level]["maxhr"] = 1;
    $factory[$level]["workplace"] = $level * 2;
    $factory[$level]["productivity"] = 25;
    $factory[$level]["resource"]["board"] = 10;
    $factory[$level]["resource"]["brick"] = 30;
    $factory[$level]["resource"]["metal"] = 50;
    
    $level = 2;
    $factory[$level] = $defaultFactory;
    $factory[$level]["level"] = $level;
    $factory[$level]["constructiontime"] = 20;
    $factory[$level]["maxhr"] = 1;
    $factory[$level]["workplace"] = $level * 2;
    $factory[$level]["productivity"] = 25;
    $factory[$level]["resource"]["board"] = 15;
    $factory[$level]["resource"]["brick"] = 45;
    $factory[$level]["resource"]["metal"] = 75;
    
    $level = 3;
    $factory[$level] = $defaultFactory;
    $factory[$level]["level"] = $level;
    $factory[$level]["constructiontime"] = 50;
    $factory[$level]["maxhr"] = 2;
    $factory[$level]["workplace"] = $level * 2;
    $factory[$level]["productivity"] = 30;
    $factory[$level]["resource"]["board"] = 20;
    $factory[$level]["resource"]["brick"] = 60;
    $factory[$level]["resource"]["metal"] = 90;
    $factory[$level]["resource"]["wire"] = 10;
    
    $level = 4;
    $factory[$level] = $defaultFactory;
    $factory[$level]["level"] = $level;
    $factory[$level]["constructiontime"] = 60;
    $factory[$level]["maxhr"] = 2;
    $factory[$level]["workplace"] = $level * 2;
    $factory[$level]["productivity"] = 30;
    $factory[$level]["resource"]["board"] = 30;
    $factory[$level]["resource"]["brick"] = 80;
    $factory[$level]["resource"]["metal"] = 120;
    $factory[$level]["resource"]["wire"] = 15;
    
    $level = 5;
    $factory[$level] = $defaultFactory;
    $factory[$level]["level"] = $level;
    $factory[$level]["constructiontime"] = 110;
    $factory[$level]["maxhr"] = 3;
    $factory[$level]["workplace"] = $level * 2;
    $factory[$level]["productivity"] = 45;
    $factory[$level]["resource"]["board"] = 45;
    $factory[$level]["resource"]["brick"] = 105;
    $factory[$level]["resource"]["metal"] = 160;
    $factory[$level]["resource"]["wire"] = 25;
    $factory[$level]["resource"]["electronics"] = 10;
    
    $level = 6;
    $factory[$level] = $defaultFactory;
    $factory[$level]["level"] = $level;
    $factory[$level]["constructiontime"] = 125;
    $factory[$level]["maxhr"] = 3;
    $factory[$level]["workplace"] = $level * 2;
    $factory[$level]["productivity"] = 45;
    $factory[$level]["resource"]["board"] = 60;
    $factory[$level]["resource"]["brick"] = 150;
    $factory[$level]["resource"]["metal"] = 220;
    $factory[$level]["resource"]["wire"] = 40;
    $factory[$level]["resource"]["electronics"] = 20;
    
    $level = 7;
    $factory[$level] = $defaultFactory;
    $factory[$level]["level"] = $level;
    $factory[$level]["constructiontime"] = 150;
    $factory[$level]["maxhr"] = 3;
    $factory[$level]["workplace"] = $level * 2;
    $factory[$level]["productivity"] = 50;
    $factory[$level]["resource"]["board"] = 80;
    $factory[$level]["resource"]["brick"] = 200;
    $factory[$level]["resource"]["metal"] = 300;
    $factory[$level]["resource"]["wire"] = 60;
    $factory[$level]["resource"]["electronics"] = 30;
    
    $level = 8;
    $factory[$level] = $defaultFactory;
    $factory[$level]["level"] = $level;
    $factory[$level]["constructiontime"] = 220;
    $factory[$level]["maxhr"] = 4;
    $factory[$level]["workplace"] = $level * 2;
    $factory[$level]["productivity"] = 55;
    $factory[$level]["resource"]["board"] = 110;
    $factory[$level]["resource"]["brick"] = 250;
    $factory[$level]["resource"]["metal"] = 400;
    $factory[$level]["resource"]["wire"] = 90;
    $factory[$level]["resource"]["electronics"] = 45;
    
    $level = 9;
    $factory[$level] = $defaultFactory;
    $factory[$level]["level"] = $level;
    $factory[$level]["constructiontime"] = 240;
    $factory[$level]["maxhr"] = 4;
    $factory[$level]["workplace"] = $level * 2;
    $factory[$level]["productivity"] = 65;
    $factory[$level]["resource"]["board"] = 150;
    $factory[$level]["resource"]["brick"] = 325;
    $factory[$level]["resource"]["metal"] = 550;
    $factory[$level]["resource"]["wire"] = 125;
    $factory[$level]["resource"]["electronics"] = 60;
    
    $level = 10;
    $factory[$level] = $defaultFactory;
    $factory[$level]["level"] = $level;
    $factory[$level]["constructiontime"] = 350;
    $factory[$level]["maxhr"] = 5;
    $factory[$level]["workplace"] = $level * 2;
    $factory[$level]["productivity"] = 75;
    $factory[$level]["resource"]["board"] = 200;
    $factory[$level]["resource"]["brick"] = 400;
    $factory[$level]["resource"]["metal"] = 700;
    $factory[$level]["resource"]["wire"] = 175;
    $factory[$level]["resource"]["electronics"] = 100;
    
    writeData("factory", $factory);
?>