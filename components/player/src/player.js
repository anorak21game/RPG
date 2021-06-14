
class Model {
  constructor() {
    this.status = {
      player: 'components/player/asset/lars.png',
      walk: 'player__stop--down',
    }
  }
}

class View {
  constructor() {
    this.player = document.getElementById("player");
    this.player.className = "player";
    this.image = document.createElement("img");
    this.player.append(this.image);
  }

  selectPlayer() {
    document.addEventListener('keypress', (event) => {
      event.preventDefault();
      if (event.key == '1') this.image.src = 'components/player/asset/lars.png';
      if (event.key == '2') this.image.src = 'components/player/asset/levi.png';
      if (event.key == '3') this.image.src = 'components/player/asset/lenny.png';
    })
  }
}

class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.view.image.src = this.model.status.player;
    this.view.image.className = this.model.status.walk;

    this.view.selectPlayer();
  }
}

const player = new Controller(new View(), new Model());
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