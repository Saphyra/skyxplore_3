<?php
    include("../content/php/authorization.php");
?>

<HTML>
<HEAD>
    <TITLE>Főmenü</TITLE>
    <META charset='utf-8'>
    <LINK href='../css/reset.css' rel='stylesheet'>
    <LINK href='../css/common.css' rel='stylesheet'>
    <LINK href='../css/classes.css' rel='stylesheet'>
    <LINK href='../css/fs_common.css' rel='stylesheet'>
    <SCRIPT src='../content/js/jquery.js'></SCRIPT>
    
    <STYLE>
        tr:hover{
            background-color: rgba(200,200,200,0.5);
        }
        
        th, td{
            text-align: center;
            border: 2px ridge rgb(100,100,100);
            vertical-align: middle;
        }
        
        td{
            font-size: 1.5rem;
            padding: 0.5rem;
        }
        
        th:first-child, td:first-child{
            width: 10rem;
        }
        
        th:last-child, td:last-child{
            width: 12rem;
        }
        
        th{
            font-size: 1.5rem;
            font-weight: 700;
        }
    </STYLE
</HEAD>
<BODY>

    <SECTION class='absolute0 backgroundblack8 border5px bordercolor100 borderinset overflowauto'>
        <HEADER>
            <SPAN class='headeritem'>
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
            <H2 class=' centertext fontsize20rem'>Játékok</H2>
            <DIV class='margin10rem overflowauto' id='tablecontainer'>
                <TABLE class='width100percent border1px bordersolid bordercolor255 minwidth400rem'>
                    <TR>
                        <TH>Id</TH>
                        <TH>Név</TH>
                        <TH><BUTTON onclick='showNewGameMenu()'>Új játék</BUTTON></TH>
                    </TR>
                    <?php printGames(); ?>
                </TABLE>
            </DIV>
        </MAIN>
        
        <FOOTER>
            <BUTTON class='fontsize10rem' onclick='window.location.href="../login/logout.php"'>Kijelentkezés</BUTTON>
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
            <FORM class='centertext' method='POST' action='php/changeusername.php'>
                <LABEL class='block fontsize15rem margin5rem'>Új felhasználónév: <INPUT class='fontsize10rem' type='text' name='newusername' id='newusername' required placeholder='Új felhasználónév'></LABEL>
                <LABEL class='block fontsize15rem margin5rem'>Jelszó: <INPUT class='fontsize10rem' type='password' name='newusernamepassword' id='newusernamepassword' required placeholder='Jelszó'></LABEL>
                <BUTTON class='fontsize15rem marginbottom5rem'>Küldés</LABEL>
            </FORM>
        </ARTICLE>
    </SECTION>
    
    <SECTION class='window' id='changepasswordmenu'>
        <ARTICLE class='menu'>
            <H3>Jelszó megváltoztatása</H3>
            <BUTTON class='closebutton' onclick='closeChangePasswordMenu()'>X</BUTTON>
            <FORM class='centertext' method='POST' action='php/changepassword.php' onsubmit='validateNewPassword(event)'>
                <LABEL class='block fontsize15rem margin5rem'>Új jelszó: <INPUT class='fontsize10rem' type='password' name='newpassword1' id='newpassword1' required placeholder='Új jelszó'></LABEL>
                <LABEL class='block fontsize15rem margin5rem'>Új jelszó újra: <INPUT class='fontsize10rem' type='password' name='newpassword2' id='newpassword2' required placeholder='Új jelszó újra'></LABEL>
                <LABEL class='block fontsize15rem margin5rem'>Jelszó: <INPUT class='fontsize10rem' type='password' name='changepassword' id='changepassword' required placeholder='Jelszó'></LABEL>
                <BUTTON class='fontsize15rem marginbottom5rem'>Küldés</LABEL>
            </FORM>
        </ARTICLE>
    </SECTION>
    
    <SECTION class='window' id='changeemailmenu'>
        <ARTICLE class='menu'>
            <H3>E-mail cím megváltoztatása</H3>
            <BUTTON class='closebutton' onclick='closeChangeEmailMenu()'>X</BUTTON>
            <FORM class='centertext' method='POST' action='php/changeemail.php' onsubmit='validateNewEmail(event)'>
                <LABEL class='block fontsize15rem margin5rem'>Új e-mail cím: <INPUT class='fontsize10rem' type='text' name='newemail' id='newemail' required placeholder='Új e-mail cím'></LABEL>
                <LABEL class='block fontsize15rem margin5rem'>Jelszó: <INPUT class='fontsize10rem' type='password' name='newemailpassword' id='newemailpassword' required placeholder='Jelszó'></LABEL>
                <BUTTON class='fontsize15rem marginbottom5rem'>Küldés</LABEL>
            </FORM>
        </ARTICLE>
    </SECTION>
    
    <SECTION class='window' id='deleteaccountmenu'>
        <ARTICLE class='menu'>
            <H3>Account törlése</H3>
            <BUTTON class='closebutton' onclick='closeDeleteAccountMenu()'>X</BUTTON>
            <FORM class='centertext' method='POST' action='php/deleteaccount.php' onsubmit='deleteAccount(event)'>
                <LABEL class='block fontsize15rem margin5rem'>Jelszó: <INPUT class='fontsize10rem' type='password' name='deleteaccountpassword' id='deleteaccountpassword' required placeholder='Jelszó'></LABEL>
                <BUTTON class='fontsize15rem marginbottom5rem'>Account törlése</BUTTON>
            </FORM>
        </ARTICLE>
    </SECTION>
    
    <SECTION class='window' id='newgamemenu'>
        <ARTICLE class='menu'>
            <H3>Új játék</H3>
            <BUTTON class='closebutton' onclick='closeNewGameMenu()'>X</BUTTON>
            <FORM class='centertext' method='POST' action='../game/createnewgame.php'>
                <LABEL class='block fontsize15rem margin5rem'>Játék neve: <INPUT class='fontsize10rem' type='text' name='gamename' id='gamename' required placeholder='Játék neve'></LABEL>
                <BUTTON class='fontsize15rem marginbottom5rem'>Játék létrehozása</BUTTON>
            </FORM>
        </ARTICLE>
    </SECTION>
    
    <SCRIPT src='js/mainmenu_controller.js'></SCRIPT>
