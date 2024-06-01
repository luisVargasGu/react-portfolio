import axios from "axios";
import { apiUrl } from "../../services/environment";

export const FETCH_ROOMS_REQUEST = 'FETCH_ROOMS_REQUEST';
export const FETCH_ROOMS_SUCCES = 'FETCH_ROOMS_SUCCESS';
export const FETCH_ROOMS_FAILURE = 'FETCH_ROOMS_FAILURE';
export const UPDATE_SELECTED_ROOM = 'UPDATE_SELECTED_ROOM';

export const fetchRoomsRequest = () => ({
    type: FETCH_ROOMS_REQUEST
});

export const fetchRoomsSuccess = (rooms) => ({
    type: FETCH_ROOMS_SUCCES,
    payload: rooms
});

export const fetchRoomsFailure = (error) => ({
    type: FETCH_ROOMS_FAILURE,
    payload: error
});

export const updateSelectedRoom = (roomId) => ({
    type: UPDATE_SELECTED_ROOM,
    payload: roomId
});

export const fetchRooms = (channelID) => {
    return async (dispatch) => {
        dispatch(fetchRoomsRequest());
        try {
            const response = await axios.get(apiUrl + `channels/${channelID}/rooms`, {
                withCredentials: true
            });
            const data = response.data;
            dispatch(fetchRoomsSuccess(data.rooms));
        } catch (error) {
            dispatch(fetchRoomsFailure(error.message));
        }
    };
};


