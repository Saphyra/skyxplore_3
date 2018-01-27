function showMainMenu(){
    closeAllWindows();
    document.getElementById("mainmenu").style.display = "block";
}

function closeMainMenu(){
    document.getElementById("mainmenu").style.display = "none";
}

function closeAllWindows(){
    $(".autoclosable").css("display", "none");
}

function logout(){
    window.location.href = "../login/logout.php";
}

function showChangeUsernameMenu(){
    document.getElementById("changeusernamemenu").style.display = "block";
}

function closeChangeUsernameMenu(){
    document.getElementById("changeusernamemenu").style.display = "none";
}

function showChangePasswordMenu(){
    document.getElementById("changepasswordmenu").style.display = "block";
}

function closeChangePasswordMenu(){
    document.getElementById("changepasswordmenu").style.display = "none";
}

function validateNewPassword(event){
    const oldPassword = document.getElementById("changepassword").value;
    const newPassword1 = document.getElementById("newpassword1").value;
    const newPassword2 = document.getElementById("newpassword2").value;
    
    if(newPassword1 !== newPassword2){
        alert("A jelszavak nem egyeznek!");
        emptyPasswordFields();
        event.preventDefault();
    } else if(oldPassword === newPassword1){
        alert("Ez az aktuális jelszó.");
        emptyPasswordFields();
        event.preventDefault();
    }
}

    function emptyPasswordFields(){
        document.getElementById("changepassword").value = "";
        document.getElementById("newpassword1").value = "";
        document.getElementById("newpassword2").value = "";
    }
    
function showChangeEmailMenu(){
    document.getElementById("changeemailmenu").style.display = "block";
}

function closeChangeEmailMenu(){
    document.getElementById("changeemailmenu").style.display = "none";
}

function validateNewEmail(event){
    const email = document.getElementById("newemail").value;

    if(!isEmailValid(email)){
        alert("Érvénytelen e-mail cím.");
        document.getElementById("newemail").value = "";
        document.getElementById("newemailpassword").value = "";
        event.preventDefault();
    }
}

    function isEmailValid(email)
    {
        try
        {
            email = email || "";
            var result = true;
            if(email.indexOf("@") < 1) 
            {
                result = false;
            }
            else if(email.lenght < 4)
            {
                result = false;
            }
            else if(email.indexOf(".") < 0)
            {
                result = false;
            }
            else if(email.lastIndexOf(".") > email.length - 3)
            {
                result = false;
            }
        }
        catch(err)
        {
            alert(arguments.callee.name + err.name + ": " + err.message);
        }
        finally
        {
            return result;
        }
    }
    
function showDeleteAccountMenu(){
    document.getElementById("deleteaccountmenu").style.display = "block";
}

function closeDeleteAccountMenu(){
    document.getElementById("deleteaccountmenu").style.display = "none";
}

function deleteAccount(event){
    if(!confirm("Biztosan törölni szeretné accountját?\nA kitörölt account visszaállítása nem lehetséges.")){
        document.getElementById("deleteaccountpassword").value = "";
        event.preventDefault();
    }
}