<?php
    include("writer.php");
    
    $defaultFarm["type"] = "farm";
    $defaultFarm["name"] = "Farm";
    $defaultFarm["slot"] = "food";
    $defaultFarm["income"] = 20;
    
    $level = 1;
    $farm[$level] = $defaultFarm;
    $farm[$level]["level"] = $level;
    $farm[$level]["constructiontime"] = 15;
    $farm[$level]["maxhr"] = 1;
    $farm[$level]["workplace"] = $level;
    $farm[$level]["resource"]["board"] = 20;
    $farm[$level]["resource"]["brick"] = 40;
    $farm[$level]["resource"]["metal"] = 10;
    
    $level = 2;
    $farm[$level] = $defaultFarm;
    $farm[$level]["level"] = $level;
    $farm[$level]["constructiontime"] = 20;
    $farm[$level]["maxhr"] = 1;
    $farm[$level]["workplace"] = $level;
    $farm[$level]["resource"]["board"] = 30;
    $farm[$level]["resource"]["brick"] = 60;
    $farm[$level]["resource"]["metal"] = 15;
    
    $level = 3;
    $farm[$level] = $defaultFarm;
    $farm[$level]["level"] = $level;
    $farm[$level]["constructiontime"] = 50;
    $farm[$level]["maxhr"] = 2;
    $farm[$level]["workplace"] = $level;
    $farm[$level]["resource"]["board"] = 45;
    $farm[$level]["resource"]["brick"] = 90;
    $farm[$level]["resource"]["metal"] = 25;
    $farm[$level]["resource"]["wire"] = 10;
    
    $level = 4;
    $farm[$level] = $defaultFarm;
    $farm[$level]["level"] = $level;
    $farm[$level]["constructiontime"] = 60;
    $farm[$level]["maxhr"] = 2;
    $farm[$level]["workplace"] = $level;
    $farm[$level]["resource"]["board"] = 60;
    $farm[$level]["resource"]["brick"] = 120;
    $farm[$level]["resource"]["metal"] = 40;
    $farm[$level]["resource"]["wire"] = 20;
    
    $level = 5;
    $farm[$level] = $defaultFarm;
    $farm[$level]["level"] = $level;
    $farm[$level]["constructiontime"] = 110;
    $farm[$level]["maxhr"] = 3;
    $farm[$level]["workplace"] = $level;
    $farm[$level]["resource"]["board"] = 80;
    $farm[$level]["resource"]["brick"] = 160;
    $farm[$level]["resource"]["metal"] = 55;
    $farm[$level]["resource"]["wire"] = 30;
    
    $level = 6;
    $farm[$level] = $defaultFarm;
    $farm[$level]["level"] = $level;
    $farm[$level]["constructiontime"] = 130;
    $farm[$level]["maxhr"] = 3;
    $farm[$level]["workplace"] = $level;
    $farm[$level]["resource"]["board"] = 100;
    $farm[$level]["resource"]["brick"] = 200;
    $farm[$level]["resource"]["metal"] = 75;
    $farm[$level]["resource"]["wire"] = 45;
    $farm[$level]["resource"]["electronics"] = 10;
    
    $level = 7;
    $farm[$level] = $defaultFarm;
    $farm[$level]["level"] = $level;
    $farm[$level]["constructiontime"] = 150;
    $farm[$level]["maxhr"] = 3;
    $farm[$level]["workplace"] = $level;
    $farm[$level]["resource"]["board"] = 125;
    $farm[$level]["resource"]["brick"] = 250;
    $farm[$level]["resource"]["metal"] = 100;
    $farm[$level]["resource"]["wire"] = 60;
    $farm[$level]["resource"]["electronics"] = 20;
    
    $level = 8;
    $farm[$level] = $defaultFarm;
    $farm[$level]["level"] = $level;
    $farm[$level]["constructiontime"] = 220;
    $farm[$level]["maxhr"] = 4;
    $farm[$level]["workplace"] = $level;
    $farm[$level]["resource"]["board"] = 150;
    $farm[$level]["resource"]["brick"] = 300;
    $farm[$level]["resource"]["metal"] = 125;
    $farm[$level]["resource"]["wire"] = 80;
    $farm[$level]["resource"]["electronics"] = 35;
    
    $level = 9;
    $farm[$level] = $defaultFarm;
    $farm[$level]["level"] = $level;
    $farm[$level]["constructiontime"] = 260;
    $farm[$level]["maxhr"] = 4;
    $farm[$level]["workplace"] = $level;
    $farm[$level]["resource"]["board"] = 200;
    $farm[$level]["resource"]["brick"] = 400;
    $farm[$level]["resource"]["metal"] = 150;
    $farm[$level]["resource"]["wire"] = 100;
    $farm[$level]["resource"]["electronics"] = 50;
    
    $level = 10;
    $farm[$level] = $defaultFarm;
    $farm[$level]["level"] = $level;
    $farm[$level]["constructiontime"] = 350;
    $farm[$level]["maxhr"] = 5;
    $farm[$level]["workplace"] = $level;
    $farm[$level]["resource"]["board"] = 250;
    $farm[$level]["resource"]["brick"] = 500;
    $farm[$level]["resource"]["metal"] = 200;
    $farm[$level]["resource"]["wire"] = 150;
    $farm[$level]["resource"]["electronics"] = 100;
    
    writeData("farm", $farm);
    
?>