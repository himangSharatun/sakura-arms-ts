import { Distance } from "./sakura-group/distance";
import { Shadow } from "./sakura-group/shadow";
import { PlayerBoard } from "./board/board";

export class SakuraManager {
  public Distance: Distance;
  public Shadow: Shadow;

  constructor(scene: Phaser.Scene) {
    if (!this.Distance) {
      this.Distance = new Distance(scene)
    }
    if (!this.Shadow) {
      this.Shadow = new Shadow(scene)
    }
  }

  public Advance(playerBoard: PlayerBoard, amount: number) {
    if (this.Distance.Amount - amount < this.Distance.MasteryZone) {
      throw new Error("can not advance beyond mastery zone")
    }
    this.Distance.Move(playerBoard.Aura, amount)
  }

  public Retreat(playerBoard: PlayerBoard, amount: number) {
    playerBoard.Aura.Move(this.Distance, amount)
  }

  public RetreatUsingShadow() {
    if (!this.Distance.IsInMasteryZone()) {
      throw new Error("not in mastery zone")
    }
    this.Shadow.Move(this.Distance, 1)
  }

  public Recover(playerBoard: PlayerBoard, amount: number) {
    this.Shadow.Move(playerBoard.Aura, amount)
  }

  public UseFlare(playerBoard: PlayerBoard, amount: number) {
    playerBoard.Flare.Move(this.Shadow, amount)
  }

  public HitAura(playerBoard: PlayerBoard, amount: number) {
    playerBoard.Aura.Move(this.Shadow, amount)
  }

  public HitLife(playerBoard: PlayerBoard, amount: number) {
    playerBoard.Life.Move(playerBoard.Flare, amount)
  }

  public Focus(playerBoard: PlayerBoard, amount: number) {
    playerBoard.Aura.Move(playerBoard.Flare, amount)
  }
}
