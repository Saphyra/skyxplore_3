<?php
    $defaultRocketlauncher["type"] = "rocketlauncher";
    $defaultRocketlauncher["storage"] = "storage";
    $defaultRocketlauncher["name"] = "Rakétakilövő";
    $defaultRocketlauncher["accuracy"] = 350;
    $defaultRocketlauncher["reload"] = 3;
    $defaultRocketlauncher["weight"] = 4;

    $level = 1;
        $rocketlauncher[$level] = $defaultRocketlauncher;
        $rocketlauncher[$level]["level"] = $level;
        $rocketlauncher[$level]["shielddamage"] = 6000;
        $rocketlauncher[$level]["hulldamage"] = 6000;
        $rocketlauncher[$level]["resource"]["metal"] = 4;
        $rocketlauncher[$level]["resource"]["wire"] = 2;
        $rocketlauncher[$level]["resource"]["electronics"] = 2;
        $rocketlauncher[$level]["resource"]["panel"] = 2;
        
    $level = 2;
        $rocketlauncher[$level] = $defaultRocketlauncher;
        $rocketlauncher[$level]["level"] = $level;
        $rocketlauncher[$level]["shielddamage"] = 9000;
        $rocketlauncher[$level]["hulldamage"] = 9000;
        $rocketlauncher[$level]["resource"]["metal"] = 12;
        $rocketlauncher[$level]["resource"]["wire"] = 6;
        $rocketlauncher[$level]["resource"]["electronics"] = 6;
        $rocketlauncher[$level]["resource"]["panel"] = 6;
        
    $level = 3;
        $rocketlauncher[$level] = $defaultRocketlauncher;
        $rocketlauncher[$level]["level"] = $level;
        $rocketlauncher[$level]["shielddamage"] = 12000;
        $rocketlauncher[$level]["hulldamage"] = 12000;
        $rocketlauncher[$level]["resource"]["metal"] = 36;
        $rocketlauncher[$level]["resource"]["wire"] = 12;
        $rocketlauncher[$level]["resource"]["electronics"] = 12;
        $rocketlauncher[$level]["resource"]["panel"] = 12;
    
    
    writeData("rocketlauncher", $rocketlauncher);
?>