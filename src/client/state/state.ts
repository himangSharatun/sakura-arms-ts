import { BoardType } from "../board/board";
import { Aura } from "../petal-group/aura";
import { Distance } from "../petal-group/distance";
import { Flare } from "../petal-group/flare";
import { Life } from "../petal-group/life";
import { Shadow } from "../petal-group/shadow";

export class PlayerState {
  public Life: Life;
  public Aura: Aura;
  public Flare: Flare;
  public Vigor: number;
}

export class SakuraArmsState {
  public ActivePlayer: BoardType

  public Distance: Distance;
  public Shadow: Shadow;
  public PlayerState: PlayerState;
  public OpponentState: PlayerState;
}
