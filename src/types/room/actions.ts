import { Room } from '../componentTypes'
import {
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_FAILURE,
  UPDATE_SELECTED_ROOM,
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_FAILURE,
  DELETE_ROOM_REQUEST,
  DELETE_ROOM_SUCCESS,
  DELETE_ROOM_FAILURE,
  FETCH_ROOMS_SUCCESS,
} from './actionTypes'

export interface FetchRoomsRequestAction {
  type: typeof FETCH_ROOMS_REQUEST
  payload: null
}

export interface FetchRoomsSuccessAction {
  type: typeof FETCH_ROOMS_SUCCESS
  payload: Room[]
}

export interface FetchRoomsFailureAction {
  type: typeof FETCH_ROOMS_FAILURE
  payload: string
}

export interface UpdateSelectedRoomAction {
  type: typeof UPDATE_SELECTED_ROOM
  payload: string | null
}

export interface CreateRoomRequestAction {
  type: typeof CREATE_ROOM_REQUEST
  payload: null
}

export interface CreateRoomSuccessAction {
  type: typeof CREATE_ROOM_SUCCESS
  payload: Room
}

export interface CreateRoomFailureAction {
  type: typeof CREATE_ROOM_FAILURE
  payload: string
}

export interface DeleteRoomRequestAction {
  type: typeof DELETE_ROOM_REQUEST
  payload: null
}

export interface DeleteRoomSuccessAction {
  type: typeof DELETE_ROOM_SUCCESS
  payload: string
}

export interface DeleteRoomFailureAction {
  type: typeof DELETE_ROOM_FAILURE
  payload: string
}

export type RoomActionTypes =
  | FetchRoomsRequestAction
  | FetchRoomsSuccessAction
  | FetchRoomsFailureAction
  | UpdateSelectedRoomAction
  | CreateRoomRequestAction
  | CreateRoomSuccessAction
  | CreateRoomFailureAction
  | DeleteRoomRequestAction
  | DeleteRoomSuccessAction
  | DeleteRoomFailureAction
