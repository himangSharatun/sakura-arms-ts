import { BoardType } from "../board/board";
import { IPetalAttributes } from "../petal/petal";
import { PetalGroup } from "./petalGroup";

export class Aura extends PetalGroup{
  constructor(scene: Phaser.Scene, boardType: BoardType){
    super({
      scene: scene,
      vector2d: {
        x: 825,
        y: 535
      },
      amount: 3
    })
    

    if (boardType == BoardType.Opponent) {
      this.setPosition(510, 185)
      this.setRotation(Math.PI)
    }
    
    this.ConfigureDropZone(100,100)
  }

  protected MaxAmount(): number {
    return 5;
  }

  protected PetalsAttribute(): IPetalAttributes[] {
    return [
      {
        vector2D: { x: 5.5, y: -18 },
        transformation: { scale: 0.18, rotation: 0.25 }
      },
      {
        vector2D: { x: -17.5, y: -8.5 },
        transformation: { scale: 0.18, rotation: -1.05}
      },
      {
        vector2D: { x: 22.5, y: 0.5 },
        transformation: { scale: 0.18, rotation: 1.5}
      },
      {
        vector2D: { x: -15.5, y: 17 },
        transformation: { scale: 0.18, rotation: -2.3}
      },
      {
        vector2D: { x:9.5, y: 23 },
        transformation: { scale: 0.18, rotation: 2.75}
      },
    ]
  }
}
