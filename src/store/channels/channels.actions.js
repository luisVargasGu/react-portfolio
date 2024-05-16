import axios from "axios";
import { apiUrl } from "../../services/environment";

export const FETCH_CHANNELS_REQUEST = 'FETCH_CHANNELS_REQUEST';
export const FETCH_CHANNELS_SUCCESS = 'FETCH_CHANNELS_SUCCESS';
export const FETCH_CHANNELS_FAILURE = 'FETCH_CHANNELS_FAILURE';
export const UPDATE_SELECTED_CHANNEL = 'UPDATE_SELECTED_CHANNEL';

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

