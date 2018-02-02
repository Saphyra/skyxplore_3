<?php
    $defaultEngine["type"] = "engine";
    $defaultEngine["name"] = "Meghajtó";
    $defaultEngine["storage"] = "storage";
    $defaultEngine["weight"] = 20;
    
    $level = 1;
    $engine[$level] = $defaultEngine;
    $engine[$level]["level"] = $level;
    $engine[$level]["speed"] = 10;
    $engine[$level]["resource"]["wire"] = 2;
    $engine[$level]["resource"]["panel"] = 2;
    $engine[$level]["resource"]["electronics"] = 2;
    $engine[$level]["resource"]["energycell"] = 2;
    
    $level = 2;
    $engine[$level] = $defaultEngine;
    $engine[$level]["level"] = $level;
    $engine[$level]["speed"] = 15;
    $engine[$level]["resource"]["wire"] = 6;
    $engine[$level]["resource"]["panel"] = 6;
    $engine[$level]["resource"]["electronics"] = 6;
    $engine[$level]["resource"]["energycell"] = 6;
    
    $level = 3;
    $engine[$level] = $defaultEngine;
    $engine[$level]["level"] = $level;
    $engine[$level]["speed"] = 20;
    $engine[$level]["resource"]["wire"] = 18;
    $engine[$level]["resource"]["panel"] = 18;
    $engine[$level]["resource"]["electronics"] = 18;
    $engine[$level]["resource"]["energycell"] = 18;
    
    writeData("engine", $engine)
?>