import { Room } from "./componentTypes";

export interface ChatState {
    rooms: {
        [key: string]: Room[];
    };
    error: string | null;
    loading: boolean;
}
