import { SakuraArmsState } from "@/server/sakuraArmsState"
import { ISakuraArmsState } from "@/types/ISakuraArmsState"
import { MessageType } from "../../types/messages"
import { Room, Client } from "colyseus.js"
import * as Colyseus from "colyseus.js";
import { SakuraArms } from "@/server/sakuraArms";

export class Server
{
	private client: Colyseus.Client
	private events: Phaser.Events.EventEmitter
	private _playerIndex = -1

  private room?: Room<SakuraArms>

  constructor()
	{
		this.client = new Client('ws://localhost:2567')
		this.events = new Phaser.Events.EventEmitter()
	}

	async join() {
    console.log("Joining......")
    this.room = await this.client.joinOrCreate<SakuraArms>('sakura-arms')
    console.log("Room Created......")

    this.room.onMessage(MessageType.PlayerIndex, (message: {playerIndex: number}) => {
      console.log(message.playerIndex)
      this._playerIndex = message.playerIndex
    })

    this.room.onStateChange.once(state => {
			this.events.emit('once-state-changed', state)
		})
  }
}
