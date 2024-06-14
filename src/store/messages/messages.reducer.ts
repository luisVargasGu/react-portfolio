import {
	SWITCH_ROOM,
	RECEIVE_MESSAGE,
	FETCH_MESSAGES_SUCCESS,
	FETCH_MESSAGES_FAILURE,
	ChatAction,
	MessageState,
} from '@/types'

const initialState: MessageState = {
	rooms: {},
	loading: false,
	error: null,
}

const messagesReducer = (
	state = initialState,
	action: ChatAction
): MessageState => {
	switch (action.type) {
		case SWITCH_ROOM:
			return {
				...state,
				loading: true,
				error: null,
			}

		case RECEIVE_MESSAGE:
			const { roomId, message } = action.payload
			return {
				...state,
				rooms: {
					...state.rooms,
					[roomId]: [...(state.rooms[roomId] || []), message],
				},
			}

		case FETCH_MESSAGES_SUCCESS:
			const { roomId: fetchRoomId, messages } = action.payload
			return {
				...state,
				rooms: {
					...state.rooms,
					[fetchRoomId]: messages,
				},
				loading: false,
				error: null,
			}

		case FETCH_MESSAGES_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}

		default:
			return state
	}
}

export default messagesReducer
