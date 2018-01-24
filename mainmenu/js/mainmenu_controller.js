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