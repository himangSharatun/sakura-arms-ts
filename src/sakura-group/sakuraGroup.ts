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

export abstract class SakuraGroup extends Phaser.GameObjects.Container{
  protected amount: number;

  constructor(params: ISakuraGroupConstructor) {
    super(params.scene, params.vector2d.x, params.vector2d.y)
    this.amount = params.amount
    this.GenerateSakura(0, this.Amount)
    this.scene.add.existing(this)
  }

  update(): void {
    let sakuraCount = this.list.length
    if (this.Amount < sakuraCount) {
      this.DestroySakura(this.Amount)
      return
    }

    if (this.Amount > sakuraCount) {
      this.GenerateSakura(sakuraCount-1, this.Amount)
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

  public Move(destination: SakuraGroup, amount: number): void {
    this.Decrease(amount)
    destination.Increase(amount)
  }

  public static TextureKey(): string {
    return 'sakura-petal'
  }

  private GenerateSakura(startIndex: number, endIndex: number) {
    this.PetalsAttribute().slice(startIndex, endIndex).forEach((attr)=>{
      let sakura = this.CreateSakuraImage(attr)
      this.add(sakura)
    })
  }

  private DestroySakura(startIndex: number) {
    this.list.forEach((sakura, index) => {
      if (index >= startIndex) {
        sakura.destroy()
      }
    })
  }

  private CreateSakuraImage(attr: IPetalAttributes): Phaser.GameObjects.Image {
    let sakura = new Phaser.GameObjects.Image(
      this.scene, attr.vector2D.x,
      attr.vector2D.y,
      SakuraGroup.TextureKey()
    )
    sakura.setScale(attr.transformation.scale)
    sakura.setRotation(attr.transformation.rotation)
    return sakura
  }

  protected abstract MaxAmount(): number;
  protected abstract PetalsAttribute(): IPetalAttributes[];
}
