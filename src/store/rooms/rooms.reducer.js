import {
    FETCH_ROOMS_FAILURE,
    FETCH_ROOMS_REQUEST,
    FETCH_ROOMS_SUCCES,
    UPDATE_SELECTED_ROOM,
} from './rooms.actions'

const initialState = {
    rooms: [],
    selectedRoomId: null,
    loading: false,
    error: null,
}

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ROOMS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case FETCH_ROOMS_SUCCES:
            return {
                ...state,
                rooms: action.payload,
                loading: false,
                error: null,
            }
        case FETCH_ROOMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_SELECTED_ROOM:
            return {
                ...state,
                selectedRoomId: action.payload,
            }
        default:
            return state
    }
}

export default roomReducer
