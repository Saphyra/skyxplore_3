<?php
    $defaultResource["source"] = "resource";
    
    $type = "food";
    $resource[$type] = $defaultResource;
    $resource[$type]["key"] = $type;
    $resource[$type]["type"] = $type;
    $resource[$type]["name"] = "Étel";
    $resource[$type]["source"] = "farm";
    $resource[$type]["storage"] = "fridge";
    
    $type = "resource";
    $resource[$type] = $defaultResource;
    $resource[$type]["key"] = $type;
    $resource[$type]["type"] = $type;
    $resource[$type]["name"] = "Nyersanyag";
    $resource[$type]["source"] = "mine";
    $resource[$type]["storage"] = "depot";

    $type = "board";
    $resource[$type] = $defaultResource;
    $resource[$type]["key"] = $type;
    $resource[$type]["type"] = $type;
    $resource[$type]["name"] = "Deszka";
    $resource[$type]["source"] = "factory";
    $resource[$type]["storage"] = "depot";
    $resource[$type]["material"]["resource"] = 1;
    
    $type = "brick";
    $resource[$type] = $defaultResource;
    $resource[$type]["key"] = $type;
    $resource[$type]["type"] = $type;
    $resource[$type]["name"] = "Tégla";
    $resource[$type]["source"] = "factory";
    $resource[$type]["storage"] = "depot";
    $resource[$type]["material"]["resource"] = 1;
    
    $type = "metal";
    $resource[$type] = $defaultResource;
    $resource[$type]["key"] = $type;
    $resource[$type]["type"] = $type;
    $resource[$type]["name"] = "Fém";
    $resource[$type]["source"] = "factory";
    $resource[$type]["storage"] = "depot";
    $resource[$type]["material"]["resource"] = 2;
    
    $type = "wire";
    $resource[$type] = $defaultResource;
    $resource[$type]["key"] = $type;
    $resource[$type]["type"] = $type;
    $resource[$type]["name"] = "Vezeték";
    $resource[$type]["source"] = "factory";
    $resource[$type]["storage"] = "depot";
    $resource[$type]["material"]["metal"] = 1;
    
    $type = "electronics";
    $resource[$type] = $defaultResource;
    $resource[$type]["key"] = $type;
    $resource[$type]["type"] = $type;
    $resource[$type]["name"] = "Elektronika";
    $resource[$type]["source"] = "factory";
    $resource[$type]["storage"] = "depot";
    $resource[$type]["material"]["wire"] = 2;
    
    $type = "panel";
    $resource[$type] = $defaultResource;
    $resource[$type]["key"] = $type;
    $resource[$type]["type"] = $type;
    $resource[$type]["name"] = "Panel";
    $resource[$type]["source"] = "factory";
    $resource[$type]["storage"] = "depot";
    $resource[$type]["material"]["metal"] = 2;
    $resource[$type]["material"]["wire"] = 1;
    $resource[$type]["material"]["electronics"] = 2;
    
    $type = "energycell";
    $resource[$type] = $defaultResource;
    $resource[$type]["key"] = $type;
    $resource[$type]["type"] = $type;
    $resource[$type]["name"] = "Energiacella";
    $resource[$type]["source"] = "factory";
    $resource[$type]["storage"] = "depot";
    $resource[$type]["material"]["wire"] = 2;
    $resource[$type]["material"]["electronics"] = 2;
    
    $type = "hull";
    $resource[$type] = $defaultResource;
    $resource[$type]["key"] = $type;
    $resource[$type]["type"] = $type;
    $resource[$type]["name"] = "Hajótest";
    $resource[$type]["source"] = "factory";
    $resource[$type]["storage"] = "depot";
    $resource[$type]["material"]["metal"] = 5;
    $resource[$type]["material"]["wire"] = 1;
    
    writeData("resource", $resource);
?>