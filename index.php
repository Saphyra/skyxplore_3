<?php
    if(isset($_COOKIE["logindata"])){
        header("location:login/php/loginwithcookie.php");
        exit;
    }
?>

<HTML>
<HEAD>
    <TITLE>SkyXplore</TITLE>
    <META charset="utf-8">
    <LINK href="css/reset.css" rel="stylesheet">
    <LINK href="css/common.css" rel="stylesheet">
    <LINK href="css/classes.css" rel="stylesheet">
    
    <STYLE>
        @media screen and (max-width: 1000px){
            main{
                position: static !important;
            }
            #logincontainer, #registrationcontainer{
                float: none;
                border: none;
                border-bottom: 5px ridge rgb(100,100,100);
                width: 100%;
                margin: 0;
            }
            
            label{
                text-align: center !important;
            }
        }
    </STYLE>
</HEAD>
<BODY>
    <MAIN class='absolute20rem backgroundblack8 border5px borderridge bordercolor100 overflowauto'>
        <H1>SkyXplore</H1>
        <SECTION class='border5px borderbottomridge borderrightridge bordercolor100 centertext floatleft marginleft025rem marginright025rem padding025rem width230rem' id="logincontainer">
            <H2 class='centertext fontsize20rem'>Bejelentkezés</H2>
            <FORM method="POST" action="login/php/login.php" id="login" onsubmit="validateLoginData(event)">
                <LABEL class='block fontsize15rem marginbottom025rem righttext'>Felhasználónév: <INPUT class='fontsize0875rem' type="text" name="loginusername" placeholder="Felhasználónév" required id="loginusername"></LABEL>
                <LABEL class='block fontsize15rem marginbottom025rem righttext'>Jelszó: <INPUT class='fontsize0875rem' type="password" name="loginpassword" placeholder="Jelszó" required id="loginpassword"></LABEL>
                <LABEL class='block fontsize15rem marginbottom025rem'><INPUT type='checkbox' name='stayloggedin' value='1'>Bejelentkezve szeretnék maradni.</LABEL><BR>
                <BUTTON class='marginbottom025rem'>Bejelentkezés</BUTTON>
            </FORM>
            <FORM method="GET" action="login/forgotten.php">
                <BUTTON class='marginbottom025rem'>Elfelejtett belépési adatok</BUTTON>
            </FORM>
        </SECTION>
        <SECTION class='border5px borderbottomridge borderleftridge bordercolor100 centertext floatright marginleft025rem marginright025rem padding025rem width230rem' id="registrationcontainer">
            <H2 class='centertext fontsize20rem'>Regisztráció</H2>
            <FORM method="POST" action="login/php/registration.php" onsubmit="validateRegistrationData(event)">
                <LABEL class='block fontsize15rem marginbottom025rem righttext'>Felhasználónév: <INPUT class='fontsize0875rem' type="text" name="regusername" placeholder="Felhasználónév" required id="regusername"></LABEL>
                <LABEL class='block fontsize15rem marginbottom025rem righttext'>E-mail cím: <INPUT class='fontsize0875rem' type="text" name="regemail" placeholder="E-mail cím" required id="regemail"></LABEL>
                <LABEL class='block fontsize15rem marginbottom025rem righttext'>Jelszó: <INPUT class='fontsize0875rem' type="password" name="regpassword1" placeholder="Jelszó" required id="regpassword1"></LABEL>
                <LABEL class='block fontsize15rem marginbottom025rem righttext'>Jelszó újra: <INPUT class='fontsize0875rem' type="password" name="regpassword2" placeholder="Jelszó újra" required id="regpassword2"></LABEL>
                <BUTTON class='marginbottom025rem'>Regisztráció</BUTTON>
            </FORM>
        </SECTION>
        <SECTION class="fontsize15rem justifytext padding025rem">
            2317-et írunk. Hosszas fejlesztések és kísérletezések során mérnökeink kifejlesztettek egy új galaktikus átjárót, melynek segítségével pillanatok alatt bárhová el lehet jutni az univerzumban. Ez lehetőségek sokaságát jelenti a felfedezók és kalandvadászok számára. Sorra alapulnak az űrkutató társaságok, mik pilóták ezreit alkalmazzák, és folyamatosan keresik a vállalkozó kedvű fiatalokat, kik a csillagok közé vágynak. De ezek az utazások veszélyeket is rejtenek magukban: agresszív idegen létformák és ellenséges társulatok támadhatnak az távoli egeken repülőkre. Elég bátor vagy ahhoz, hogy szembenézz az ismeretlennel? Csatlakozz Te is a rettenthetetlen pilóták csapatához, és légy Te a Világegyetem legjobbja!
        </SECTION>
    </MAIN>
    
    <SCRIPT src="login/js/validation.js"></SCRIPT>
</BODY>
</HTML>