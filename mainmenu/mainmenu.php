<?php
    include("../content/php/authorization.php");
?>

<HTML>
<HEAD>
    <TITLE>Főmenü</TITLE>
    <META charset='utf-8'>
    <LINK href='../css/common.css' rel='stylesheet'>
    <LINK href='../css/fs_common.css' rel='stylesheet'>
    <LINK href='../css/mainmenu/mainmenu.css' rel='stylesheet'>
    <SCRIPT src='../content/js/jquery.js'></SCRIPT>
</HEAD>
<BODY>
    <SECTION id='maincontainer'>
    
        <HEADER>
            <SPAN class='headeritem'
                <EM>ID:</EM>
                <?php print $_SESSION["user"]["id"]; ?>
            </SPAN>
            <SPAN class='headeritem'
                <EM>Felhasználónév:</EM>
                <?php print $_SESSION["user"]["username"]; ?>
            </SPAN>
            <DIV id='menubutton'>
                <INPUT type='image' id='settingsbutton' src='../content/img/settingsbutton.png' onclick='showMainMenu()'>
            </DIV>
        </HEADER>
        
        <MAIN>
            <H1>Főmenü</H1>
            <H2>Játékok</H2>
        </MAIN>
        
    </SECTION>
    
    <SECTION class='window' id='mainmenu'>
        <ARTICLE class='menu'>
            <H3>Beállítások</H3>
            <BUTTON class='closebutton' onclick='closeMainMenu()'>X</BUTTON>
            <DIV class='menubar'><BUTTON onclick='logout()'>Kijelentkezés</BUTTON></DIV>
            <HR>
            <DIV class='menubar'><BUTTON>Felhasználónév megváltoztatása</BUTTON></DIV>
            <DIV class='menubar'><BUTTON>Jelszó megváltoztatása</BUTTON></DIV>
            <DIV class='menubar'><BUTTON>E-mail cím megváltoztatása</BUTTON></DIV>
            <DIV class='menubar'><BUTTON>Account törlése</BUTTON></DIV>
        </ARTICLE>
    </SECTION>
    
    <SCRIPT src='js/mainmenu_controller.js'></SCRIPT>
</BODY>
</HTML>