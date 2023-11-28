import { BoardType } from "../board/board";
import { IPetalAttributes } from "../petal/petal";
import { PetalGroup } from "./petalGroup";

export class Flare extends PetalGroup{
  constructor(scene: Phaser.Scene, boardType: BoardType){
    super({
      scene: scene,
      vector2d: {
        x: 980,
        y: 375
      },
      amount: 0
    })
    if (boardType == BoardType.Opponent) {
      this.setPosition(357, 345)
      this.setRotation(Math.PI)
    }
  }

  protected MaxAmount(): number {
    return Infinity;
  }

  protected PetalsAttribute(): IPetalAttributes[] {
    return [
      {
        vector2D: { x: 0, y: 0 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -23, y: 0 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -46, y: 0 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -69, y: 0 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -92, y: 0 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      // second row
      {
        vector2D: { x: 0, y: 40 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -23, y: 40 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -46, y: 40 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -69, y: 40 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -92, y: 40 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      // third row
      {
        vector2D: { x: 0, y: 80 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -23, y: 80 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -46, y: 80 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -69, y: 80 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -92, y: 80 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      // first row, second floor
      {
        vector2D: { x: -12, y: 20 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -35, y: 20 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -58, y: 20 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -81, y: 20 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -102, y: 20 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      // second row, second floor
      {
        vector2D: { x: -12, y: 60 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -35, y: 60 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -58, y: 60 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -81, y: 60 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -102, y: 60 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      // third row, second floor
      {
        vector2D: { x: -12, y: 100 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -35, y: 100 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -58, y: 100 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -81, y: 100 },
        transformation: { scale: 0.18, rotation: 0  },
      },
      {
        vector2D: { x: -102, y: 100 },
        transformation: { scale: 0.18, rotation: 0  },
      },
    ]
  }
}
