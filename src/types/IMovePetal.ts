import { PetalGroupType } from "./petalGroup"
import { PlayerType } from "./players"

export interface IMovePetal {
  from: IPetalGroup
  to: IPetalGroup
  amount: number
}

export interface IPetalGroup {
  enum: PetalGroupType
  owner: PlayerType
}
