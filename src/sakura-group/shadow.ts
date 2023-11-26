import { IPetalAttributes, SakuraGroup } from "./sakuraGroup";

export class Shadow extends SakuraGroup{
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
    return Infinity;
  }

  protected PetalsAttribute(): IPetalAttributes[] {
    return []
  }
}
