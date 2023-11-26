import Phaser from 'phaser'

import { Game } from './game';


const config = {
  type: Phaser.AUTO,
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
	scene: [Game],
};
export default new Phaser.Game(config)
