import { IPetalAttributes, SakuraGroup } from "./sakuraGroup";

export class Aura extends SakuraGroup{
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
