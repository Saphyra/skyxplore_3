<?php
    $shield["typename"] = "Pajzs";
    $defaultShield["type"] = "shield";
    $defaultShield["name"] = "Pajzs";
    $defaultShield["storage"] = "storage";
    $defaultShield["weight"] = 8;
    $defaultShield["source"] = "shield";
    
    $level = 1;
        $shield[$level] = $defaultShield;
        $shield[$level]["key"] = $level;
        $shield[$level]["level"] = $level;
        $shield[$level]["shieldenergy"] = 10000;
        $shield[$level]["regeneration"] = 250;
        $shield[$level]["energyusage"] = 10;
        $shield[$level]["resource"]["metal"] = 1;
        $shield[$level]["resource"]["wire"] = 2;
        $shield[$level]["resource"]["electronics"] = 2;
        $shield[$level]["resource"]["panel"] = 1;
        $shield[$level]["resource"]["energycell"] = 1;
        
    $level = 2;
        $shield[$level] = $defaultShield;
        $shield[$level]["key"] = $level;
        $shield[$level]["level"] = $level;
        $shield[$level]["shieldenergy"] = 15000;
        $shield[$level]["regeneration"] = 375;
        $shield[$level]["energyusage"] = 15;
        $shield[$level]["resource"]["metal"] = 3;
        $shield[$level]["resource"]["wire"] = 6;
        $shield[$level]["resource"]["electronics"] = 6;
        $shield[$level]["resource"]["panel"] = 3;
        $shield[$level]["resource"]["energycell"] = 3;
        
    $level = 3;
        $shield[$level] = $defaultShield;
        $shield[$level]["key"] = $level;
        $shield[$level]["level"] = $level;
        $shield[$level]["shieldenergy"] = 20000;
        $shield[$level]["regeneration"] = 500;
        $shield[$level]["energyusage"] = 20;
        $shield[$level]["resource"]["metal"] = 9;
        $shield[$level]["resource"]["wire"] = 18;
        $shield[$level]["resource"]["electronics"] = 18;
        $shield[$level]["resource"]["panel"] = 9;
        $shield[$level]["resource"]["energycell"] = 9;
        

    writeData("shield", $shield);
?>