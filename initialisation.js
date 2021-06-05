import { PlayerView } from '../components/player/class/view.js';
import { PlayerModel } from '../components/player/class/model.js';
import { PlayerController } from '../components/player/class/controller.js';

const player = new PlayerController(new PlayerView(), new PlayerModel());