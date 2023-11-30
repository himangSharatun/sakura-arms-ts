import { Distance } from "@/petal-group/distance";
import { Board } from "./board/board";
import { Shadow } from "@/petal-group/shadow";
import { PetalGroup } from "./petal-group/petalGroup";

export class SakuraManager {
  public static Advance(distance: Distance, playerBoard: Board, amount: number) {
    if (distance.Amount - amount < distance.MasteryZone) {
      throw new Error("can not advance beyond mastery zone")
    }
    this.movePetals(distance, playerBoard.Aura, amount)
  }

  public static Retreat(distance: Distance,playerBoard: Board, amount: number) {
    this.movePetals(playerBoard.Aura, distance, amount)
  }

  public static RetreatUsingShadow(distance: Distance, shadow: Shadow) {
    if (!distance.IsInMasteryZone()) {
      throw new Error("not in mastery zone")
    }
    this.movePetals(shadow, distance, 1)
  }

  public static Recover(shadow: Shadow, playerBoard: Board, amount: number) {
    this.movePetals(shadow, playerBoard.Aura, amount)
  }

  public static UseFlare(shadow: Shadow, playerBoard: Board, amount: number) {
    this.movePetals(playerBoard.Flare, shadow, amount)
  }

  public static HitAura(shadow: Shadow, playerBoard: Board, amount: number) {
    this.movePetals(playerBoard.Aura, shadow, amount)
  }

  public static HitLife(playerBoard: Board, amount: number) {
    this.movePetals(playerBoard.Life, playerBoard.Flare, amount)
  }

  public static Focus(playerBoard: Board, amount: number) {
    this.movePetals(playerBoard.Aura, playerBoard.Flare, amount)
  }

  private static movePetals(source: PetalGroup, target: PetalGroup, amount?: number) {
    if (!amount) {
      amount = 1
    }
    const petals = source.GetPetals(amount)
    petals.forEach((petal) => {
      target.AddPetal(petal)
    })
  }
}
