<?php
    $randomEquipment["armor"]["source"] = "armor";
    $randomEquipment["armor"]["select"] = [1, 2, 3];
    
    $randomEquipment["battery"]["source"] = "battery";
    $randomEquipment["battery"]["select"] = [1, 2, 3];
    
    $randomEquipment["engine"]["source"] = "engine";
    $randomEquipment["engine"]["select"] = [1, 2, 3];
    
    $randomEquipment["equipment"]["source"] = "equipment";
    $randomEquipment["equipment"]["select"] = ["regeneration", "shieldrecharge", "energyrecharge", "maneuver", "kineticshield", "shieldleech", "energyfield", "magneticfield", "energyleech", "cybervirus", "ioncannon", "pld"];
    
    $randomEquipment["generator"]["source"] = "generator";
    $randomEquipment["generator"]["select"] = [1, 2, 3];
    
    $randomEquipment["shield"]["source"] = "shield";
    $randomEquipment["shield"]["select"] = [1, 2, 3];
    
    $randomEquipment["laser"]["source"] = "laser";
    $randomEquipment["laser"]["select"] = [1, 2, 3];
    
    $randomEquipment["ionpulse"]["source"] = "ionpulse";
    $randomEquipment["ionpulse"]["select"] = [1, 2, 3];
    
    $randomEquipment["rocketlauncher"]["source"] = "rocketlauncher";
    $randomEquipment["rocketlauncher"]["select"] = [1, 2, 3];
    
    writeData("randomequipment", $randomEquipment);
?>