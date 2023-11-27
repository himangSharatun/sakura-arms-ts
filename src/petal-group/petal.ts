import { Coordinates, Transformation } from "@/utils/Vector2D/vector2d";

export enum PetalType {
  Sakura = "sakura-petal",
  Shadow = "shadow-petal"
}

export interface IPetalAttributes {
  vector2D: Coordinates;
  transformation: Transformation
  petalType?: PetalType;
}

export class Petal extends Phaser.GameObjects.Image {
  constructor(scene: Phaser.Scene, params: IPetalAttributes) {
    if (!params.petalType) {
      params.petalType = PetalType.Sakura
    }
    super(scene, params.vector2D.x, params.vector2D.y, params.petalType)
    this.setScale(params.transformation.scale)
    this.setRotation(params.transformation.rotation)
  }

  public static URL(type: PetalType): string {
    switch(type) {
      case PetalType.Sakura:
        return 'assets/Sakura.png'
      case PetalType.Shadow:
        return 'assets/Shadow.png'
    }
  }
}
