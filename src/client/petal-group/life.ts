import { BoardType } from "../board/board";
import { IPetalAttributes } from "../petal/petal";
import { PetalGroup } from "./petalGroup";

export class Life extends PetalGroup{
  constructor(scene: Phaser.Scene, boardType: BoardType){
    super({
      scene: scene,
      vector2d: {
        x: 910,
        y: 640
      },
      amount: 10
    })

    if (boardType == BoardType.Opponent) {
      this.setPosition(425, 80)
      this.setRotation(Math.PI)
    }

    this.ConfigureDropZone(150,100)
  }

  protected MaxAmount(): number {
    return 10;
  }

  protected PetalsAttribute(): IPetalAttributes[] {
    return [
      {
        vector2D: { x: -37, y: -13 },
        transformation: { scale: 0.18, rotation: -0.1 }
      },
      {
        vector2D: { x: -57, y: 3 },
        transformation: { scale: 0.18, rotation: -1.31 }
      },
      {
        vector2D: { x: -15, y: -1 },
        transformation: { scale: 0.18, rotation: 1.2 }
      },
      {
        vector2D: { x: -47.5, y: 25 },
        transformation: { scale: 0.18, rotation: -2.5 }
      },
      {
        vector2D: { x: -21.5, y: 23 },
        transformation: { scale: 0.18, rotation: 2.4 }
      },
      {
        vector2D: { x: 32, y: -32 },
        transformation: { scale: 0.18, rotation: 0.2 }
      },
      {
        vector2D: { x: 9, y: -21 },
        transformation: { scale: 0.18, rotation: -1.1}
      },
      {
        vector2D: { x: 50, y: -14 },
        transformation: { scale: 0.18, rotation: 1.5}
      },
      {
        vector2D: { x: 13, y: 5 },
        transformation: { scale: 0.18, rotation: -2.4}
      },
      {
        vector2D: { x:38, y: 9 },
        transformation: { scale: 0.18, rotation: 2.6}
      },
    ]
  }
}
