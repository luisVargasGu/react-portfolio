import axios from "axios";
import { connectWebSocket, disconnectWebSocket } from "@services/chat";
import { apiUrl } from "@services/environment";

export const SWITCH_ROOM = 'SWITCH_ROOM';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const switchRoom = (roomId) => ({
    type: SWITCH_ROOM,
    payload: roomId
});

export const recieveMessage = (roomId, message) => ({
    type: RECEIVE_MESSAGE,
    payload: { roomId, message }
});

export const fetchMessagesSuccess = (roomId, messages) => ({
    type: FETCH_MESSAGES_SUCCESS,
    payload: { roomId, messages }
});

export const fetchMessageFailure = (error) => ({
    type: FETCH_MESSAGES_FAILURE,
    payload: error
});

export const switchRoomAndFetchMessages = (roomId, channelId) => {
    return async (dispatch) => {
        disconnectWebSocket();
        dispatch(switchRoom(roomId));

        try {
            const response = await axios.get(apiUrl + `rooms/${roomId}/messages`, {
                withCredentials: true
            });
            const data = response.data;
            dispatch(fetchMessagesSuccess(roomId, data.messages));

            const socket =connectWebSocket(`channels/${channelId}/room/${roomId}/messages`);
            socket.onmessage = (event) => {
                const message = JSON.parse(event.data);
                dispatch(recieveMessage(roomId, message));
            };
        } catch (error) {
            dispatch(fetchMessageFailure(error.message));
        }

    };
};

export const markMessageAsSeen = async (messageId) => {
        try {
            await axios.put(apiUrl + `messages/${messageId}/seen`, {}, {
                withCredentials: true
            });
        } catch (error) {
            console.error(error);
        }
}
