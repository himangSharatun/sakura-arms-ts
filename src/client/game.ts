import { Board, OpponentBoard, PlayerBoard } from "./board/board";
import { Distance } from "./petal-group/distance";
import { Petal, PetalType } from "./petal/petal";
import { PetalGroup } from "./petal-group/petalGroup";
import { Shadow } from "./petal-group/shadow";
import { PetalGroupType } from "@/types/petalGroup";
import { PlayerType } from "@/types/players";

export class Game extends Phaser.Scene{
  private _boards: Map<PlayerType, Board>;

  private _distance: Distance;
  private _shadow: Shadow;

  constructor() {
		super({'key': 'game'})
  }

  public getPlayerBoard(playerType: PlayerType): Board {
    return this._boards.get(playerType)!
  }

  preload() {
    this.load.image(Board.TextureKey(), Board.URL())
    this.load.image(PetalType.Sakura, Petal.URL(PetalType.Sakura))
    this.load.image(PetalType.Shadow, Petal.URL(PetalType.Shadow))
	}

  create() {
    this.input.on('drag', this.handleDrag)

    this._boards.set( PlayerType.First, new PlayerBoard(this))
    this._boards.set( PlayerType.Second, new PlayerBoard(this))
    this._shadow = new Shadow(this)
    this._distance = new Distance(this)
  }

  update(time: number, delta: number): void {
  }

  private handleDrag(pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.Image, dragX: number, dragY: number) {
    gameObject.x = dragX
    gameObject.y = dragY
  }

  private getPetalGroup(petalGroup: PetalGroupType, owner?: PlayerType): PetalGroup {
    let isOwnerParamNeeeded: boolean = [PetalGroupType.Life, PetalGroupType.Aura, PetalGroupType.Flare].includes(petalGroup)
    if (isOwnerParamNeeeded && !owner) {
      throw new Error("owner is missing")
    }

    switch (petalGroup) {
      case PetalGroupType.Distance:
        return this._distance
      case PetalGroupType.Shadow:
        return this._shadow
      case PetalGroupType.Life:
        return this.getPlayerBoard(owner!).Life
      case PetalGroupType.Aura:
        return this.getPlayerBoard(owner!).Aura
      case PetalGroupType.Flare:
        return this.getPlayerBoard(owner!).Flare
    }
  }
}

new Game()
