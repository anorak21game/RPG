import { GameModel } from '../../../functions/gameModel.js';

export class PlayerModel extends GameModel {
  constructor() {
    super();

    this.spritesheet = "components/player/asset/lars.png";
    this.walk = "player__stop--down";
  }
}