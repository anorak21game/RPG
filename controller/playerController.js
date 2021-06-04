import { PlayerView } from '../components/player/views/playerView.js';
import { PlayerModel } from '../components/player/model/playerModel.js';

class GameController {
    constructor(model, view) {
      this.model = model
      this.view = view
    }
}

const player = new GameController(new PlayerModel(), new PlayerView());