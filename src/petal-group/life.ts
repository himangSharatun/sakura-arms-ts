import { IPetalAttributes } from "./petal";
import { PetalGroup } from "./petalGroup";

export class Life extends PetalGroup{
  constructor(scene: Phaser.Scene){
    super({
      scene: scene,
      vector2d: {
        x: 0,
        y: 0
      },
      amount: 10
    })
  }

  protected MaxAmount(): number {
    return 10;
  }

  protected PetalsAttribute(): IPetalAttributes[] {
    return []
  }
}
