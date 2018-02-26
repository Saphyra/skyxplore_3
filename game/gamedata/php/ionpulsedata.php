<?php
    $ionpulse["typename"] = "Pulzuságyú";
    $defaultIonpulse["type"] = "ionpulse";
    $defaultIonpulse["storage"] = "storage";
    $defaultIonpulse["name"] = "Pulzuságyú";
    $defaultIonpulse["accuracy"] = 700;
    $defaultIonpulse["reload"] = 1;
    $defaultIonpulse["weight"] = 2;
    $defaultIonpulse["source"] = "ionpulse";
    
   $level = 1;
        $ionpulse[$level] = $defaultIonpulse;
        $ionpulse[$level]["key"] = $level;
        $ionpulse[$level]["level"] = $level;
        $ionpulse[$level]["shielddamage"] = 2000;
        $ionpulse[$level]["hulldamage"] = 500;
        $ionpulse[$level]["resource"]["metal"] = 1;
        $ionpulse[$level]["resource"]["wire"] = 2;
        $ionpulse[$level]["resource"]["electronics"] = 2;
        $ionpulse[$level]["resource"]["panel"] = 1;
        
    $level = 2;
        $ionpulse[$level] = $defaultIonpulse;
        $ionpulse[$level]["key"] = $level;
        $ionpulse[$level]["level"] = $level;
        $ionpulse[$level]["shielddamage"] = 3000;
        $ionpulse[$level]["hulldamage"] = 750;
        $ionpulse[$level]["resource"]["metal"] = 3;
        $ionpulse[$level]["resource"]["wire"] = 6;
        $ionpulse[$level]["resource"]["electronics"] = 6;
        $ionpulse[$level]["resource"]["panel"] = 3;
        
    $level = 3;
        $ionpulse[$level] = $defaultIonpulse;
        $ionpulse[$level]["key"] = $level;
        $ionpulse[$level]["level"] = $level;
        $ionpulse[$level]["shielddamage"] = 4000;
        $ionpulse[$level]["hulldamage"] = 1000;
        $ionpulse[$level]["resource"]["metal"] = 9;
        $ionpulse[$level]["resource"]["wire"] = 18;
        $ionpulse[$level]["resource"]["electronics"] = 18;
        $ionpulse[$level]["resource"]["panel"] = 9;
        
    
    writeData("ionpulse", $ionpulse);
?>