import { IPetalAttributes } from "./petal";
import { PetalGroup } from "./petalGroup";

export class Aura extends PetalGroup{
  constructor(scene: Phaser.Scene){
    super({
      scene: scene,
      vector2d: {
        x: 0,
        y: 0
      },
      amount: 3
    })
  }

  protected MaxAmount(): number {
    return 5;
  }

  protected PetalsAttribute(): IPetalAttributes[] {
    return []
  }
}
