import { Client, Room } from "colyseus";
import { SakuraArmsState } from "./sakuraArmsState";
import { Dispatcher } from '@colyseus/command'
import { MessageType } from "../types/messages";
import { GameState } from "../types/ISakuraArmsState";
import PlayerSelectionCommand from "./commands/playerSelection";


export class SakuraArms extends Room<SakuraArmsState> {
	private dispatcher = new Dispatcher(this)

  onCreate()
	{
		this.maxClients = 2
		this.setState(new SakuraArmsState())

    this.onMessage(MessageType.PlayerSelection, (client, message: { index: number }) => {
			this.dispatcher.dispatch(new PlayerSelectionCommand(), {
				client,
				index: message.index
			})
		})
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
