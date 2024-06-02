import { webSocketURL } from "./environment";

let socket;

export const connectWebSocket = (target) => {
    socket = new WebSocket(webSocketURL + target);
    return socket;
};

export const disconnectWebSocket = () => {
    if (socket) {
        socket.close();
    }
    socket = null;
};

export const sendWebSocketMessage = (message) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(message));
    } else {
        console.error('WebSocket is not connected');
    }
};

