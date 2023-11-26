import { IPetalAttributes, SakuraGroup } from "./sakuraGroup";

export class Flare extends SakuraGroup{
  constructor(scene: Phaser.Scene){
    super({
      scene: scene,
      vector2d: {
        x: 0,
        y: 0
      },
      amount: 0
    })
  }

  protected MaxAmount(): number {
    return Infinity;
  }

  protected PetalsAttribute(): IPetalAttributes[] {
    return []
  }
}
