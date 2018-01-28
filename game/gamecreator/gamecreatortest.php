<HTML>
<BODY>

<?php
    include("gamecreator.php");
    $game = gameCreator("game");
    
    function write($element){
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
    
    write($game);
?>
<DIV style='width: 100%; height: 100%; overflow: auto;'>
<SVG width='2000' height='2000' style='border: 5px solid black; padding: 30px; padding-top: 60px; background-color: blue;'>
<?php
    $stars = $game["stars"];
    $connections = [];
    foreach($stars as $star){
        foreach($star->connections as $connection){
            if(!in_array($connection, $connections)){
                $conn = explode("-", $connection);
                $x1 = $stars[$conn[0]]->xcord;
                $y1 = $stars[$conn[0]]->ycord;
                $x2 = $stars[$conn[1]]->xcord;
                $y2 = $stars[$conn[1]]->ycord;
                print "<LINE style='stroke:white ;stroke-width:2' x1='$x1' y1='$y1' x2='$x2' y2='$y2' />\n";
            }
        }
    }
    foreach($stars as $star){
        print "<CIRCLE r='30' cx='" . $star->xcord . "' cy='" . $star->ycord . "'></CIRCLE>\n";
    }
    
    foreach($stars as $star){
        print "<TEXT x='" . $star->xcord . "' y='" . ($star->ycord - 40) . "' text-anchor='middle' fill='red' style='font-size: 24px;'>$star->starname</TEXT>\n";
    }
    
?>
</SVG></DIV>
</BODY>
</HTML>