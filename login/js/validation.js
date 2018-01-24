function validateLoginData(event){
    const username = document.getElementById("loginusername").value;
    const password = document.getElementById("loginpassword").value;
    
    if(username === "" || password === ""){
        alert("Töltse ki a mezőket!")
        event.preventDefault();
    }
}
function validateRegistrationData(event){
    try{
        const username = document.getElementById("regusername").value;
        const email = document.getElementById("regemail").value;
        const password1 = document.getElementById("regpassword1").value;
        const password2 = document.getElementById("regpassword2").value;
        
        if(username === "" || email === "" || password1 === "" || password2 === ""){
            alert("Töltse ki a mezőket!");
            event.preventDefault();
        } else if(password1 !== password2){
            alert("A jelszavak nem egyeznek!");
            document.getElementById("regpassword1").value = "";
            document.getElementById("regpassword2").value = "";
            event.preventDefault();
        } else if(!isEmailValid(email)){
            alert("Érvénytelen e-mail cím!");
            document.getElementById("regemail").value = "";
            event.preventDefault();
        } else if(!isUsernameExists(username)){
            alert("Felhasználónév foglalt.");
            document.getElementById("regusername").value = "";
            event.preventDefault();
        }
    }catch(err)
    {
        alert(arguments.callee.name + err.name + ": " + err.message);
    }
}

function isEmailValid(email)
{
    try
    {
        var result;
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
        else
        {
            result = true;
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

function isUsernameExists(username){
    const request = new XMLHttpRequest();
        request.open("POST", "login/php/usernamecheck.php", 0);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send("username=" + username);
        if(request.responseText == 0){
            return true;
        } else if(request.responseText == 1){
            return false;
        } else{
            alert("Ismeretlen hiba: " + request.responseText);
            return false;
        }
}