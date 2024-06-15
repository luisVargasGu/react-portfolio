import axios from 'axios'
import { apiUrl } from '@services/environment'
import {
    AppThunk,
	Channel,
	ChannelActionTypes,
	CreateChannelFailureAction,
	CreateChannelRequestAction,
	CreateChannelSuccessAction,
	DeleteChannelFailureAction,
	DeleteChannelRequestAction,
	DeleteChannelSuccessAction,
	FetchChannelsFailureAction,
	FetchChannelsRequestAction,
	FetchChannelsSuccessAction,
	UpdateSelectedChannelAction,
} from '@/types'
import { Dispatch } from 'react'
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
} from '@/types'

export const fetchChannelsRequest = (): FetchChannelsRequestAction => ({
	type: FETCH_CHANNELS_REQUEST,
	payload: null,
})

export const fetchChannelsSuccess = (
	channels: Channel[]
): FetchChannelsSuccessAction => ({
	type: FETCH_CHANNELS_SUCCESS,
	payload: channels,
})

export const fetchChannelsFailure = (
	error: string
): FetchChannelsFailureAction => ({
	type: FETCH_CHANNELS_FAILURE,
	payload: error,
})

export const updateSelectedChannel = (
	channelId: string | null
): UpdateSelectedChannelAction => ({
	type: UPDATE_SELECTED_CHANNEL,
	payload: channelId,
})

export const createChannelRequest = (): CreateChannelRequestAction => ({
	type: CREATE_CHANNEL_REQUEST,
	payload: null,
})

export const createChannelSuccess = (
	channel: Channel
): CreateChannelSuccessAction => ({
	type: CREATE_CHANNEL_SUCCESS,
	payload: channel,
})

export const createChannelFailure = (
	error: string
): CreateChannelFailureAction => ({
	type: CREATE_CHANNEL_FAILURE,
	payload: error,
})

export const deleteChannelRequest = (): DeleteChannelRequestAction => ({
	type: DELETE_CHANNEL_REQUEST,
	payload: null,
})

export const deleteChannelSuccess = (
	channelID: string
): DeleteChannelSuccessAction => ({
	type: DELETE_CHANNEL_SUCCESS,
	payload: channelID,
})

export const deleteChannelFailure = (
	error: string
): DeleteChannelFailureAction => ({
	type: DELETE_CHANNEL_FAILURE,
	payload: error,
})

export const fetchChannels = (): AppThunk => {
	return async (dispatch: Dispatch<ChannelActionTypes>) => {
		dispatch(fetchChannelsRequest())
		try {
			const response = await axios.get(apiUrl + 'channels', {
				withCredentials: true,
			})
			const data = response.data
			dispatch(fetchChannelsSuccess(data.channels))
		} catch (error: any) {
			dispatch(fetchChannelsFailure(error.message))
		}
	}
}

export const createChannel = (channel: Channel): AppThunk => {
	return async (dispatch: Dispatch<ChannelActionTypes>) => {
		dispatch(createChannelRequest())
		try {
			const response = await axios.post(apiUrl + 'channels', channel, {
				withCredentials: true,
			})
			const data = response.data
			dispatch(createChannelSuccess(data))
		} catch (error: any) {
			dispatch(createChannelFailure(error.message))
		}
	}
}

export const deleteChannel = (channelId: string): AppThunk => {
	return async (dispatch: Dispatch<ChannelActionTypes>) => {
		dispatch(deleteChannelRequest())
		try {
			await axios.delete(apiUrl + `channels/${channelId}`, {
				withCredentials: true,
			})
			dispatch(deleteChannelSuccess(channelId))
			dispatch(updateSelectedChannel(null))
		} catch (error: any) {
			dispatch(deleteChannelFailure(error.message))
		}
	}
}
