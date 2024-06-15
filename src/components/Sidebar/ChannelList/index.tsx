import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Dispatch, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import {
    updateSelectedChannel,
    fetchChannels,
    createChannel,
} from '@store/channels/channels.actions'
import { updateSelectedRoom } from '@store/rooms/rooms.actions'
import Modal from '@components/Modal'
import { ChannelListProps } from '@/types'
import { Action } from '@reduxjs/toolkit'

const ChannelList: React.FC<ChannelListProps> = ({ channels, fetchChannels }) => {
    const dispatch: Dispatch<Action> = useDispatch()
    const [show, setShow] = useState(false)
    const [channelName, setChannelName] = useState('')

    useEffect(() => {
        fetchChannels()
    }, [fetchChannels])

    const handleChannelClick = (channelId: string) => {
        dispatch(updateSelectedChannel(channelId))
        dispatch(updateSelectedRoom(null));
    }

    const addChannel = () => {
        setShow(true);
    };

    const handleSubmit = () => {
        setChannelName('')
	// TODO: Use redux-thunk to dispatch the createChannel action
        dispatch(createChannel({ name: channelName, id: '' }))
        setShow(false)
    };

    return (
        <div>
            <nav>
                <button className="channel-link add-channel-button" onClick={addChannel}>
                    <h3>
                        <FontAwesomeIcon icon={faPlus} color="#fff" />
                    </h3>
                </button>
                {channels?.channels.map((channel) => (
                    <button
                        key={channel.id}
                        className={`channel-link ${channels.selectedChannelId === channel.id ? 'active' : ''}`}
                        onClick={() => handleChannelClick(channel.id)}
                    >
                        <h3>{channel.id}</h3>
                    </button>
                ))}
            </nav>
            <Modal title="Create Channel" show={show} handleClose={() => setShow(false)}>
                <label>Channel Name</label>
                <input
                    type="text"
                    placeholder="Channel Name"
                    value={channelName}
                    onChange={(e) => setChannelName(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => ({
    channels: state.channels,
})

const mapDispatchToProps = {
    fetchChannels,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)
