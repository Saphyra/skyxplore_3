<?php
    function writeData($filename, $arr){
        $data = json_encode($arr);
        $fileName = "../" . $filename . ".json";
        
        $file = fopen($fileName, "w");
        fwrite($file, $data);
        fclose($file);
        
        print $data;
        write($arr);
    }
    
    function write($element){
        //Writes content of an element recursive
        $type = gettype($element);
        if($type == "array"){
            print "<OL>";
                foreach($element as $name=>$value){
                    print "<LI>$name - ";
                    write($value);
                    print "</LI>";
                }
            print "</OL>";
        }else if($type == "object"){
            $props = get_object_vars($element);
            print "<OL>";
                foreach($props as $name=>$value){
                    print "<LI>$name - ";
                    write($value);
                    print "</LI>";
                }
            print "</OL>";
        }else{
            print $element;
        }
    }
?>