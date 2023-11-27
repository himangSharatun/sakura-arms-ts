import { Board, BoardType } from "../board/board";
import { IPetalAttributes } from "../petal/petal";
import { PetalGroup, PetalGroupType } from "./petalGroup";

export class Life extends PetalGroup{
  constructor(scene: Phaser.Scene){
    super({
      scene: scene,
      vector2d: {
        x: 910,
        y: 640
      },
      amount: 10
    })
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
        vector2D: { x: -14, y: -1 },
        transformation: { scale: 0.18, rotation: 1.15 }
      },
      {
        vector2D: { x: -47.5, y: 25 },
        transformation: { scale: 0.18, rotation: -2.5 }
      },
      {
        vector2D: { x: -21.5, y: 23 },
        transformation: { scale: 0.18, rotation: 2.4 }
      },
    ]
  }
}
