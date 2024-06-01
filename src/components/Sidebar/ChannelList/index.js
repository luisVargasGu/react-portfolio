import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateSelectedChannel, fetchChannels } from '../../../store/channels/channels.actions';

const ChannelList = ({ channels, fetchChannels }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchChannels();
    }, [fetchChannels]);

    const handleChannelClick = (channelId) => {
        dispatch(updateSelectedChannel(channelId));
    }

    return (
        <nav>
            {channels?.channels?.map((channel) => (
                <NavLink
                    key={channel.ID}
                    exact="true"
                    activeclassname="active"
                    className="channel-link"
                    onClick={() => handleChannelClick(channel.ID)}>
                    <h3>{channel.ID}</h3>
                </NavLink>
            ))}
        </nav>

    );
}

const mapStateToProps = (state) => ({
    channels: state.channels,
});

const mapDispatchToProps = {
    fetchChannels,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
