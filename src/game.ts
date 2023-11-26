import { SakuraManager } from "./sakuraManager";
import { Board, OpponentBoard, PlayerBoard, PlayerType } from "./board/board";

export class Game extends Phaser.Scene{
  private _playerBoard: Board;
  private _opponentBoard: Board;
  private _sakuraManager: SakuraManager;

  constructor() {
		super({'key': 'game'})

    this._sakuraManager = new SakuraManager(this);
  }

  public get PlayerBoard(): Board {
    return this._playerBoard
  }

  public get OpponentBoard(): Board {
    return this._opponentBoard
  }

  preload() {
    this.load.image(Board.TextureKey(), Board.URL())
	}

  create() {
    this._playerBoard = new PlayerBoard(this)
    this._opponentBoard = new OpponentBoard(this)
  }

  update(time: number, delta: number): void {

  }
}

new Game()
