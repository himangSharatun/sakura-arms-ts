import { IPetalAttributes, PetalType } from "../petal/petal";
import { PetalGroup } from "./petalGroup";

export class Shadow extends PetalGroup {
  constructor(scene: Phaser.Scene){
    super({
      scene: scene,
      vector2d: {
        x: 665,
        y: 360
      },
      amount: 0,
    })
    this.ConfigureDropZone(300, 250)
  }

  protected MaxAmount(): number {
    return Infinity;
  }

  protected PetalsAttribute(): IPetalAttributes[] {
    return [
      // top left
      {
        vector2D: { x: -60, y: -15 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: -90, y: -15 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: -120, y: -15 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: -75, y: 15 },
        transformation: { scale: 0.18, rotation: Math.PI  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: -105, y: 15 },
        transformation: { scale: 0.18, rotation: Math.PI  },
        type: PetalType.Shadow
      },
      // bottom right
      {
        vector2D: { x: 70, y: -15 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: 100, y: -15 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: 130, y: -15 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: 85, y: 15 },
        transformation: { scale: 0.18, rotation: Math.PI  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: 115, y: 15 },
        transformation: { scale: 0.18, rotation: Math.PI  },
        type: PetalType.Shadow
      },
      // middle left
      {
        vector2D: { x: -60, y: 65 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: -90, y: 65 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: -120, y: 65 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: -75, y: 95 },
        transformation: { scale: 0.18, rotation: Math.PI  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: -105, y: 95 },
        transformation: { scale: 0.18, rotation: Math.PI  },
        type: PetalType.Shadow
      },
      // middle right
      {
        vector2D: { x: 70, y: -95 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: 100, y: -95 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: 130, y: -95 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: 85, y: -65 },
        transformation: { scale: 0.18, rotation: Math.PI  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: 115, y: -65 },
        transformation: { scale: 0.18, rotation: Math.PI  },
        type: PetalType.Shadow
      },
      // bottom left
      {
        vector2D: { x: -60, y: 145 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: -90, y: 145 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: -120, y: 145 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: -75, y: 175 },
        transformation: { scale: 0.18, rotation: Math.PI  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: -105, y: 175 },
        transformation: { scale: 0.18, rotation: Math.PI  },
        type: PetalType.Shadow
      },
      // top right
      {
        vector2D: { x: 70, y: -175 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: 100, y: -175 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: 130, y: -175 },
        transformation: { scale: 0.18, rotation: 0  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: 85, y: -145 },
        transformation: { scale: 0.18, rotation: Math.PI  },
        type: PetalType.Shadow
      },
      {
        vector2D: { x: 115, y: -145 },
        transformation: { scale: 0.18, rotation: Math.PI  },
        type: PetalType.Shadow
      },
    ]
  }
}
