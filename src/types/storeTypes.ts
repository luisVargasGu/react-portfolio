import { Channel, Message, Room } from './componentTypes'

export interface RootState {
	channels: ChannelState
	rooms: RoomState
	messages: MessageState
}

export interface ChannelState {
	channels: Channel[]
	selectedChannelId: string | null
	error: string | null
	loading: boolean
}

export interface MessageState {
	rooms: {
		[key: string]: Message[]
	}
	error: string | null
	loading: boolean
}

export interface RoomState {
	rooms: Room[]
	selectedRoomId: string | null
	error: string | null
	loading: boolean
}
