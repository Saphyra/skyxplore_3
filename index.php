<HTML>
<HEAD>
    <TITLE>SkyXplore</TITLE>
    <META charset="utf-8">
    <LINK href="css/common.css" rel="stylesheet">
    <LINK href="css/index/index_style.css" rel="stylesheet">
</HEAD>
<BODY>
    <MAIN>
        <H1>SkyXplore</H1>
        <SECTION id="logincontainer">
            <H2>Bejelentkezés</H2>
            <FORM method="POST" action="login/php/login.php" id="login" onsubmit="validateLoginData(event)">
                <LABEL>Felhasználónév: <INPUT type="text" name="loginusername" placeholder="Felhasználónév" required id="loginusername"></LABEL>
                <LABEL>Jelszó: <INPUT type="password" name="loginpassword" placeholder="Jelszó" required id="loginpassword"></LABEL>
                <BUTTON>Bejelentkezés</BUTTON>
            </FORM>
            <FORM method="GET" action="login/forgotten.php">
                <BUTTON>Elfelejtett belépési adatok</BUTTON>
            </FORM>
        </SECTION>
        <SECTION id="registrationcontainer">
            <H2>Regisztráció</H2>
            <FORM method="POST" action="login/php/registration.php" onsubmit="validateRegistrationData(event)">
                <LABEL>Felhasználónév: <INPUT type="text" name="regusername" placeholder="Felhasználónév" required id="regusername"></LABEL>
                <LABEL>E-mail cím: <INPUT type="text" name="regemail" placeholder="E-mail cím" required id="regemail"></LABEL>
                <LABEL>Jelszó: <INPUT type="password" name="regpassword1" placeholder="Jelszó" required id="regpassword1"></LABEL>
                <LABEL>Jelszó újra: <INPUT type="password" name="regpassword2" placeholder="Jelszó újra" required id="regpassword2"></LABEL>
                <BUTTON>Regisztráció</BUTTON>
            </FORM>
        </SECTION>
        <SECTION class="introduction">
            2317-et írunk. Hosszas fejlesztések és kísérletezések során mérnökeink kifejlesztettek egy új galaktikus átjárót, melynek segítségével pillanatok alatt bárhová el lehet jutni az univerzumban. Ez lehetőségek sokaságát jelenti a felfedezók és kalandvadászok számára. Sorra alapulnak az űrkutató társaságok, mik pilóták ezreit alkalmazzák, és folyamatosan keresik a vállalkozó kedvű fiatalokat, kik a csillagok közé vágynak. De ezek az utazások veszélyeket is rejtenek magukban: agresszív idegen létformák és ellenséges társulatok támadhatnak az távoli egeken repülőkre. Elég bátor vagy ahhoz, hogy szembenézz az ismeretlennel? Csatlakozz Te is a rettenthetetlen pilóták csapatához, és légy Te a Világegyetem legjobbja!
        </SECTION>
    </MAIN>
    
    <SCRIPT src="login/js/validation.js"></SCRIPT>
</BODY>
</HTML>