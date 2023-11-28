import { PetalGroup } from "../petal-group/petalGroup";
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
  constructor(scene: Phaser.Scene, params: IPetalAttributes) {
    super(scene, 0, 0, "")
    this.SetAttributes(params)
    this.ConfigureDraggable()
  }

  public SetAttributes(attr: IPetalAttributes): Petal {
    if (!attr.type) {
      attr.type = PetalType.Sakura
    }
    return this.setPosition(attr.vector2D.x, attr.vector2D.y)
      .setRotation(attr.transformation.rotation)
      .setScale(attr.transformation.scale)
      .setTexture(attr.type)
  }

  private ConfigureDraggable(): void {
    this.scene.input.setDraggable(this.setInteractive())
    this.on('drop', this.handleDrop)
    this.on('dragend', this.handleDragEnd)
  }

  public static URL(type: PetalType): string {
    switch(type) {
      case PetalType.Sakura:
        return 'assets/Sakura.png'
      case PetalType.Shadow:
        return 'assets/Shadow.png'
    }
  }

  public get Group(): PetalGroup {
    return this.parentContainer as PetalGroup
  }

  private handleDrop(pointer: Phaser.Input.Pointer, target: PetalGroup) {
    try{
      target.AddPetal(this)
    } catch(err){
      alert(err)
    }
  }

  private handleDragEnd(pointer: Phaser.Input.Pointer, target: Phaser.GameObjects.GameObject) {
    if (target instanceof PetalGroup) {
      return
    }
    this.Group.RefreshPetalPosition()
  }
}
