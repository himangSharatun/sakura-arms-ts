import Phaser from 'phaser'

import { Game } from './game';


const config = {
  type: Phaser.AUTO,
  width: 2000,
  height: 1500,
	scene: [Game],
};
export default new Phaser.Game(config)
