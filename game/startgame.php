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
    <?php
        $files = scandir("../css/game/");
        foreach($files as $file){
            if(strstr($file, ".css")){
                print "<LINK rel='stylesheet' href='../css/game/$file'>";
            }
        }
    ?>
    <SCRIPT>
        try{
            window.startGameid = "<?php print $_POST["gameid"]; ?>";
            window.gameDataSources = JSON.parse('<?php print getGameDataSources(); ?>');
        }catch(e){
            alert(e.message);
        }
    </SCRIPT>
    <SCRIPT src='../content/js/jquery.js'></SCRIPT>
    <?php addScripts("js"); ?>
</HEAD>
<BODY>
    <DIV id='content' class='absolute0 bottom35rem'></DIV>
    
    <FOOTER style='height: 3.6rem' class='backgroundblack10 border5px bordertopridge bordercolor100 bottom0 fixed height25rem left0 nowrap padding025rem right0'>
        <TABLE class='width100percents'>
            <TR>
                <TD class='paddingright20rem'>Pénz: <SPAN id='playermoney'></SPAN></TD>
                <TD class='centertext paddingright20rem'>
                    <BUTTON onclick='newRound.newRound()'>Új kör</BUTTON>
                    <BUTTON onclick='schemaView.showChemaView()'>Harcászati sémák</BUTTON>
                </TD>
                <TD class='paddingright20rem righttext'>
                    <BUTTON onclick='data.saveGame()'>Játék mentése</BUTTON>
                    <BUTTON onclick='animation.toggleFullScreen()' id='fullscreenbutton'>Teljes képernyő</BUTTON>
                    <BUTTON onclick='document.getElementById("logcontainer").style.display = "block"'>Log</BUTTON>
                    <BUTTON onclick='window.location.href = "../mainmenu/mainmenu.php"'>Kilépés</BUTTON>
                </TD>
            </TR>
        </TABLE>
    </FOOTER>
    
    <DIV class='backgroundblack10 centertext displaynone fixed0 overflowauto' id='logcontainer' oncontextmenu='document.getElementById("logcontainer").style.display="none"'>
        <BUTTON style='font-size: 1.25rem; margin: 0.5rem;' onclick='document.getElementById("logcontainer").style.display="none"; $("#log").text("");'>Bezárás</BUTTON>
        <BUTTON style='font-size: 1.25rem; margin: 0.5rem;' onclick='document.getElementById("log").innerHTML = ""'>Ürítés</BUTTON>
        <DIV class='lefttext' id='log'></DIV>
    </DIV>
</BODY>
</HTML>

<?php
    function getGameDataSources(){
        $files = scandir("gamedata/data/");
        $result = [];
        foreach($files as $file){
            if(strstr($file, ".json")){
                $result[] = explode(".json", $file)[0];
            }
        }
        return json_encode($result);
    }
    
    function addScripts($dirname){
        $dir = $dirname .= "/";
        $files = scandir($dir);
        foreach($files as $file){
            if($file != "." && $file!= ".."){
                if(is_dir($dir . $file)){
                    addScripts($dir . $file);
                }else if(strstr($file, ".js")){
                    //print "<SCRIPT src='$dir$file'></SCRIPT>";
                    print "<SCRIPT>" . file_get_contents($dir.$file) . "</SCRIPT>";
                }
            }
        }
    }
?>