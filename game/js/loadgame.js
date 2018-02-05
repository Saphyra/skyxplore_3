$(document).ready(load);

function load(){
    const path = "saves/" + window.startGameid + ".json";
    const request = new XMLHttpRequest();
        request.open("GET", path, 1);
        request.send();
        request.onreadystatechange = function(){
            if(request.readyState === 4 && request.status === 200){
                window.gameData = JSON.parse(request.responseText);
                showMap();
            }
        }
}