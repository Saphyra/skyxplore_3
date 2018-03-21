<?php
    $farm["typename"] = "Farm";
    $farm["income"] = 10;
    $defaultFarm["type"] = "farm";
    $defaultFarm["name"] = "Farm";
    $defaultFarm["slot"] = "food";
    $defaultFarm["role"] = "industry";
    $defaultFarm["source"] = "farm";
    
    $level = 1;
    $farm[$level] = $defaultFarm;
    $farm[$level]["key"] = $level;
    $farm[$level]["level"] = $level;
    $farm[$level]["constructiontime"] = 15;
    $farm[$level]["maxhr"] = 1;
    $farm[$level]["workplace"] = 2;
    $farm[$level]["resource"]["board"] = 20;
    $farm[$level]["resource"]["brick"] = 40;
    $farm[$level]["resource"]["metal"] = 10;
    
    $level = 2;
    $farm[$level] = $defaultFarm;
    $farm[$level]["key"] = $level;
    $farm[$level]["level"] = $level;
    $farm[$level]["constructiontime"] = 40;
    $farm[$level]["maxhr"] = 2;
    $farm[$level]["workplace"] = 3;
    $farm[$level]["resource"]["board"] = 60;
    $farm[$level]["resource"]["brick"] = 120;
    $farm[$level]["resource"]["metal"] = 30;
    $farm[$level]["resource"]["wire"] = 10;
    
    $level = 3;
    $farm[$level] = $defaultFarm;
    $farm[$level]["key"] = $level;
    $farm[$level]["level"] = $level;
    $farm[$level]["constructiontime"] = 75;
    $farm[$level]["maxhr"] = 3;
    $farm[$level]["workplace"] = 4;
    $farm[$level]["resource"]["board"] = 180;
    $farm[$level]["resource"]["brick"] = 360;
    $farm[$level]["resource"]["metal"] = 90;
    $farm[$level]["resource"]["wire"] = 30;
    $farm[$level]["resource"]["electronics"] = 10;
    
    writeData("farm", $farm);
?>