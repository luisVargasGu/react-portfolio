import { Room } from "./componentTypes";

export interface ChatState {
        rooms: {
                [key: string]: Room[];
        };
        error: string | null;
        loading: boolean;
}

export interface RoomState {
        rooms: Room[]
        selectedRoomId: string | null
        error: string | null
        loading: boolean
}
