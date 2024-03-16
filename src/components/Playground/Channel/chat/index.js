import './index.scss';
import React, { useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';


const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const userData = useAuthUser();

    const sendMessage = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;
        const newMessage = {
            id: messages.length + 1,
            text: input,
            sender: userData.userID,
            timestamp: new Date().toISOString()
        }

        setMessages([...messages, newMessage]);

        setInput('');
    }

    return (
        <div className='chat'>
            <h1>Chat</h1>
            <div className='chat-box'>
                {messages.map((message) => (
                    <div key={message.id}>
                        <p>{message.sender}: {message.text}</p>
                        <span>{message.timestamp}</span>
                    </div>
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
