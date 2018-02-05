$(document).ready(load);

function load(){
    const request = new XMLHttpRequest();
        request.open("POST", "php/loadgame.php", 1);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send("gameid=" + window.startGameid);
        request.onreadystatechange = function(){
            if(request.readyState === 4 && request.status === 200){
                document.write(request.responseText);
            }
        }
}