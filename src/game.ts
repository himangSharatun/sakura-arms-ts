import { Board, OpponentBoard, PlayerBoard } from "./board/board";
import { Distance } from "./sakura-group/distance";
import { Shadow } from "./sakura-group/shadow";

export class Game extends Phaser.Scene{
  private _playerBoard: Board;
  private _opponentBoard: Board;

  private _distance: Distance;
  private _shadow: Shadow;

  constructor() {
		super({'key': 'game'})
  }

  public get PlayerBoard(): Board {
    return this._playerBoard
  }

  public get OpponentBoard(): Board {
    return this._opponentBoard
  }

  preload() {
    this.load.image(Board.TextureKey(), Board.URL())
    this.load.image('sakura-petal', 'assets/Sakura.png')
	}

  create() {
    this._playerBoard = new PlayerBoard(this)
    this._opponentBoard = new OpponentBoard(this)
    this._distance = new Distance(this)
  }

  update(time: number, delta: number): void {
  }
}

new Game()
