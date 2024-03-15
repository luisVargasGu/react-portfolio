import './index.scss';
import React from 'react';
import Sidebar from '../../Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons';

const Channel = () => {
    return (
        <div className='channel'>
            <div className='page'>
                <Sidebar />
                <div className='select-channel-box'>
                    <div className='select-channel'>
                        <div className='select-channel-title'>
                            <h2>Select Channel to Join</h2>
                        </div>
                        <div className='select-channel-list'>
                            <div className='select-channel-item'>
                                <div className='select-channel-item-icon'>
                                    <FontAwesomeIcon icon={faComment} color="#fff" />
                                </div>
                                <div className='select-channel-item-title'>
                                    <h3>General</h3>
                                </div>
                            </div>
                            <div className='select-channel-item'>
                                <div className='select-channel-item-icon'>
                                    <FontAwesomeIcon icon={faPhone} color="#fff" />
                                </div>
                                <div className='select-channel-item-title'>
                                    <h3>Voice</h3>
                                </div>
                            </div>
                            <div className='select-channel-item'>
                                <div className='select-channel-item-icon'>
                                    <FontAwesomeIcon icon={faVideo} color="#fff" />
                                </div>
                                <div className='select-channel-item-title'>
                                    <h3>Video</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Channel;
