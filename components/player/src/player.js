
class Model {
  constructor() {
    this.status = {
      spritesheet: 'components/player/asset/lars.png',
      walk: 'player__stop--down',
    }
  }

  getPlayerSrc(src) {
    src = this.status.spritesheet;
  };
}

class View {
  constructor() {
    this.player = document.getElementById("player");
    this.player.className = "player";
    this.image = document.createElement("img");
    this.player.append(this.image);
  }

  bindGetPlayerSrc(handler) {    
    document.addEventListener('keypress', (event) => {
      event.preventDefault()

      if (event.key == '1') {
        handler(this.player.spritesheet);
      }
    })
  }
  
  // selectPlayer(expr) {
  //   switch (expr) {
  //     case 'lars':
  //       this.status.spritesheet = 'components/player/asset/lars.png';
  //       break;
  //     case 'lenny':
  //       this.status.spritesheet = 'components/player/asset/lenny.png';
  //       break;
  //     case 'levi':
  //       this.status.spritesheet = 'components/player/asset/levi.png';
  //       break;
  //   }
  // }
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

class Controller {
  constructor(view, model) {
    this.view = view
    this.model = model

    this.view.image.src = this.model.status.spritesheet
    this.view.image.className = this.model.status.walk

    this.view.bindGetPlayerSrc(this.handleGetPlayerSrc)
  }

  handleGetPlayerSrc = src => this.model.getPlayerSrc(src);

}

const player = new Controller(new View(), new Model());