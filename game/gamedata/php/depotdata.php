<?php
    include("writer.php");
    
    $defaultDepot["type"] = "depot";
    $defaultDepot["name"] = "Depó";
    $defaultDepot["slot"] = "building";
    
    $level = 1;
    $depot[$level] = $defaultDepot;
    $depot[$level]["level"] = $level;
    $depot[$level]["constructiontime"] = 5;
    $depot[$level]["maxhr"] = 1;
    $depot[$level]["capacity"] = 1000;
    $depot[$level]["resource"]["board"] = 15;
    $depot[$level]["resource"]["brick"] = 15;
    $depot[$level]["resource"]["metal"] = 10;
    
    $level = 2;
    $depot[$level] = $defaultDepot;
    $depot[$level]["level"] = $level;
    $depot[$level]["constructiontime"] = 10;
    $depot[$level]["maxhr"] = 1;
    $depot[$level]["capacity"] = 1500;
    $depot[$level]["resource"]["board"] = 25;
    $depot[$level]["resource"]["brick"] = 25;
    $depot[$level]["resource"]["metal"] = 15;
    
    $level = 3;
    $depot[$level] = $defaultDepot;
    $depot[$level]["level"] = $level;
    $depot[$level]["constructiontime"] = 15;
    $depot[$level]["maxhr"] = 1;
    $depot[$level]["capacity"] = 2000;
    $depot[$level]["resource"]["board"] = 40;
    $depot[$level]["resource"]["brick"] = 40;
    $depot[$level]["resource"]["metal"] = 20;
    $depot[$level]["resource"]["wire"] = 10;
    
    $level = 4;
    $depot[$level] = $defaultDepot;
    $depot[$level]["level"] = $level;
    $depot[$level]["constructiontime"] = 35;
    $depot[$level]["maxhr"] = 2;
    $depot[$level]["capacity"] = 4000;
    $depot[$level]["resource"]["board"] = 60;
    $depot[$level]["resource"]["brick"] = 60;
    $depot[$level]["resource"]["metal"] = 30;
    $depot[$level]["resource"]["wire"] = 15;
    
    $level = 5;
    $depot[$level] = $defaultDepot;
    $depot[$level]["level"] = $level;
    $depot[$level]["constructiontime"] = 45;
    $depot[$level]["maxhr"] = 2;
    $depot[$level]["capacity"] = 6000;
    $depot[$level]["resource"]["board"] = 90;
    $depot[$level]["resource"]["brick"] = 90;
    $depot[$level]["resource"]["metal"] = 45;
    $depot[$level]["resource"]["wire"] = 25;
    
    $level = 6;
    $depot[$level] = $defaultDepot;
    $depot[$level]["level"] = $level;
    $depot[$level]["constructiontime"] = 75;
    $depot[$level]["maxhr"] = 3;
    $depot[$level]["capacity"] = 8000;
    $depot[$level]["resource"]["board"] = 120;
    $depot[$level]["resource"]["brick"] = 120;
    $depot[$level]["resource"]["metal"] = 75;
    $depot[$level]["resource"]["wire"] = 40;
    $depot[$level]["resource"]["electronics"] = 10;
    
    $level = 7;
    $depot[$level] = $defaultDepot;
    $depot[$level]["level"] = $level;
    $depot[$level]["constructiontime"] = 100;
    $depot[$level]["maxhr"] = 3;
    $depot[$level]["capacity"] = 10000;
    $depot[$level]["resource"]["board"] = 175;
    $depot[$level]["resource"]["brick"] = 175;
    $depot[$level]["resource"]["metal"] = 120;
    $depot[$level]["resource"]["wire"] = 60;
    $depot[$level]["resource"]["electronics"] = 20;
    
    $level = 8;
    $depot[$level] = $defaultDepot;
    $depot[$level]["level"] = $level;
    $depot[$level]["constructiontime"] = 125;
    $depot[$level]["maxhr"] = 3;
    $depot[$level]["capacity"] = 12500;
    $depot[$level]["resource"]["board"] = 250;
    $depot[$level]["resource"]["brick"] = 250;
    $depot[$level]["resource"]["metal"] = 200;
    $depot[$level]["resource"]["wire"] = 100;
    $depot[$level]["resource"]["electronics"] = 40;
    
    $level = 9;
    $depot[$level] = $defaultDepot;
    $depot[$level]["level"] = $level;
    $depot[$level]["constructiontime"] = 200;
    $depot[$level]["maxhr"] = 4;
    $depot[$level]["capacity"] = 15000;
    $depot[$level]["resource"]["board"] = 350;
    $depot[$level]["resource"]["brick"] = 350;
    $depot[$level]["resource"]["metal"] = 300;
    $depot[$level]["resource"]["wire"] = 150;
    $depot[$level]["resource"]["electronics"] = 60;
    
    $level = 10;
    $depot[$level] = $defaultDepot;
    $depot[$level]["level"] = $level;
    $depot[$level]["constructiontime"] = 300;
    $depot[$level]["maxhr"] = 4;
    $depot[$level]["capacity"] = 20000;
    $depot[$level]["resource"]["board"] = 450;
    $depot[$level]["resource"]["brick"] = 450;
    $depot[$level]["resource"]["metal"] = 450;
    $depot[$level]["resource"]["wire"] = 200;
    $depot[$level]["resource"]["electronics"] = 100;
    
    writeData("depot", $depot);
?>