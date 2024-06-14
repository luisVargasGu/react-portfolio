import axios from 'axios'
import { apiUrl } from '@services/environment'
import {
	FETCH_ROOMS_REQUEST,
	FETCH_ROOMS_SUCCESS,
	FETCH_ROOMS_FAILURE,
	UPDATE_SELECTED_ROOM,
	CREATE_ROOM_REQUEST,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAILURE,
	DELETE_ROOM_REQUEST,
	DELETE_ROOM_SUCCESS,
	DELETE_ROOM_FAILURE,
	Room,
	FetchRoomsSuccessAction,
	FetchRoomsRequestAction,
	FetchRoomsFailureAction,
	UpdateSelectedRoomAction,
	CreateRoomRequestAction,
	CreateRoomSuccessAction,
	CreateRoomFailureAction,
	DeleteRoomRequestAction,
	DeleteRoomSuccessAction,
	DeleteRoomFailureAction,
	RoomActionTypes,
} from '@/types'
import { Dispatch } from 'react'

export const fetchRoomsRequest = (): FetchRoomsRequestAction => ({
	type: FETCH_ROOMS_REQUEST,
	payload: null,
})

export const fetchRoomsSuccess = (rooms: Room[]): FetchRoomsSuccessAction => ({
	type: FETCH_ROOMS_SUCCESS,
	payload: rooms,
})

export const fetchRoomsFailure = (error: string): FetchRoomsFailureAction => ({
	type: FETCH_ROOMS_FAILURE,
	payload: error,
})

export const updateSelectedRoom = (
	roomId: string | null
): UpdateSelectedRoomAction => ({
	type: UPDATE_SELECTED_ROOM,
	payload: roomId,
})

export const createRoomRequest = (): CreateRoomRequestAction => ({
	type: CREATE_ROOM_REQUEST,
	payload: null,
})

export const createRoomSuccess = (room: Room): CreateRoomSuccessAction => ({
	type: CREATE_ROOM_SUCCESS,
	payload: room,
})

export const createRoomFailure = (error: string): CreateRoomFailureAction => ({
	type: CREATE_ROOM_FAILURE,
	payload: error,
})

export const deleteRoomRequest = (): DeleteRoomRequestAction => ({
	type: DELETE_ROOM_REQUEST,
	payload: null,
})

export const deleteRoomSuccess = (roomID: string): DeleteRoomSuccessAction => ({
	type: DELETE_ROOM_SUCCESS,
	payload: roomID,
})

export const deleteRoomFailure = (error: string): DeleteRoomFailureAction => ({
	type: DELETE_ROOM_FAILURE,
	payload: error,
})

export const fetchRooms = (channelID: string) => {
	return async (dispatch: Dispatch<RoomActionTypes>) => {
		dispatch(fetchRoomsRequest())
		try {
			const response = await axios.get(apiUrl + `channels/${channelID}/rooms`, {
				withCredentials: true,
			})
			const data = response.data
			dispatch(fetchRoomsSuccess(data.rooms))
		} catch (error: any) {
			dispatch(fetchRoomsFailure(error.message))
		}
	}
}

export const createRoom = (room: Room) => {
	return async (dispatch: Dispatch<RoomActionTypes>) => {
		dispatch(createRoomRequest())
		try {
			const response = await axios.post(apiUrl + `rooms`, room, {
				withCredentials: true,
			})
			const data = response.data
			dispatch(createRoomSuccess(data))
		} catch (error: any) {
			dispatch(createRoomFailure(error.message))
		}
	}
}

export const deleteRoom = (roomID: string) => {
	return async (dispatch: Dispatch<RoomActionTypes>) => {
		dispatch(deleteRoomRequest())
		try {
			await axios.delete(apiUrl + `rooms/${roomID}`, {
				withCredentials: true,
			})
			dispatch(deleteRoomSuccess(roomID))
		} catch (error: any) {
			dispatch(deleteRoomFailure(error.message))
		}
	}
}
