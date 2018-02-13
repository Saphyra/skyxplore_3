<HTML>
<HEAD>
    <TITLE>Elfelejtett belépési adatok</TITLE>
    <META charset="utf-8">
    <LINK href="../css/reset.css" rel="stylesheet">
    <LINK href="../css/common.css" rel="stylesheet">
    <LINK href="../css/classes.css" rel="stylesheet">
    <STYLE>
        @media screen and (max-width: 500px){
            main{
                position: static !important;
                height: 100% !important;
            }
        }
    </STYLE>
</HEAD>
<BODY>
    <MAIN class='absolute50 backgroundblack8 border5px borderridge bordercolor100 centertext overflowauto'>
        <H1>Elfelejtett belépési adatok</H1>
        <H2 class='fontsize20rem'>A belépési adatok pótlásához adja meg felhasználónevét és/vagy e-mail címét!</H2>
        <FORM class='marginbottom30rem' method="POST" action="php/sendforgottendata.php">
            <LABEL class='fontsize20rem block margin10rem'>Felhasználónév: <INPUT class='fontsize15rem' type="text" name="forgottenusername" id="forgottenusername" placeholder="Felhasználónév"></LABEL>
            <LABEL class='fontsize20rem block margin10rem'>E-mail cím: <INPUT class='fontsize15rem' type="text" name="forgottenemail" id="forgottenemail" placeholder="E-mail cím"></LABEL>
            <BUTTON class='fontsize15rem margintop15rem'>Adatok kérése</BUTTON>
        </FORM>
        <A class='fontsize20rem' href="../index.php">Kezdőlap</A>
    </MAIN>
</BODY>
</HTML>