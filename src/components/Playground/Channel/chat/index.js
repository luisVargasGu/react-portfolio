import './index.scss';
import React, { useEffect, useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { connectWebSocket, sendWebSocketMessage } from '../../../../services/chat';
import Message from './message';


const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState('');
	const userData = useAuthUser();

	useEffect(() => {
		const chat = connectWebSocket('channels/1/room/1/messages');

		chat.onmessage = ({ data }) => {
			const newMessage = JSON.parse(data);
			setMessages(prevMessages => [...prevMessages, newMessage]);
		};

		return () => {
			chat.close();
		};
	}, []);

	const sendMessage = (e) => {
		e.preventDefault();
		if (input.trim() === '') return;
		const newMessage = {
			id: messages.length + 1,
			text: input,
			sender: userData.userID,
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
