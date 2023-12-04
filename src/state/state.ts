import { BoardType } from "@/client/board/board";


export enum GameState {
  WaitingForPlayer,
  ChoosingMegami,
  ConstructingDeck,
  Muligan,
  WaitingForOpponentDecision,
}

export class PlayerState {
  public Life: number;
  public Aura: number;
  public Flare: number;
  public Vigor: number;
}

export class SakuraArmsState {
  public ActivePlayer: BoardType
  public GameState: number

  public Distance: number;
  public Shadow: number;
  public PlayerState: PlayerState;
  public OpponentState: PlayerState;
}
