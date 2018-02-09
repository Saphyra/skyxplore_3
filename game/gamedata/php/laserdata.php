<?php
    $laser["typename"] = "Lézer";
    $defaultLaser["type"] = "laser";
    $defaultLaser["storage"] = "storage";
    $defaultLaser["name"] = "Lézer";
    $defaultLaser["accuracy"] = 700;
    $defaultLaser["reload"] = 1;
    $defaultLaser["weight"] = 2;
    
    $level = 1;
        $laser[$level] = $defaultLaser;
        $laser[$level]["level"] = $level;
        $laser[$level]["shielddamage"] = 1000;
        $laser[$level]["hulldamage"] = 1000;
        $laser[$level]["resource"]["metal"] = 2;
        $laser[$level]["resource"]["wire"] = 1;
        $laser[$level]["resource"]["electronics"] = 2;
        $laser[$level]["resource"]["panel"] = 1;
    
    $level = 2;
        $laser[$level] = $defaultLaser;
        $laser[$level]["level"] = $level;
        $laser[$level]["shielddamage"] = 1500;
        $laser[$level]["hulldamage"] = 1500;
        $laser[$level]["resource"]["metal"] = 6;
        $laser[$level]["resource"]["wire"] = 3;
        $laser[$level]["resource"]["electronics"] = 6;
        $laser[$level]["resource"]["panel"] = 3;
        
    $level = 3;
        $laser[$level] = $defaultLaser;
        $laser[$level]["level"] = $level;
        $laser[$level]["shielddamage"] = 2000;
        $laser[$level]["hulldamage"] = 2000;
        $laser[$level]["resource"]["metal"] = 18;
        $laser[$level]["resource"]["wire"] = 9;
        $laser[$level]["resource"]["electronics"] = 18;
        $laser[$level]["resource"]["panel"] = 9;
        
    
    writeData("laser", $laser);
?>