import { Schema } from '@colyseus/schema'
import { PlayerType } from './players';
import { PetalGroupType } from './petalGroup';


export enum GameState {
  WaitingForPlayer,
  ChoosingMegami,
  ConstructingDeck,
  Muligan,
  Playing,
}

export interface IPlayerBoardState {
  life: number;
  aura: number;
  flare: number;
  vigor: number;
}

export interface IPetalGroupState extends Schema {
  distance: number;
  shadow: number;
  playerBoards: Map<PlayerType, IPlayerBoardState>
}

export interface ISakuraArmsState extends Schema {
  activePlayer: number
  gameState: GameState

  petalGroupState: IPetalGroupState
}
