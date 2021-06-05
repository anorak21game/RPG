import { PlayerView } from './components/player/class/playerView.js';
import { PlayerModel } from './components/player/class/playerModel.js';
import { PlayerController } from './components/player/class/playerController.js';

const player = new PlayerController(new PlayerView(), new PlayerModel());