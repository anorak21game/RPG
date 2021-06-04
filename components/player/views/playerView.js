export class PlayerView {
    constructor() {
        this.player = document.getElementById("player");
        this.player.className = "player";
        this.image = document.createElement("img");
        this.image.className = "player__stop--down";
        this.image.src = "components/player/assets/lars.png"; 
        this.player.append(this.image);
    }
}

// const playerView = document.createElement('template');
// playerView.innerHTML = ``;

// document.addEventListener('keypress', selectPlayer, true);
// function selectPlayer(key) {
//     if (key.keyCode == '49') playerModel.player = "components/player/asset/Lars.png";
//     if (key.keyCode == '50') playerModel.player = "components/player/asset/Lenny.png";
//     if (key.keyCode == '51') playerModel.player = "components/player/asset/Levi.png";
// }

// document.addEventListener("keydown", movePlayer, true);
// function movePlayer(key) {
//     if (key.keyCode == "38") playerModel.walk = "walkUp";
//     if (key.keyCode == "40") playerModel.walk = "walkDown";
//     if (key.keyCode == "39") playerModel.walk = "walkRight";
//     if (key.keyCode == "37") playerModel.walk = "walkLeft";
// }

// document.addEventListener("keyup", stopPlayer, true);
// function stopPlayer() {
//     if (playerModel.walk == "walkUp") playerModel.walk = "stopUp";
//     if (playerModel.walk == "walkDown") playerModel.walk = "stopDown";
//     if (playerModel.walk == "walkRight") playerModel.walk = "stopRight";
//     if (playerModel.walk == "walkLeft") playerModel.walk = "stopLeft";
// }