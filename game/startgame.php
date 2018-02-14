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
    
    <LINK rel='stylesheet' href='../css/reset.css'>
    <LINK rel='stylesheet' href='../css/common.css'>
    <LINK rel='stylesheet' href='../css/classes.css'>
    <LINK rel='stylesheet' href='../css/fs_common.css'>
    <?php
        $files = scandir("../css/game/");
        foreach($files as $file){
            if(strstr($file, ".css")){
                print "<LINK rel='stylesheet' href='../css/game/$file'>";
            }
        }
    ?>
    <SCRIPT>
        window.startGameid = "<?php print $_POST["gameid"]; ?>";
    </SCRIPT>
    <SCRIPT src='../content/js/jquery.js'></SCRIPT>
    
    <?php
        $files = scandir("js/");
        foreach($files as $file){
            if(strstr($file, ".js")){
                print "<SCRIPT src='js/$file'></SCRIPT>";
            }
        }
    ?>
</HEAD>
<BODY>
    <DIV id='content'></DIV>
    
    <DIV class='backgroundblack10 centertext displaynone fixed0 overflowauto' id='logcontainer' oncontextmenu='document.getElementById("logcontainer").style.display="none"'>
        <BUTTON onclick='document.getElementById("logcontainer").style.display="none"'>Bezárás</BUTTON>
        <DIV class='lefttext' id='log'></DIV>
    </DIV>
</BODY>
</HTML>