import { Aura } from "../petal-group/aura";
import { Flare } from "../petal-group/flare";
import { Life } from "../petal-group/life";
import { Coordinates, Transformation } from "@/utils/Vector2D/vector2d";
import Phaser from "phaser";

export enum BoardType {
  Opponent,
  Player
}

export interface IBoardConstructor {
  scene: Phaser.Scene;
  type: BoardType;
  coordinates: Coordinates;
  transformation: Transformation;
}

export class Board extends Phaser.GameObjects.Image{
  public Life: Life;
  public Aura: Aura;
  public Flare: Flare;

  private _type: BoardType;

  constructor(params: IBoardConstructor) {
    super(
      params.scene,
      params.coordinates.x,
      params.coordinates.y,
      Board.TextureKey()
    )
    this._type = params.type
    this.rotation = params.transformation.rotation
    this.scale = params.transformation.scale

    this.scene.add.existing(this)

    this.Life = new Life(this.scene, this.Type);
    this.Aura = new Aura(this.scene);
    this.Flare = new Flare(this.scene);
  }

  public static TextureKey(): string {
    return 'board'
  }

  public static URL():string {
    return 'assets/BoardJPN.png'
  }

  public get Type(): BoardType {
    return this._type
  }
}

export class PlayerBoard extends Board {
  constructor(scene: Phaser.Scene) {
    super({
      scene: scene,
      type: BoardType.Player,
      coordinates: {
        x: 750,
        y: 525,
      },
      transformation: {
        rotation: 0,
        scale: 0.25,
      }
    })
  }
}

export class OpponentBoard extends Board {
  constructor(scene: Phaser.Scene) {
    super({
      scene: scene,
      type: BoardType.Opponent,
      coordinates: {
        x: 585,
        y: 195,
      },
      transformation: {
        rotation: Math.PI,
        scale: 0.25,
      }
    })
  }
}
