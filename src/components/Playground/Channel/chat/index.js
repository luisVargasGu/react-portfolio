import './index.scss';
import React, { useEffect, useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { sendWebSocketMessage } from '../../../../services/chat';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { switchRoomAndFetchMessages } from '../../../../store/messages/messages.actions';

const Chat = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const userData = useAuthUser();
    const currentRoomId = useSelector(state => state.rooms.selectedRoomId);
    const currentChannelId = useSelector(state => state.channels.selectedChannelId);
    const messages = useSelector(state => state.messages.rooms[currentRoomId] || []);


    useEffect(() => {
        if (currentRoomId) {
            dispatch(switchRoomAndFetchMessages(currentRoomId, currentChannelId));
        }
    }, [currentRoomId, currentChannelId, dispatch]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;
        const newMessage = {
            id: messages.length + 1,
            content: input,
            sender_id: userData.userID,
            room_id: currentRoomId,
            timestamp: new Date().toISOString()
        }

        sendWebSocketMessage(newMessage);
        setInput('');
    }

    return (
        <div className='chat'>
            <h1>Chat</h1>
            <div className='chat-box'>
                {messages.map((message) => (
                    <Message message={message} key={message.id} />
                ))}
            </div>
            <div className='chat-input'>
                <form onSubmit={sendMessage}>
                    <input
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Type your message...'
                    />
                </form>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Chat;
