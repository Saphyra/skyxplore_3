<?php
    $generator["typename"] = "Generátor";
    $defaultGenerator["type"] = "generator";
    $defaultGenerator["name"] = "Generátor";
    $defaultGenerator["storage"] = "storage";
    $defaultGenerator["weight"] = 16;
    
    $level = 1;
    $generator[$level] = $defaultGenerator;
    $generator[$level]["level"] = $level;
    $generator[$level]["power"] = 10;
    $generator[$level]["resource"]["wire"] = 3;
    $generator[$level]["resource"]["panel"] = 1;
    $generator[$level]["resource"]["energycell"] = 1;
    $generator[$level]["resource"]["electronics"] = 3;
    
    $level = 2;
    $generator[$level] = $defaultGenerator;
    $generator[$level]["level"] = $level;
    $generator[$level]["power"] = 15;
    $generator[$level]["resource"]["wire"] = 9;
    $generator[$level]["resource"]["panel"] = 3;
    $generator[$level]["resource"]["energycell"] = 3;
    $generator[$level]["resource"]["electronics"] = 9;
    
    $level = 3;
    $generator[$level] = $defaultGenerator;
    $generator[$level]["level"] = $level;
    $generator[$level]["power"] = 20;
    $generator[$level]["resource"]["wire"] = 27;
    $generator[$level]["resource"]["panel"] = 9;
    $generator[$level]["resource"]["energycell"] = 9;
    $generator[$level]["resource"]["electronics"] = 27;
    
    writeData("generator", $generator);
?>