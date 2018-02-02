<?php
    $defaultWeapon["type"] = "weapon";
    $defaultWeapon["storage"] = "storage";
    
    $subtype = "laser";
        $defaultLaser = $defaultWeapon;
        $defaultLaser["subtype"] = $subtype;
        $defaultLaser["name"] = "Lézer";
        $defaultLaser["accuracy"] = 700;
        $defaultLaser["reload"] = 1;
        $defaultLaser["weight"] = 2;
    
    
        $level = 1;
            $weapon[$subtype][$level] = $defaultLaser;
            $weapon[$subtype][$level]["level"] = $level;
            $weapon[$subtype][$level]["shielddamage"] = 1000;
            $weapon[$subtype][$level]["hulldamage"] = 1000;
            $weapon[$subtype][$level]["resource"]["metal"] = 2;
            $weapon[$subtype][$level]["resource"]["wire"] = 1;
            $weapon[$subtype][$level]["resource"]["electronics"] = 2;
            $weapon[$subtype][$level]["resource"]["panel"] = 1;
        
        $level = 2;
            $weapon[$subtype][$level] = $defaultLaser;
            $weapon[$subtype][$level]["level"] = $level;
            $weapon[$subtype][$level]["shielddamage"] = 1500;
            $weapon[$subtype][$level]["hulldamage"] = 1500;
            $weapon[$subtype][$level]["resource"]["metal"] = 6;
            $weapon[$subtype][$level]["resource"]["wire"] = 3;
            $weapon[$subtype][$level]["resource"]["electronics"] = 6;
            $weapon[$subtype][$level]["resource"]["panel"] = 3;
            
        $level = 3;
            $weapon[$subtype][$level] = $defaultLaser;
            $weapon[$subtype][$level]["level"] = $level;
            $weapon[$subtype][$level]["shielddamage"] = 2000;
            $weapon[$subtype][$level]["hulldamage"] = 2000;
            $weapon[$subtype][$level]["resource"]["metal"] = 18;
            $weapon[$subtype][$level]["resource"]["wire"] = 9;
            $weapon[$subtype][$level]["resource"]["electronics"] = 18;
            $weapon[$subtype][$level]["resource"]["panel"] = 9;
            
    $subtype = "ionpulse";
        $defaultIonpulse = $defaultWeapon;
        $defaultIonpulse["subtype"] = $subtype;
        $defaultIonpulse["name"] = "Pulzuságyú";
        $defaultIonpulse["accuracy"] = 700;
        $defaultIonpulse["reload"] = 1;
        $defaultIonpulse["weight"] = 2;
    
    
        $level = 1;
            $weapon[$subtype][$level] = $defaultIonpulse;
            $weapon[$subtype][$level]["level"] = $level;
            $weapon[$subtype][$level]["shielddamage"] = 2000;
            $weapon[$subtype][$level]["hulldamage"] = 500;
            $weapon[$subtype][$level]["resource"]["metal"] = 1;
            $weapon[$subtype][$level]["resource"]["wire"] = 2;
            $weapon[$subtype][$level]["resource"]["electronics"] = 2;
            $weapon[$subtype][$level]["resource"]["panel"] = 1;
            
        $level = 2;
            $weapon[$subtype][$level] = $defaultIonpulse;
            $weapon[$subtype][$level]["level"] = $level;
            $weapon[$subtype][$level]["shielddamage"] = 3000;
            $weapon[$subtype][$level]["hulldamage"] = 750;
            $weapon[$subtype][$level]["resource"]["metal"] = 3;
            $weapon[$subtype][$level]["resource"]["wire"] = 6;
            $weapon[$subtype][$level]["resource"]["electronics"] = 6;
            $weapon[$subtype][$level]["resource"]["panel"] = 3;
            
        $level = 3;
            $weapon[$subtype][$level] = $defaultIonpulse;
            $weapon[$subtype][$level]["level"] = $level;
            $weapon[$subtype][$level]["shielddamage"] = 4000;
            $weapon[$subtype][$level]["hulldamage"] = 1000;
            $weapon[$subtype][$level]["resource"]["metal"] = 9;
            $weapon[$subtype][$level]["resource"]["wire"] = 18;
            $weapon[$subtype][$level]["resource"]["electronics"] = 18;
            $weapon[$subtype][$level]["resource"]["panel"] = 9;
    
    $subtype = "rocketlauncher";
        $defaultRocketlauncher = $defaultWeapon;
        $defaultRocketlauncher["subtype"] = $subtype;
        $defaultRocketlauncher["name"] = "Rakétakilövő";
        $defaultRocketlauncher["accuracy"] = 350;
        $defaultRocketlauncher["reload"] = 3;
        $defaultRocketlauncher["weight"] = 4;
    
    
        $level = 1;
            $weapon[$subtype][$level] = $defaultRocketlauncher;
            $weapon[$subtype][$level]["level"] = $level;
            $weapon[$subtype][$level]["shielddamage"] = 6000;
            $weapon[$subtype][$level]["hulldamage"] = 6000;
            $weapon[$subtype][$level]["resource"]["metal"] = 4;
            $weapon[$subtype][$level]["resource"]["wire"] = 2;
            $weapon[$subtype][$level]["resource"]["electronics"] = 2;
            $weapon[$subtype][$level]["resource"]["panel"] = 2;
            
        $level = 2;
            $weapon[$subtype][$level] = $defaultRocketlauncher;
            $weapon[$subtype][$level]["level"] = $level;
            $weapon[$subtype][$level]["shielddamage"] = 9000;
            $weapon[$subtype][$level]["hulldamage"] = 9000;
            $weapon[$subtype][$level]["resource"]["metal"] = 12;
            $weapon[$subtype][$level]["resource"]["wire"] = 6;
            $weapon[$subtype][$level]["resource"]["electronics"] = 6;
            $weapon[$subtype][$level]["resource"]["panel"] = 6;
            
        $level = 3;
            $weapon[$subtype][$level] = $defaultRocketlauncher;
            $weapon[$subtype][$level]["level"] = $level;
            $weapon[$subtype][$level]["shielddamage"] = 12000;
            $weapon[$subtype][$level]["hulldamage"] = 12000;
            $weapon[$subtype][$level]["resource"]["metal"] = 36;
            $weapon[$subtype][$level]["resource"]["wire"] = 12;
            $weapon[$subtype][$level]["resource"]["electronics"] = 12;
            $weapon[$subtype][$level]["resource"]["panel"] = 12;
    
    
    writeData("weapon", $weapon);
?>