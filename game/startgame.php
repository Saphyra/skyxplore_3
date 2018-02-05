<?php
    include("../content/php/authorization.php");
    if(!isset($_POST["gameid"])){
        header("location:../mainmenu/mainmenu.php");
    }
?>

<HTML>
<HEAD>
    <TITLE>SkyXplore</TITLE>
    <META charset='utf-8'>
    <LINK rel='stylesheet' href='../css/common.css'>
    <LINK rel='stylesheet' href='../css/fs_common.css'>
    <LINK rel='stylesheet' href='../css/game/game.css'>
    <LINK rel='stylesheet' href='../css/game/map.css'>
    <LINK rel='stylesheet' href='../css/game/log.css'>
    
    <SCRIPT>window.startGameid = "<?php print $_POST["gameid"]; ?>";</SCRIPT>
    <SCRIPT src='../content/js/jquery.js'></SCRIPT>
    
    <SCRIPT src='js/loadgame.js'></SCRIPT>
    <SCRIPT src='js/showmap.js'></SCRIPT>
    <SCRIPT src='js/logger.js'></SCRIPT>
    <SCRIPT src='js/starview.js'></SCRIPT>
    <SCRIPT src='js/animation.js'></SCRIPT>
</HEAD>
<BODY>
    <DIV class='maincontainer'>
        <MAIN id='mapmain'>
            <DIV id='mapcontainer'>
                <SVG id='map'></SVG>
            </DIV>
        </MAIN>
        <FOOTER><BUTTON onclick='window.location.href = "../mainmenu/mainmenu.php"'>Vissza</BUTTON></FOOTER>
    </DIV>

    <DIV id='logcontainer'>
        <BUTTON onclick='document.getElementById("logcontainer").style.display="none"'>Bezárás</BUTTON>
        <DIV id='log'></DIV>
    </DIV>
</BODY>
</HTML>