import { Board, OpponentBoard, PlayerBoard } from "./board/board";
import { Distance } from "./petal-group/distance";
import { Petal, PetalType } from "./petal-group/petal";
import { PetalGroup } from "./petal-group/petalGroup";
import { Shadow } from "./petal-group/shadow";

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
    this.load.image(PetalType.Sakura, Petal.URL(PetalType.Sakura))
    this.load.image(PetalType.Shadow, Petal.URL(PetalType.Shadow))
	}

  create() {
    this._playerBoard = new PlayerBoard(this)
    this._opponentBoard = new OpponentBoard(this)
    this._distance = new Distance(this)
    this._shadow = new Shadow(this)
  }

  update(time: number, delta: number): void {
    this._distance.update()
  }
}

new Game()
