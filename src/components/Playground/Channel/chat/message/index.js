import './index.scss';
import React, { useEffect, useState } from 'react';

const Message = ({ message }) => {
    const [timeDifference, setTimeDifference] = useState(getTimeDifference());


    function getTimeDifference() {
        const currentTime = new Date();
        const messageTime = new Date(message.timestamp);
        const difference = Math.floor((currentTime - messageTime) / (1000 * 60));
        return difference === 0 ? "Just now" : `${difference} min${difference > 1 ? 's' : ''} ago`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeDifference(getTimeDifference());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='message-box' key={message.id}>
            <div className="sender-circle">{message.sender}</div>
            <div className='message-content'>
                <p>{message.text}</p>
                <span>{timeDifference}</span>
            </div>
        </div>
    )
};

export default Message;
