import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
    updateSelectedChannel,
    fetchChannels,
} from '../../../store/channels/channels.actions'

const ChannelList = ({ channels, fetchChannels }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        fetchChannels()
    }, [fetchChannels])

    const handleChannelClick = (channelId) => {
        dispatch(updateSelectedChannel(channelId))
    }

    const addChannel = () => {
        console.log('add channel')
    }

    return (
        <nav>
            <button className="channel-link" onClick={() => addChannel()}>
                <h3>
                    <FontAwesomeIcon icon={faPlus} color="#fff" />
                </h3>
            </button>
            {channels?.channels.map((channel) => (
                <button
                    key={channel.ID}
                    className={`channel-link ${channels.selectedChannelId === channel.ID ? 'active' : ''}`}
                    onClick={() => handleChannelClick(channel.ID)}
                >
                    <h3>{channel.ID}</h3>
                </button>
            ))}
        </nav>
    )
}

const mapStateToProps = (state) => ({
    channels: state.channels,
})

const mapDispatchToProps = {
    fetchChannels,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)
