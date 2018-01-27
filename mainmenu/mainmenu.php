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
        
        <FOOTER>
            <BUTTON onclick='logout()'>Kijelentkezés</BUTTON>
        </FOOTER>
        
    </SECTION>
    
    <SECTION class='window' id='mainmenu'>
        <ARTICLE class='menu'>
            <H3>Beállítások</H3>
            <BUTTON class='closebutton' onclick='closeMainMenu()'>X</BUTTON>
            <DIV class='menubar'><BUTTON onclick='showChangeUsernameMenu()'>Felhasználónév megváltoztatása</BUTTON></DIV>
            <DIV class='menubar'><BUTTON onclick='showChangePasswordMenu()'>Jelszó megváltoztatása</BUTTON></DIV>
            <DIV class='menubar'><BUTTON onclick='showChangeEmailMenu()'>E-mail cím megváltoztatása</BUTTON></DIV>
            <DIV class='menubar'><BUTTON onclick='showDeleteAccountMenu()'>Account törlése</BUTTON></DIV>
        </ARTICLE>
    </SECTION>
    
    <SECTION class='window' id='changeusernamemenu'>
        <ARTICLE class='menu'>
            <H3>Felhasználónév megváltoztatása</H3>
            <BUTTON class='closebutton' onclick='closeChangeUsernameMenu()'>X</BUTTON>
            <FORM method='POST' action='php/changeusername.php'>
                <LABEL>Új felhasználónév: <INPUT type='text' name='newusername' id='newusername' required placeholder='Új felhasználónév'></LABEL>
                <LABEL>Jelszó: <INPUT type='password' name='newusernamepassword' id='newusernamepassword' required placeholder='Jelszó'></LABEL>
                <BUTTON>Küldés</LABEL>
            </FORM>
        </ARTICLE>
    </SECTION>
    
    <SECTION class='window' id='changepasswordmenu'>
        <ARTICLE class='menu'>
            <H3>Jelszó megváltoztatása</H3>
            <BUTTON class='closebutton' onclick='closeChangePasswordMenu()'>X</BUTTON>
            <FORM method='POST' action='php/changepassword.php' onsubmit='validateNewPassword(event)'>
                <LABEL>Új jelszó: <INPUT type='password' name='newpassword1' id='newpassword1' required placeholder='Új jelszó'></LABEL>
                <LABEL>Új jelszó újra: <INPUT type='password' name='newpassword2' id='newpassword2' required placeholder='Új jelszó újra'></LABEL>
                <LABEL>Jelszó: <INPUT type='password' name='changepassword' id='changepassword' required placeholder='Jelszó'></LABEL>
                <BUTTON>Küldés</LABEL>
            </FORM>
        </ARTICLE>
    </SECTION>
    
    <SECTION class='window' id='changeemailmenu'>
        <ARTICLE class='menu'>
            <H3>E-mail cím megváltoztatása</H3>
            <BUTTON class='closebutton' onclick='closeChangeEmailMenu()'>X</BUTTON>
            <FORM method='POST' action='php/changeemail.php' onsubmit='validateNewEmail(event)'>
                <LABEL>Új e-mail cím: <INPUT type='text' name='newemail' id='newemail' required placeholder='Új e-mail cím'></LABEL>
                <LABEL>Jelszó: <INPUT type='password' name='newemailpassword' id='newemailpassword' required placeholder='Jelszó'></LABEL>
                <BUTTON>Küldés</LABEL>
            </FORM>
        </ARTICLE>
    </SECTION>
    
    <SECTION class='window' id='deleteaccountmenu'>
        <ARTICLE class='menu'>
            <H3>Account törlése</H3>
            <BUTTON class='closebutton' onclick='closeDeleteAccountMenu()'>X</BUTTON>
            <FORM method='POST' action='php/deleteaccount.php' onsubmit='deleteAccount(event)'>
                <LABEL>Jelszó: <INPUT type='password' name='deleteaccountpassword' id='deleteaccountpassword' required placeholder='Jelszó'></LABEL>
                <BUTTON>Account törlése</BUTTON>
            </FORM>
        </ARTICLE>
    </SECTION>
    
    <SCRIPT src='js/mainmenu_controller.js'></SCRIPT>
</BODY>
</HTML>