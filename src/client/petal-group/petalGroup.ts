import { Coordinates } from "@/utils/Vector2D/vector2d";
import { IPetalAttributes, Petal, PetalType } from "../petal/petal";

export enum PetalGroupType {
  Distance,
  Shadow,
  Life,
  Aura,
  Flare,
}

export interface IPetalGroupConstructor {
  scene: Phaser.Scene;
  vector2d: Coordinates;
  amount: number;
}

export abstract class PetalGroup extends Phaser.GameObjects.Container{
  public petalsAttribute: IPetalAttributes[];

  constructor(params: IPetalGroupConstructor) {
    super(params.scene, params.vector2d.x, params.vector2d.y)
    this.petalsAttribute = this.PetalsAttribute()
    this.GeneratePetals(0, params.amount)

    this.scene.add.existing(this)
  }

  public AddPetal(petal: Petal) {
    const sourcePetalGroup = petal.Group
    if (this.Amount + 1 > this.MaxAmount()) {
      sourcePetalGroup.RefreshPetalPosition()
      throw new Error(`unable to add petal current amount: ${this.Amount} has reached max amount`)
    }
    super.add(petal)
    this.RefreshPetalPosition()
    sourcePetalGroup.RefreshPetalPosition()
  }

  public GetPetals(amount: number): Petal[] {
    return this.list.slice(this.Amount-amount,this.Amount) as Petal[]
  }

  public get Amount(): number {
    return this.list.length
  }

  private GeneratePetals(startIndex: number, endIndex: number) {
    this.petalsAttribute.slice(startIndex, endIndex).forEach((attr)=>{
      let sakura = new Petal(this.scene, attr)
      this.add(sakura)
    })
  }

  public RefreshPetalPosition(): void {
    this.list.forEach((sakura, index) => {
      if (sakura instanceof Petal) {
        let attr = this.petalsAttribute[index]
        sakura.SetAttributes(attr)
      }
    })
  }

  protected ConfigureDropZone(width: number, height: number, showBox?: boolean):void {
    this.setSize(width, height)
    this.setInteractive({dropZone: true})
    if (!showBox) {
      const graphics = this.scene.add.graphics()
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(this.x - this.input?.hitArea.width / 2, this.y - this.input?.hitArea.height / 2, this.input?.hitArea.width, this.input?.hitArea.height);
    }
  }

  protected abstract MaxAmount(): number;
  protected abstract PetalsAttribute(): IPetalAttributes[];
}
