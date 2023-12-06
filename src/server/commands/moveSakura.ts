import { Command } from "@colyseus/command"
import { SakuraArms } from "../sakuraArms"
import { IMovePetal, IPetalGroup } from "@/types/IMovePetal"
import { PetalGroupType } from "@/types/petalGroup"

export class MoveSakura extends Command<SakuraArms, IMovePetal>{
  execute(data: IMovePetal){
    this.Decrease(data.from, data.amount)
    this.Increase(data.to, data.amount)
  }

  private Increase(petalGroup: IPetalGroup, amount: number): void {
    let petalGroupState = this.room.state.petalGroupState
    switch (petalGroup.enum) {
      case PetalGroupType.Distance:
        petalGroupState.distance += amount
      case PetalGroupType.Shadow:
        petalGroupState.shadow += amount
      case PetalGroupType.Life:
        petalGroupState.playerBoards.get(petalGroup.owner)!.life += amount
      case PetalGroupType.Aura:
        petalGroupState.playerBoards.get(petalGroup.owner)!.aura += amount
      case PetalGroupType.Flare:
        petalGroupState.playerBoards.get(petalGroup.owner)!.flare += amount
    }
  }

  private Decrease(petalGroup: IPetalGroup, amount: number): void {
    let petalGroupState = this.room.state.petalGroupState
    switch (petalGroup.enum) {
      case PetalGroupType.Distance:
        petalGroupState.distance -= amount
      case PetalGroupType.Shadow:
        petalGroupState.shadow -= amount
      case PetalGroupType.Life:
        petalGroupState.playerBoards.get(petalGroup.owner)!.life -= amount
      case PetalGroupType.Aura:
        petalGroupState.playerBoards.get(petalGroup.owner)!.aura -= amount
      case PetalGroupType.Flare:
        petalGroupState.playerBoards.get(petalGroup.owner)!.flare -= amount
    }
  }
}
