import { Coordinates } from "@/utils/Vector2D/vector2d";
import { IPetalAttributes, Petal } from "../petal/petal";

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
  protected amount: number;

  constructor(params: IPetalGroupConstructor) {
    super(params.scene, params.vector2d.x, params.vector2d.y)
    this.amount = params.amount
    this.GeneratePetals(0, this.Amount)

    this.scene.add.existing(this)
  }

  update(): void {
    let sakuraCount = this.list.length
    if (this.Amount < sakuraCount) {
      this.DestroyPetals(this.Amount)
      return
    }

    if (this.Amount > sakuraCount) {
      this.GeneratePetals(sakuraCount-1, this.Amount)
      return
    }
  }

  public get Amount(): number {
    return this.amount
  }

  public Increase(amount: number): void {
    if (this.Amount + amount > this.MaxAmount()) {
      throw new Error('invalid amount: exceeding max amount')
    }
    this.amount += amount
  }

  public Decrease(amount: number): void {
    if (this.Amount < amount) {
      throw new Error('invalid amount: existing amount is less than the amount')
    }
    this.amount -= amount
  }

  public Move(destination: PetalGroup, amount: number): void {
    this.Decrease(amount)
    destination.Increase(amount)
  }

  private GeneratePetals(startIndex: number, endIndex: number) {
    this.PetalsAttribute().slice(startIndex, endIndex).forEach((attr)=>{
      let sakura = new Petal(this, attr)
      this.add(sakura)
    })
  }

  private DestroyPetals(startIndex: number) {
    this.list.forEach((sakura, index) => {
      if (index >= startIndex) {
        sakura.destroy()
      }
    })
  }

  protected abstract MaxAmount(): number;
  protected abstract PetalsAttribute(): IPetalAttributes[];
}
