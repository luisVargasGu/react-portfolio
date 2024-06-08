import axios from "axios";
import { apiUrl } from "../../services/environment";

export const FETCH_ROOMS_REQUEST = 'FETCH_ROOMS_REQUEST';
export const FETCH_ROOMS_SUCCES = 'FETCH_ROOMS_SUCCESS';
export const FETCH_ROOMS_FAILURE = 'FETCH_ROOMS_FAILURE';
export const UPDATE_SELECTED_ROOM = 'UPDATE_SELECTED_ROOM';

export const CREATE_ROOM_REQUEST = 'CREATE_ROOM_REQUEST';
export const CREATE_ROOM_SUCCESS = 'CREATE_ROOM_SUCCESS';
export const CREATE_ROOM_FAILURE = 'CREATE_ROOM_FAILURE';

export const DELETE_ROOM_REQUEST = 'DELETE_ROOM_REQUEST';
export const DELETE_ROOM_SUCCESS = 'DELETE_ROOM_SUCCESS';
export const DELETE_ROOM_FAILURE = 'DELETE_ROOM_FAILURE';

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

export const createRoomRequest = () => ({
    type: CREATE_ROOM_REQUEST
});

export const createRoomSuccess = (room) => ({
    type: CREATE_ROOM_SUCCESS,
    payload: room
});

export const createRoomFailure = (error) => ({
    type: CREATE_ROOM_FAILURE,
    payload: error
});

export const deleteRoomRequest = () => ({
    type: DELETE_ROOM_REQUEST
});

export const deleteRoomSuccess = (roomID) => ({
    type: DELETE_ROOM_SUCCESS,
    payload: roomID
});

export const deleteRoomFailure = (error) => ({
    type: DELETE_ROOM_FAILURE,
    payload: error
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

export const createRoom = (room) => {
    return async (dispatch) => {
        dispatch(createRoomRequest());
        try {
            const response = await axios.post(apiUrl + `rooms`, room, {
                withCredentials: true
            });
            const data = response.data;
            dispatch(createRoomSuccess(data.rooms));
        } catch (error) {
            dispatch(createRoomFailure(error.message));
        }
    };
};

export const deleteRoom = (roomID) => {
    return async (dispatch) => {
        dispatch(deleteRoomRequest());
        try {
            const response = await axios.delete(apiUrl + `rooms/${roomID}`, {
                withCredentials: true
            });
            const data = response.data;
            dispatch(deleteRoomSuccess(data.rooms));
        } catch (error) {
            dispatch(deleteRoomFailure(error.message));
        }
    };
}
