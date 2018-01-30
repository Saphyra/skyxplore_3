<?php
    $GLOBALS["cache"] = [];
    function getGameData($resource){
        if(isset($GLOBALS["cache"][$resource])){
            return $GLOBALS["cache"][$resource];
        }
        
        $path = __DIR__ . "/" . $resource . ".json";
        $content = file_get_contents($path);
        $data = json_decode($content, 1);
        
        $GLOBALS["cache"][$resource] = $data;
        
        return $data;
    }
    
    function getElementData($resource, $index){
        $resources = getGameData($resource);
        if(isset($resources[$index])){
            return $resources[$index];
        }else return null;
    }
?>