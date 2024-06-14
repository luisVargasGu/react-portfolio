import {
	FETCH_CHANNELS_REQUEST,
	FETCH_CHANNELS_SUCCESS,
	FETCH_CHANNELS_FAILURE,
	UPDATE_SELECTED_CHANNEL,
	CREATE_CHANNEL_REQUEST,
	CREATE_CHANNEL_SUCCESS,
	CREATE_CHANNEL_FAILURE,
	DELETE_CHANNEL_REQUEST,
	DELETE_CHANNEL_SUCCESS,
	DELETE_CHANNEL_FAILURE,
	ChannelActionTypes,
	Channel,
} from '@/types'

const initialState = {
	channels: [],
	selectedChannelId: null,
	loading: false,
	error: null,
}

const channelReducer = (state = initialState, action: ChannelActionTypes) => {
	switch (action.type) {
		case FETCH_CHANNELS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			}
		case FETCH_CHANNELS_SUCCESS:
			return {
				...state,
				channels: action.payload,
				loading: false,
				error: null,
			}
		case FETCH_CHANNELS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case UPDATE_SELECTED_CHANNEL:
			return {
				...state,
				selectedChannelId: action.payload,
			}
		case CREATE_CHANNEL_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			}
		case CREATE_CHANNEL_SUCCESS:
			return {
				...state,
				channels: [...state.channels, action.payload],
				loading: false,
				error: null,
			}
		case CREATE_CHANNEL_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case DELETE_CHANNEL_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			}
		case DELETE_CHANNEL_SUCCESS:
			return {
				...state,
				channels: state.channels.filter(
					(channel: Channel) => channel.id !== action.payload
				),
				loading: false,
				error: null,
			}
		case DELETE_CHANNEL_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}

export default channelReducer