</BODY>
</HTML>

<?php
    function printGames(){
        $id = $_SESSION["user"]["id"];
        $query = mysqli_query($_SESSION["conn"], "SELECT * FROM games WHERE userid='$id'");
        
        if(!mysqli_num_rows($query)){
            printNoGames();
        }else{
            while($game = mysqli_fetch_assoc($query)){
                $gameid = $game["gameid"];
                $gamename = $game["gamename"];
                $operations = createOperations($gameid);
                
                print "
                    <TR>
                        <TD>$gameid</TD>
                        <TD>$gamename</TD>
                        <TD>$operations</TD>
                    </TR>
                ";
            }
        }
    }
    
    function printNoGames(){
        print "<TR><TD colspan='3' class='fontsize15rem padding5rem'>Nincs játék.</TD></TR>";
    }
    
    function createOperations($gameid){
        return "
            <FORM class='inline' class='centertext' method='POST' action='../game/startgame.php'><BUTTON class='borderradius0 fontsize0875rem margin0125rem minwidth50rem padding0125rem'>Indítás</BUTTON><INPUT type='hidden' name='gameid' value='$gameid'></FORM>
            <FORM class='inline' class='centertext' method='POST' action='php/deletegame.php' onsubmit='deleteGame(event)'><BUTTON class='borderradius0 fontsize0875rem margin0125rem minwidth50rem padding0125rem'>Törlés</BUTTON><INPUT type='hidden' name='gameid' value='$gameid'></FORM>
        ";
    }
?>