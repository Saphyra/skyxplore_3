<?php
    $depot["typename"] = "Depó";
    $defaultDepot["type"] = "depot";
    $defaultDepot["name"] = "Depó";
    $defaultDepot["slot"] = "building";
    $defaultDepot["role"] = "economy";
    $defaultDepot["source"] = "depot";
    
    $level = 1;
    $depot[$level] = $defaultDepot;
    $depot[$level]["key"] = $level;
    $depot[$level]["level"] = $level;
    $depot[$level]["constructiontime"] = 5;
    $depot[$level]["maxhr"] = 1;
    $depot[$level]["capacity"] = 500;
    $depot[$level]["resource"]["board"] = 15;
    $depot[$level]["resource"]["brick"] = 15;
    $depot[$level]["resource"]["metal"] = 10;
    
    $level = 2;
    $depot[$level] = $defaultDepot;
    $depot[$level]["key"] = $level;
    $depot[$level]["level"] = $level;
    $depot[$level]["constructiontime"] = 20;
    $depot[$level]["maxhr"] = 2;
    $depot[$level]["capacity"] = 750;
    $depot[$level]["resource"]["board"] = 45;
    $depot[$level]["resource"]["brick"] = 75;
    $depot[$level]["resource"]["metal"] = 45;
    $depot[$level]["resource"]["wire"] = 10;
    
    $level = 3;
    $depot[$level] = $defaultDepot;
    $depot[$level]["key"] = $level;
    $depot[$level]["level"] = $level;
    $depot[$level]["constructiontime"] = 60;
    $depot[$level]["maxhr"] = 3;
    $depot[$level]["capacity"] = 1000;
    $depot[$level]["resource"]["board"] = 135;
    $depot[$level]["resource"]["brick"] = 225;
    $depot[$level]["resource"]["metal"] = 135;
    $depot[$level]["resource"]["wire"] = 30;
    $depot[$level]["resource"]["electronics"] = 10;
    
    writeData("depot", $depot);
?>