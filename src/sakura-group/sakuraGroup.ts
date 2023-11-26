import { Coordinates } from "@/utils/Vector2D/vector2d";

export interface ISakuraGroupConstructor {
  scene: Phaser.Scene,
  vector2d: Coordinates,
  amount: number
}

export abstract class SakuraGroup extends Phaser.GameObjects.Group{
  protected amount: number;

  constructor(params: ISakuraGroupConstructor) {
    super(
      params.scene,
    )
    this.amount = params.amount
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

  public Move(destination: SakuraGroup, amount: number): void {
    this.Decrease(amount)
    destination.Increase(amount)
  }

  protected abstract MaxAmount(): number;
  protected Vextor2Ds(): Coordinates[] {
    return []
  }
}
