import { SakuraGroup } from "./sakuraGroup";

export class Distance extends SakuraGroup{
  private _masteryZone = 2;

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

  public get MasteryZone(): number {
    return this._masteryZone
  }

  public set MasteryZone(size: number) {
    this._masteryZone = size
  }

  public IsInMasteryZone(): boolean {
    return this.Amount <= this.MasteryZone
  }
}
