import { Command } from "@colyseus/command"
import { Client, Room } from "colyseus"
import { SakuraArms } from "../sakuraArms"

type Payload = {
	client: Client
	index: number
}

export default class PlayerSelectionCommand extends Command<SakuraArms, Payload>
{
  execute(data: Payload ) {
    console.log(data)
  }

}
