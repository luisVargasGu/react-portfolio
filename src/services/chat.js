import { webSocketURL } from "./environment";

export const chat = new WebSocket(webSocketURL + 'chat');

chat.onmessage = ({ data }) => {
    console.log(data)
};
