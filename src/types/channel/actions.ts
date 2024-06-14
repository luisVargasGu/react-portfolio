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

export interface FetchChannelsRequestAction {
	type: typeof FETCH_CHANNELS_REQUEST
}

export interface FetchChannelsSuccessAction {
	type: typeof FETCH_CHANNELS_SUCCESS
	payload: Channel[]
}

export interface FetchChannelsFailureAction {
	type: typeof FETCH_CHANNELS_FAILURE
	payload: string
}

export interface UpdateSelectedChannelAction {
	type: typeof UPDATE_SELECTED_CHANNEL
	payload: string | null
}

export interface CreateChannelRequestAction {
	type: typeof CREATE_CHANNEL_REQUEST
}

export interface CreateChannelSuccessAction {
	type: typeof CREATE_CHANNEL_SUCCESS
	payload: Channel
}

export interface CreateChannelFailureAction {
	type: typeof CREATE_CHANNEL_FAILURE
	payload: string
}

export interface DeleteChannelRequestAction {
	type: typeof DELETE_CHANNEL_REQUEST
}

export interface DeleteChannelSuccessAction {
	type: typeof DELETE_CHANNEL_SUCCESS
	payload: string
}

export interface DeleteChannelFailureAction {
	type: typeof DELETE_CHANNEL_FAILURE
	payload: string
}

export type ChannelActionTypes =
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
