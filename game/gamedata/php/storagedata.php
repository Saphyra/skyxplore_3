<?php
    $storage["typename"] = "Raktár";
    $defaultStorage["type"] = "storage";
    $defaultStorage["name"] = "Raktár";
    $defaultStorage["slot"] = "building";
    $defaultStorage["role"] = "economy";
    $defaultStorage["source"] = "storage";
    
    $level = 1;
    $storage[$level] = $defaultStorage;
    $storage[$level]["key"] = $level;
    $storage[$level]["level"] = $level;
    $storage[$level]["constructiontime"] = 10;
    $storage[$level]["maxhr"] = 1;
    $storage[$level]["capacity"] = 20;
    $storage[$level]["resource"]["board"] = 20;
    $storage[$level]["resource"]["brick"] = 50;
    $storage[$level]["resource"]["metal"] = 75;
    
    $level = 2;
    $storage[$level] = $defaultStorage;
    $storage[$level]["key"] = $level;
    $storage[$level]["level"] = $level;
    $storage[$level]["constructiontime"] = 40;
    $storage[$level]["maxhr"] = 2;
    $storage[$level]["capacity"] = 30;
    $storage[$level]["resource"]["board"] = 60;
    $storage[$level]["resource"]["brick"] = 150;
    $storage[$level]["resource"]["metal"] = 225;
    $storage[$level]["resource"]["wire"] = 30;
    
    $level = 3;
    $storage[$level] = $defaultStorage;
    $storage[$level]["key"] = $level;
    $storage[$level]["level"] = $level;
    $storage[$level]["constructiontime"] = 90;
    $storage[$level]["maxhr"] = 3;
    $storage[$level]["capacity"] = 40;
    $storage[$level]["resource"]["board"] = 180;
    $storage[$level]["resource"]["brick"] = 350;
    $storage[$level]["resource"]["metal"] = 675;
    $storage[$level]["resource"]["wire"] = 90;
    $storage[$level]["resource"]["electronics"] = 30;
    
    writeData("storage", $storage);
?>