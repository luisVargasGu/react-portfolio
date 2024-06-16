import axios from 'axios'
import { connectWebSocket, disconnectWebSocket } from '@services/chat'
import { apiUrl } from '@services/environment'
import {
  Message,
  FETCH_MESSAGES_FAILURE,
  FETCH_MESSAGES_SUCCESS,
  RECEIVE_MESSAGE,
  SWITCH_ROOM,
  SwitchRoomAction,
  ReceiveMessageAction,
  FetchMessagesSuccessAction,
  FetchMessagesFailureAction,
  ChatAction,
} from '@/types'
import { Dispatch } from 'react'

export const switchRoom = (roomId: string): SwitchRoomAction => ({
  type: SWITCH_ROOM,
  payload: roomId,
})

export const recieveMessage = (
  roomId: string,
  message: Message
): ReceiveMessageAction => ({
  type: RECEIVE_MESSAGE,
  payload: { roomId, message },
})

export const fetchMessagesSuccess = (
  roomId: string,
  messages: Message[]
): FetchMessagesSuccessAction => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload: { roomId, messages },
})

export const fetchMessageFailure = (
  error: string
): FetchMessagesFailureAction => ({
  type: FETCH_MESSAGES_FAILURE,
  payload: error,
})

export const switchRoomAndFetchMessages = (
  roomId: string,
  channelId: string
) => {
  return async (dispatch: Dispatch<ChatAction>) => {
    disconnectWebSocket()
    dispatch(switchRoom(roomId))

    try {
      const response = await axios.get(apiUrl + `rooms/${roomId}/messages`, {
        withCredentials: true,
      })
      const data = response.data
      dispatch(fetchMessagesSuccess(roomId, data.messages))

      const socket = connectWebSocket(
        `channels/${channelId}/room/${roomId}/messages`
      )
      socket.onmessage = (event) => {
        const message = JSON.parse(event.data)
        dispatch(recieveMessage(roomId, message))
      }
    } catch (error: any) {
      dispatch(fetchMessageFailure(error.message))
    }
  }
}

export const markMessageAsSeen = async (messageId: string) => {
  try {
    await axios.put(
      apiUrl + `messages/${messageId}/seen`,
      {},
      {
        withCredentials: true,
      }
    )
  } catch (error) {
    console.error(error)
  }
}
