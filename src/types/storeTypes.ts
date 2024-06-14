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
} from '@/store/channels/channels.actions'
import { Channel } from './componentTypes'
import { Product, User } from './moduleTypes'

export interface RootState {
	user: UserState
	products: ProductState
}

export interface UserState {
	currentUser: User | null
	isLoading: boolean
	error: string | null
}

export interface ProductState {
	items: Product[]
	isLoading: boolean
	error: string | null
}

export interface FetchChannelsRequestAction {
	type: typeof FETCH_CHANNELS_REQUEST
	payload: null
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
	payload: null
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
	payload: null
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
