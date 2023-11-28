import { BoardType } from "../board/board";
import { IPetalAttributes } from "../petal/petal";
import { PetalGroup } from "./petalGroup";

export class Aura extends PetalGroup{
  constructor(scene: Phaser.Scene, boardType: BoardType){
    super({
      scene: scene,
      vector2d: {
        x: 798.5,
        y: 549
      },
      amount: 3
    })

    if (boardType == BoardType.Opponent) {
      this.setPosition(536, 171)
      this.setRotation(Math.PI)
    }
  }

  protected MaxAmount(): number {
    return 5;
  }

  protected PetalsAttribute(): IPetalAttributes[] {
    return [
      {
        vector2D: { x: 32, y: -32 },
        transformation: { scale: 0.18, rotation: 0.25 }
      },
      {
        vector2D: { x: 9, y: -22.5 },
        transformation: { scale: 0.18, rotation: -1.05}
      },
      {
        vector2D: { x: 49, y: -13.5 },
        transformation: { scale: 0.18, rotation: 1.5}
      },
      {
        vector2D: { x: 11, y: 3 },
        transformation: { scale: 0.18, rotation: -2.3}
      },
      {
        vector2D: { x:36, y: 9 },
        transformation: { scale: 0.18, rotation: 2.75}
      },
    ]
  }
}
