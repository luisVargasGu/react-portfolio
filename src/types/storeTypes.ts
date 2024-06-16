import { store } from '@/store/store'
import { Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import { Channel, Message, Room } from './componentTypes'

export interface ChannelState {
  channels: Channel[]
  selectedChannelId: string | null
  error: string | null
  loading: boolean
}

export interface MessageState {
  rooms: {
    [key: string]: Message[]
  }
  error: string | null
  loading: boolean
}

export interface RoomState {
  rooms: Room[]
  selectedRoomId: string | null
  error: string | null
  loading: boolean
}

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
