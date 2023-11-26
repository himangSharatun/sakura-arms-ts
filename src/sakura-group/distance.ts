import { Coordinates, Transformation } from "@/utils/Vector2D/vector2d";
import { IPetalAttributes, SakuraGroup } from "./sakuraGroup";


export class Distance extends SakuraGroup{
  private _masteryZone = 2;

  constructor(scene: Phaser.Scene){
    super({
      scene: scene,
      vector2d: {
        x: 665,
        y: 360
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

  protected PetalsAttribute(): IPetalAttributes[] {
    return [
      {
        vector2D: { x: 13, y: -26 },
        transformation: { scale: 0.18, rotation: 1.9 }
      },
      {
        vector2D: { x: -10, y: 26 },
        transformation: { scale: 0.18, rotation: -1.3 }
      },
      {
        vector2D: { x: -4,y: -73 },
        transformation: { scale: 0.18,rotation: -1.9 }
      },
      {
        vector2D: { x: 9, y: 73 },
        transformation: { scale: 0.18, rotation: 1.3 }
      },
      {
        vector2D: { x: 8,y: -120 },
        transformation: { scale: 0.18,rotation: 1.7 }
      },
      {
        vector2D: { x: -4, y: 120 },
        transformation: { scale: 0.18, rotation: -1.4 }
      },
      {
        vector2D: { x: 0,y: -168 },
        transformation: { scale: 0.18,rotation: -1.75 }
      },
      {
        vector2D: { x: 4,y: 168 },
        transformation: { scale: 0.18,rotation: 1.4 }
      },
      {
        vector2D: { x: 5,y: -215 },
        transformation: { scale: 0.18,rotation: 1.75 }
      },
      {
        vector2D: { x: 0,y: 215 },
        transformation: { scale: 0.18,rotation: -1.4 }
      },
    ]
  }
}
