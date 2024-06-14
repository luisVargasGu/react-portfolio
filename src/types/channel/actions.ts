import { Channel } from '@/types'
import {
	CREATE_CHANNEL_FAILURE,
	CREATE_CHANNEL_REQUEST,
	CREATE_CHANNEL_SUCCESS,
	DELETE_CHANNEL_FAILURE,
	DELETE_CHANNEL_REQUEST,
	DELETE_CHANNEL_SUCCESS,
	FETCH_CHANNELS_FAILURE,
	FETCH_CHANNELS_REQUEST,
	FETCH_CHANNELS_SUCCESS,
	UPDATE_SELECTED_CHANNEL,
} from './actionTypes'

interface FetchChannelsRequestAction {
	type: typeof FETCH_CHANNELS_REQUEST
}

interface FetchChannelsSuccessAction {
	type: typeof FETCH_CHANNELS_SUCCESS
	payload: Channel[]
}

interface FetchChannelsFailureAction {
	type: typeof FETCH_CHANNELS_FAILURE
	payload: string
}

interface UpdateSelectedChannelAction {
	type: typeof UPDATE_SELECTED_CHANNEL
	payload: string | null
}

interface CreateChannelRequestAction {
	type: typeof CREATE_CHANNEL_REQUEST
}

interface CreateChannelSuccessAction {
	type: typeof CREATE_CHANNEL_SUCCESS
	payload: Channel
}

interface CreateChannelFailureAction {
	type: typeof CREATE_CHANNEL_FAILURE
	payload: string
}

interface DeleteChannelRequestAction {
	type: typeof DELETE_CHANNEL_REQUEST
}

interface DeleteChannelSuccessAction {
	type: typeof DELETE_CHANNEL_SUCCESS
	payload: string
}

interface DeleteChannelFailureAction {
	type: typeof DELETE_CHANNEL_FAILURE
	payload: string
}

type ChannelActionTypes =
	| FetchChannelsRequestAction
	| FetchChannelsSuccessAction
	| FetchChannelsFailureAction
	| UpdateSelectedChannelAction
	| CreateChannelRequestAction
	| CreateChannelSuccessAction
	| CreateChannelFailureAction
	| DeleteChannelRequestAction
	| DeleteChannelSuccessAction
	| DeleteChannelFailureAction
