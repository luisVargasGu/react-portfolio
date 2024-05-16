import {
    FETCH_CHANNELS_REQUEST,
    FETCH_CHANNELS_SUCCESS,
    FETCH_CHANNELS_FAILURE,
    UPDATE_SELECTED_CHANNEL
} from './channels.actions';

const initialState = {
    channels: [],
    selectedChannelId: null,
    loading: false,
    error: null
};

const channelReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHANNELS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_CHANNELS_SUCCESS:
            return {
                ...state,
                channels: action.payload,
                loading: false,
                error: null
            };
        case FETCH_CHANNELS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case UPDATE_SELECTED_CHANNEL:
            return {
                ...state,
                selectedChannelId: action.payload
            };
        default:
            return state;
    }
};

export default channelReducer;

