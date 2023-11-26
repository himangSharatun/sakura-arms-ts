import { Distance } from "@/sakura-group/distance";
import { Board } from "./board/board";
import { Shadow } from "@/sakura-group/shadow";

export class SakuraManager {
  public static Advance(distance: Distance, playerBoard: Board, amount: number) {
    if (distance.Amount - amount < distance.MasteryZone) {
      throw new Error("can not advance beyond mastery zone")
    }
    distance.Move(playerBoard.Aura, amount)
  }

  public Retreat(distance: Distance,playerBoard: Board, amount: number) {
    playerBoard.Aura.Move(distance, amount)
  }

  public RetreatUsingShadow(distance: Distance, shadow: Shadow) {
    if (!distance.IsInMasteryZone()) {
      throw new Error("not in mastery zone")
    }
    shadow.Move(distance, 1)
  }

  public Recover(shadow: Shadow, playerBoard: Board, amount: number) {
    shadow.Move(playerBoard.Aura, amount)
  }

  public UseFlare(shadow: Shadow, playerBoard: Board, amount: number) {
    playerBoard.Flare.Move(shadow, amount)
  }

  public HitAura(shadow: Shadow, playerBoard: Board, amount: number) {
    playerBoard.Aura.Move(shadow, amount)
  }

  public HitLife(playerBoard: Board, amount: number) {
    playerBoard.Life.Move(playerBoard.Flare, amount)
  }

  public Focus(playerBoard: Board, amount: number) {
    playerBoard.Aura.Move(playerBoard.Flare, amount)
  }
}
