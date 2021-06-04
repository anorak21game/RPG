"use strict"

/* Model */
const target = {
    player: "components/player/asset/Lars.png",
    walk: "stopDown"
};

const handler = {
    // get(target, property) {
    //     onModelUpdate(target[property]);
    // }
};
var playerModel = new Proxy(target, handler);

// const onModelUpdate = (model) => {
//     return model;
// }

/* View */
const playerView = document.createElement('template');
playerView.innerHTML = `
<style>
.player {
    width: 256px; 
    height: 256px; 
    overflow: hidden; 
    position: relative; 
    margin: 0 auto;
}

.movement {
    animation: moveAvatar 1s steps(8) infinite;
    position: absolute;
}

.moveUp {
    top: -512px;
}

.moveDown {
    top: -256px;
}

.moveRight {
    top: -768px;
}

.moveLeft{
    top: -1024px;
}

@keyframes movePlayer {
    from {
        transform: translate3d(0px,0,0);
    }
    to {
        transform: translate3d(-100%,0,0);
    }
}
</style>

<div id="player" class="player">
<img id="player_image" class="movement" src="">
</div>
`;

class PlayerView extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(playerView.content.cloneNode(true));
        this.shadowRoot.getElementById('player_image').src = playerModel.player;
    }
}

customElements.define('player-view', PlayerView);

/* Events */
document.addEventListener('keypress', selectPlayer, true);
function selectPlayer(key) {
    if (key.keyCode == '49') playerModel.player = "components/player/asset/Lars.png";
    if (key.keyCode == '50') playerModel.player = "components/player/asset/Lenny.png";
    if (key.keyCode == '51') playerModel.player = "components/player/asset/Levi.png";
}

document.addEventListener("keydown", movePlayer, true);
function movePlayer(key) {
    if (key.keyCode == "38") playerModel.walk = "walkUp";
    if (key.keyCode == "40") playerModel.walk = "walkDown";
    if (key.keyCode == "39") playerModel.walk = "walkRight";
    if (key.keyCode == "37") playerModel.walk = "walkLeft";
}

document.addEventListener("keyup", stopPlayer, true);
function stopPlayer() {
    if (playerModel.walk == "walkUp") playerModel.walk = "stopUp";
    if (playerModel.walk == "walkDown") playerModel.walk = "stopDown";
    if (playerModel.walk == "walkRight") playerModel.walk = "stopRight";
    if (playerModel.walk == "walkLeft") playerModel.walk = "stopLeft";
}