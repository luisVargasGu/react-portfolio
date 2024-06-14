import { Message } from '../componentTypes'
import {
	SWITCH_ROOM,
	RECEIVE_MESSAGE,
	FETCH_MESSAGES_SUCCESS,
	FETCH_MESSAGES_FAILURE,
} from './actionTypes'

export interface SwitchRoomAction {
	type: typeof SWITCH_ROOM
	payload: string
}

export interface ReceiveMessageAction {
	type: typeof RECEIVE_MESSAGE
	payload: {
		roomId: string
		message: Message
	}
}

export interface FetchMessagesSuccessAction {
	type: typeof FETCH_MESSAGES_SUCCESS
	payload: {
		roomId: string
		messages: Message[]
	}
}

export interface FetchMessagesFailureAction {
	type: typeof FETCH_MESSAGES_FAILURE
	payload: string
}

export type ChatAction =
	| SwitchRoomAction
	| ReceiveMessageAction
	| FetchMessagesSuccessAction
	| FetchMessagesFailureAction
