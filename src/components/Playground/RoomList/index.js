import React from 'react';
import './index.scss';

const RoomList = ({ rooms }) => {
    return (
        <div className='room-list'>
            <ul>
                {rooms?.map(room => (
                    <li key={room.id} className='room-item'>
                        <div className='room-icon'>{room.icon}</div>
                        <span className='room-label'>{room.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomList;

