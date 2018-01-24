<HTML>
<HEAD>
    <TITLE>Elfelejtett belépési adatok</TITLE>
    <META charset="utf-8">
    <LINK href="../css/common.css" rel="stylesheet">
    <LINK href="../css/index/forgotten_style.css" rel="stylesheet">
</HEAD>
<BODY>
    <MAIN>
        <H1>Elfelejtett belépési adatok</H1>
        <H2>A belépési adatok pótlásához adja meg felhasználónevét és/vagy e-mail címét!</H2>
        <FORM method="POST" action="php/sendforgottendata.php">
            <LABEL>Felhasználónév: <INPUT type="text" name="forgottenusername" id="forgottenusername" placeholder="Felhasználónév"></LABEL>
            <LABEL>E-mail cím: <INPUT type="text" name="forgottenemail" id="forgottenemail" placeholder="E-mail cím"></LABEL>
            <BUTTON>Adatok kérése</BUTTON>
        </FORM>
        <A href="../index.php">Kezdőlap</A>
    </MAIN>
</BODY>
</HTML>