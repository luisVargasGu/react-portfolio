import './index.scss';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar';
import Chat from './chat';
import RoomList from './RoomList';

const Channel = () => {
    const [room, setRoom] = useState('');

    useEffect(() => {
        console.log('Channel: ', room);
    }, [room]);

    const handleSetRoom = (channel) => {
        setRoom(channel);
    };

    return (
        <div className='channel'>
            <div className='page'>
                <Sidebar />
                {
                    room === '' ? (
                        <RoomList setRoom={handleSetRoom} />
                    ) : (
                        <Chat />
                    )
                }
            </div>
        </div>
    );
}

export default Channel;
