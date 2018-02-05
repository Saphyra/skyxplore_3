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
    <LINK rel='stylesheet' href='../css/game/map.css'>
    <SCRIPT src='../content/js/jquery.js'></SCRIPT>
    <SCRIPT>
        window.startGameid = "<?php print $_POST["gameid"]; ?>";
    </SCRIPT>
    <SCRIPT src='js/loadgame.js'></SCRIPT>
</HEAD>
<BODY>
    <DIV class='maincontainer'>
        <MAIN id='mapmain'>
            <DIV id='mapcontainer'>
                <SVG id='map'></SVG>
            </DIV>
        </MAIN>
        <FOOTER>footer</FOOTER>
    </DIV>

</BODY>
</HTML>