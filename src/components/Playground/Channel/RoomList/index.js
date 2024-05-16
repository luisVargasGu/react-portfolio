import './index.scss';
import React from 'react';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RoomList = ({ setRoom }) => {

    return (
        <div className='select-room-box'>
            <div className='select-room'>
                <div className='select-room-list'>
                    <button className='select-room-item' onClick={() => setRoom(1)}>
                        <div className='select-room-item-icon'>
                            <FontAwesomeIcon icon={faComment} color="#fff" />
                        </div>
                        <div className='select-room-item-title'>
                            <h3>general</h3>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RoomList;

