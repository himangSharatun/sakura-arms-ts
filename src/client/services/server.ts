import { SakuraArmsState } from "@/server/sakuraArmsState"
import { ISakuraArmsState } from "@/types/ISakuraArmsState"
import { Room } from "colyseus"
import { Client } from "colyseus.js"

export class Server
{
	private client: Client
	private events: Phaser.Events.EventEmitter

  private room?: Room<ISakuraArmsState>

  constructor()
	{
		this.client = new Client('ws://localhost:2567')
		this.events = new Phaser.Events.EventEmitter()
	}

	async join() {
  }
}
