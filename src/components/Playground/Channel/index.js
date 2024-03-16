import './index.scss';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar';
import ChannelList from './channel-list';
import Chat from './chat';

const Channel = () => {
    const [channel, setChannel] = useState('');

    useEffect(() => {
        console.log('Channel: ', channel);
    }, [channel]);

    const handleSetChannel = (channel) => {
        setChannel(channel);
    };

    return (
        <div className='channel'>
            <div className='page'>
                <Sidebar />
                {
                    channel === '' ? (
                        <ChannelList setChannel={handleSetChannel} />
                    ) : (
                        <Chat />
                    )
                }
            </div>
        </div>
    );
}

export default Channel;
