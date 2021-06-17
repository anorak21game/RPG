import { Events } from '../../../library/events.js';

class Status {
  constructor() {
    this.values = {
      player: 'components/player/asset/lars.png',
      walk: 'player__stop--down',
    }
  }

  getPlayer()           { return this.values.player; }
  getWalk()             { return this.values.walk; }

  setPlayer(value)      { this.values.player = value; }
  setWalk(value)        { this.values.player = value; }
}

class Body {
  constructor() {
    this.player = document.getElementById("player");
    this.player.className = "player";
    this.image = document.createElement("img");
    this.player.append(this.image);
  }

  setSrc(value)         { this.image.src = value; }
  setClassName(value)   { this.image.className = value; }

  // selectPlayer() {
  //   document.addEventListener('keypress', (event) => {
  //     event.preventDefault();
  //     if (event.key == '1') this.image.src = 'components/player/asset/lars.png';
  //     if (event.key == '2') this.image.src = 'components/player/asset/levi.png';
  //     if (event.key == '3') this.image.src = 'components/player/asset/lenny.png';
  //   })
  // }
}

class Connector extends Events {
  constructor(body, status) {
    super();
    this.body = body;
    this.status = status;

    this.body.setSrc(this.status.getPlayer());
    this.body.setClassName(this.status.getWalk());
  }
}

const player = new Connector(new Body(), new Status());
console.log(player);




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