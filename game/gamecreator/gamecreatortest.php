<HTML>
<HEAD>
    <TITLE>Játékgenerátor teszt</TITLE>
    <META charset='utf-8'>
    <STYLE>
        body{
            margin: 0;
            padding: 0;
        }
        
        #container{
            background-image: url('../../content/img/background_base.jpg');
            background-size: cover;
            background-attachment: fixed;
            max-width: 2110px;
            max-height: 2110px;
            background-position: center center;
        }
    </STYLE>
</HEAD>
<BODY>

<?php
    $startTime = microtime(true);
    include("../../content/php/connection.php");
    include("gamecreator.php");
    $game = gameCreator("game");
?>
<DIV style='width: 100%; height: 100%; overflow: auto;' id='container'>
<SVG width='2000' height='2000' style='border: 5px solid black; padding: 60px; background-color: rgba(0,0,0,0.2);'>
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
        switch($star->owner){
            case "player":
                $fill = "red";
            break;
            case "enemy":
                $fill = "green";
            break;
            default:
                $fill = "black";
            break;
        }
        
        print "<CIRCLE r='30' cx='" . $star->xcord . "' cy='" . $star->ycord . "' fill='$fill'></CIRCLE>\n";
    }
    
    foreach($stars as $star){
        print "<TEXT x='" . $star->xcord . "' y='" . ($star->ycord - 40) . "' text-anchor='middle' fill='red' style='font-size: 24px;'>$star->starname ($star->planetnum)</TEXT>\n";
    }
    
?>
</SVG></DIV>
<?php
    write($game);
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
    
    $endTime = microtime(true);
    print "<BR>Time: " . ($endTime - $startTime);
?>
</BODY>
</HTML>