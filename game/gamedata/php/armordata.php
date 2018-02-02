<?php
    $defaultArmor["type"] = "armor";
    $defaultArmor["storage"] = "storage";
    $defaultArmor["name"] = "Páncél";
    $defaultArmor["weight"] = 6;
    
    $level = 1;
    $armor[$level]["level"] = $level;
    $armor[$level]["hull"] = 5000;
    $armor[$level]["resource"]["metal"] = 5;
    $armor[$level]["resource"]["panel"] = 1;
    
    $level = 2;
    $armor[$level]["level"] = $level;
    $armor[$level]["hull"] = 7500;
    $armor[$level]["resource"]["metal"] = 15;
    $armor[$level]["resource"]["panel"] = 3;
    
    $level = 3;
    $armor[$level]["level"] = $level;
    $armor[$level]["hull"] = 10000;
    $armor[$level]["resource"]["metal"] = 45;
    $armor[$level]["resource"]["panel"] = 9;
    
    writeData("armor", $armor);
?>