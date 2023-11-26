import { Coordinates, Transformation } from "@/utils/Vector2D/vector2d";

export interface ISakuraGroupConstructor {
  scene: Phaser.Scene,
  vector2d: Coordinates,
  amount: number
}

export interface IPetalAttributes {
  vector2D: Coordinates;
  transformation: Transformation
}

export abstract class SakuraGroup {
  protected amount: number;
  protected scene: Phaser.Scene;
  protected container: Phaser.GameObjects.Container;

  constructor(params: ISakuraGroupConstructor) {
    this.scene = params.scene
    this.amount = params.amount
    this.container = this.scene.add.container(params.vector2d.x, params.vector2d.y, this.GenerateSakuras())
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

  public static TextureKey(): string {
    return 'sakura-petal'
  }

  private GenerateSakuras(): Phaser.GameObjects.GameObject[] {
    return this.PetalsAttribute().slice(0, this.Amount).map((attr)=>{
      return this.scene.add.image(
        attr.vector2D.x, attr.vector2D.y,
        SakuraGroup.TextureKey()
      ).setScale(attr.transformation.scale)
      .setRotation(attr.transformation.rotation)
    })
  }

  protected abstract MaxAmount(): number;
  protected abstract PetalsAttribute(): IPetalAttributes[];
}
