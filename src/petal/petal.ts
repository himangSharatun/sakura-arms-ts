import { PetalGroup } from "@/petal-group/petalGroup";
import { Coordinates, Transformation } from "@/utils/Vector2D/vector2d";

export enum PetalType {
  Sakura = "sakura-petal",
  Shadow = "shadow-petal"
}

export interface IPetalAttributes {
  vector2D: Coordinates;
  transformation: Transformation
  type?: PetalType;
}

export class Petal extends Phaser.GameObjects.Image {
  private _petalGroup: PetalGroup;

  constructor(petalGroup: PetalGroup, params: IPetalAttributes) {
    if (!params.type) {
      params.type = PetalType.Sakura
    }
    super(petalGroup.scene, params.vector2D.x, params.vector2D.y, params.type)
    this.setScale(params.transformation.scale)
      .setRotation(params.transformation.rotation)
    this._petalGroup = petalGroup
  }

  public static URL(type: PetalType): string {
    switch(type) {
      case PetalType.Sakura:
        return 'assets/Sakura.png'
      case PetalType.Shadow:
        return 'assets/Shadow.png'
    }
  }

  public get PetalGroup(): PetalGroup {
    return this._petalGroup
  }
}
