import { GameModel } from '../../../functions/gameModel.js';

export class PlayerModel extends GameModel {
  constructor() {
    super();

    this.status = {
      spritesheet: '',
      walk: 'player__stop--down'
    }
  }

  updateView() {
    
  }

  setValue(propertie, value) {
    this.status.propertie = value;
    updateView();

  }

  getValue(value) {

  }

  selectPlayer(expr) {
    switch (expr) {
      case 'lars':
        this.status.spritesheet = 'components/player/asset/lars.png';
        break;
      case 'lenny':
        this.status.spritesheet = 'components/player/asset/lenny.png';
        break;
      case 'levi':
        this.status.spritesheet = 'components/player/asset/levi.png';
        break;
    }
  }
}