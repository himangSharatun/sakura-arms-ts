import { Client, Room } from "colyseus";
import { SakuraArmsState } from "./sakuraArmsState";
import { Dispatcher } from '@colyseus/command'
import { MessageType } from "../types/messages";
import { GameState } from "../types/ISakuraArmsState";


export class SakuraArms extends Room<SakuraArmsState> {
	private dispatcher = new Dispatcher(this)

  onCreate()
	{
		this.maxClients = 2
		this.setState(new SakuraArmsState())
	}

	onJoin(client: Client)
	{
		console.log(this.clients.length)
		const idx = this.clients.findIndex(c => c.sessionId === client.sessionId)
		console.log(idx)
		client.send(MessageType.PlayerIndex, { playerIndex: idx })

		if (this.clients.length >= 2)
		{
			this.state.gameState = GameState.Playing
			this.lock()
		}
	}
}
