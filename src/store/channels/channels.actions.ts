import axios from "axios";
import { apiUrl } from "../../services/environment";
import { updateSelectedRoom } from "../rooms/rooms.actions";

export const FETCH_CHANNELS_REQUEST = 'FETCH_CHANNELS_REQUEST';
export const FETCH_CHANNELS_SUCCESS = 'FETCH_CHANNELS_SUCCESS';
export const FETCH_CHANNELS_FAILURE = 'FETCH_CHANNELS_FAILURE';

export const UPDATE_SELECTED_CHANNEL = 'UPDATE_SELECTED_CHANNEL';

export const CREATE_CHANNEL_REQUEST = 'CREATE_CHANNEL_REQUEST';
export const CREATE_CHANNEL_SUCCESS = 'CREATE_CHANNEL_SUCCESS';
export const CREATE_CHANNEL_FAILURE = 'CREATE_CHANNEL_FAILURE';

export const DELETE_CHANNEL_REQUEST = 'DELETE_CHANNEL_REQUEST';
export const DELETE_CHANNEL_SUCCESS = 'DELETE_CHANNEL_SUCCESS';
export const DELETE_CHANNEL_FAILURE = 'DELETE_CHANNEL_FAILURE';

export const fetchChannelsRequest = () => ({
    type: FETCH_CHANNELS_REQUEST
});

export const fetchChannelsSuccess = (channels) => ({
    type: FETCH_CHANNELS_SUCCESS,
    payload: channels
});

export const fetchChannelsFailure = (error) => ({
    type: FETCH_CHANNELS_FAILURE,
    payload: error
});

export const updateSelectedChannel = (channelId) => ({
    type: UPDATE_SELECTED_CHANNEL,
    payload: channelId
});

export const createChannelRequest = () => ({
    type: CREATE_CHANNEL_REQUEST
});

export const createChannelSuccess = (channel) => ({
    type: CREATE_CHANNEL_SUCCESS,
    payload: channel
});

export const createChannelFailure = (error) => ({
    type: CREATE_CHANNEL_FAILURE,
    payload: error
});

export const deleteChannelRequest = () => ({
    type: DELETE_CHANNEL_REQUEST
});

export const deleteChannelSuccess = (channelID) => ({
    type: DELETE_CHANNEL_SUCCESS,
    payload: channelID
});

export const deleteChannelFailure = (error) => ({
    type: DELETE_CHANNEL_FAILURE,
    payload: error
});

export const fetchChannels = () => {
    return async (dispatch) => {
        dispatch(fetchChannelsRequest());
        try {
            const response = await axios.get(apiUrl + 'channels', {
                withCredentials: true
            });
            const data = response.data;
            dispatch(fetchChannelsSuccess(data.channels));
        } catch (error) {
            dispatch(fetchChannelsFailure(error.message));
        }
    };
};

export const createChannel = (channel) => {
    return async (dispatch) => {
        dispatch(createChannelRequest());
        try {
            const response = await axios.post(apiUrl + 'channels', channel, {
                withCredentials: true,
            });
            const data = response.data;
            dispatch(createChannelSuccess(data));
        } catch (error) {
            dispatch(createChannelFailure(error.message));
        }
    };
};

export const deleteChannel = (channelId) => {
    return async (dispatch) => {
        dispatch(deleteChannelRequest());
        try {
            await axios.delete(apiUrl + `channels/${channelId}`, {
                withCredentials: true,
            });
            dispatch(deleteChannelSuccess(channelId));
            dispatch(updateSelectedChannel(null));
            dispatch(updateSelectedRoom(null));
        } catch (error) {
            dispatch(deleteChannelFailure(error.message));
        }
    };
};

