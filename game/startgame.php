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
        try{
            window.startGameid = "<?php print $_POST["gameid"]; ?>";
            window.gameDataSources = JSON.parse('<?php print getGameDataSources(); ?>');
        }catch(e){
            alert(e.message);
        }
    </SCRIPT>
    <SCRIPT src='../content/js/jquery.js'></SCRIPT>
    
    <?php
        addScripts("js");
    ?>
</HEAD>
<BODY>
    <DIV id='content'></DIV>
    
    <DIV class='backgroundblack10 centertext displaynone fixed0 overflowauto' id='logcontainer' oncontextmenu='document.getElementById("logcontainer").style.display="none"'>
        <BUTTON onclick='document.getElementById("logcontainer").style.display="none"; $("#log").text("");'>Bezárás</BUTTON>
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
                    print "<SCRIPT src='$dir$file'></SCRIPT>";
                }
            }
        }
    }
?>