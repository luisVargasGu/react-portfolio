import './index.scss';
import React from 'react';
import { faComment, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChannelList = ({ setChannel }) => {

    return (
        <div className='select-channel-box'>
            <div className='select-channel'>
                <div className='select-channel-title'>
                    <h2>Select Channel to Join</h2>
                </div>
                <div className='select-channel-list'>
                    <button className='select-channel-item' onClick={() => setChannel(1)}>
                        <div className='select-channel-item-icon'>
                            <FontAwesomeIcon icon={faComment} color="#fff" />
                        </div>
                        <div className='select-channel-item-title'>
                            <h3>General</h3>
                        </div>
                    </button>
                    <button className='select-channel-item' disabled>
                        <div className='select-channel-item-icon'>
                            <FontAwesomeIcon icon={faPhone} color="#fff" />
                        </div>
                        <div className='select-channel-item-title'>
                            <h3>Voice</h3>
                        </div>
                    </button>
                    <button className='select-channel-item' disabled>
                        <div className='select-channel-item-icon'>
                            <FontAwesomeIcon icon={faVideo} color="#fff" />
                        </div>
                        <div className='select-channel-item-title'>
                            <h3>Video</h3>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChannelList;
