"use strict"

// Player
var player = document.querySelector(".player__image");

// Set default player
if (player.currentSrc == "")    player.src = "https://anorak21game.github.io/RPG/asset/avatar/Lars.png";

// Select player
document.addEventListener("keypress", checkPlayer, false);
function checkPlayer(key){

    if (key.keyCode == "49")    player.src = "https://anorak21game.github.io/RPG/asset/avatar/Lars.png";
    if (key.keyCode == "50")    player.src = "https://anorak21game.github.io/RPG/asset/avatar/Lenny.png";
    if (key.keyCode == "51")    player.src = "https://anorak21game.github.io/RPG/asset/avatar/Levi.png";
}

// Move player
document.addEventListener("keydown", checkDirection, false);
function checkDirection(key){
    
    if (key.keyCode !== "38")   player.classList.remove("moveUp");
    if (key.keyCode == "38")    player.classList.add("moveUp");

    if (key.keyCode !== "40")   player.classList.remove("moveDown");
    if (key.keyCode == "40")    player.classList.add("moveDown");
    
    if (key.keyCode !== "39")   player.classList.remove("moveRight");
    if (key.keyCode == "39")    player.classList.add("moveRight");
    
    if (key.keyCode !== "37")   player.classList.remove("moveLeft");
    if (key.keyCode == "37")    player.classList.add("moveLeft");
}
