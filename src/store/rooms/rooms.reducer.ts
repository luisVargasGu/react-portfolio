import {
	FETCH_ROOMS_REQUEST,
	FETCH_ROOMS_SUCCESS,
	FETCH_ROOMS_FAILURE,
	UPDATE_SELECTED_ROOM,
	CREATE_ROOM_REQUEST,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAILURE,
	DELETE_ROOM_REQUEST,
	DELETE_ROOM_SUCCESS,
	DELETE_ROOM_FAILURE,
	RoomActionTypes,
	RoomState,
} from '@/types'
import { disconnectWebSocket } from '@services/chat'

const initialState: RoomState = {
	rooms: [],
	selectedRoomId: null,
	loading: false,
	error: null,
}

const roomReducer = (
	state = initialState,
	action: RoomActionTypes
): RoomState => {
	switch (action.type) {
		case FETCH_ROOMS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			}
		case FETCH_ROOMS_SUCCESS:
			return {
				...state,
				rooms: action.payload,
				loading: false,
				error: null,
			}
		case FETCH_ROOMS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case UPDATE_SELECTED_ROOM:
			return {
				...state,
				selectedRoomId: action.payload,
			}
		case CREATE_ROOM_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			}
		case CREATE_ROOM_SUCCESS:
			return {
				...state,
				rooms: [...state.rooms, action.payload],
				loading: false,
				error: null,
			}
		case CREATE_ROOM_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case DELETE_ROOM_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			}
		case DELETE_ROOM_SUCCESS:
			const selectedRoomId =
				state.selectedRoomId === action.payload ? null : state.selectedRoomId
			if (selectedRoomId === null) {
				disconnectWebSocket()
			}
			return {
				...state,
				rooms: state.rooms.filter((room) => room.id !== action.payload),
				selectedRoomId,
				loading: false,
				error: null,
			}
		case DELETE_ROOM_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}

export default roomReducer
