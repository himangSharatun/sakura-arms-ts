import { SakuraGroup } from "./sakuraGroup";

export class Life extends SakuraGroup{
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
}
