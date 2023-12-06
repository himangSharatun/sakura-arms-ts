import { GameState, IPetalGroupState, IPlayerBoardState, ISakuraArmsState } from '../types/ISakuraArmsState';
import { PlayerType } from '../types/players';
import { Schema } from '@colyseus/schema'

export class SakuraArmsState extends Schema implements ISakuraArmsState {
  activePlayer: number = 0;
  gameState: GameState = GameState.WaitingForPlayer;
  petalGroupState: IPetalGroupState = new PetalGroupState();
}

export class PetalGroupState extends Schema implements IPetalGroupState {
  distance: number = 10;
  shadow: number = 0;
  playerBoards: Map<PlayerType, IPlayerBoardState>;

  constructor() {
    super()

    this.playerBoards.set(PlayerType.First, new PlayerBoardState())
    this.playerBoards.set(PlayerType.Second, new PlayerBoardState())
  }
}


export class PlayerBoardState implements IPlayerBoardState {
  life: number = 10;
  aura: number = 3;
  flare: number = 0;
  vigor: number = 0;
}
