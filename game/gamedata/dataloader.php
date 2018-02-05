<?php
    $GLOBALS["cache"] = [];
    function getGameData($resource){
        if(isset($GLOBALS["cache"][$resource])){
            return getFromCache($resource);
        }
        
        $path = __DIR__ . "/data/" . $resource . ".json";
        $content = file_get_contents($path);
        $data = json_decode($content, 1);
        
        putToCache($resource, $data);
        return $data;
    }
    
    function getElementData($resource, $index){
        $resources = getGameData($resource);
        if(isset($resources[$index])){
            return $resources[$index];
        }else{
            //die("Undefined resource: $resource - $index");
            return null;
        }
    }
    
    function putToCache($key, $data){
        $GLOBALS["cache"][$key] = $data;
    }
    
    function getFromCache($key){
        if(isset($GLOBALS["cache"][$key])){
            return $GLOBALS["cache"][$key];
        }else{
            return null;
        }
    }
?>