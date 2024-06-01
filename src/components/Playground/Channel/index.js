import './index.scss'
import React, { useEffect, useState } from 'react'
import Sidebar from '../../Sidebar'
import Chat from './chat'
import RoomList from '../RoomList'
import { connect } from 'react-redux'

const Channel = ({ selectedChannel, selectedRoom }) => {
    console.log('Channel', selectedChannel, selectedRoom)
    return (
        <div className="channel">
            <div className="page">
                <Sidebar />
                {selectedChannel ? <RoomList /> : null}
                {selectedRoom ? <Chat /> : null}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    selectedChannel: state.channels.selectedChannelId,
    selectedRoom: state.rooms.selectedRoomId,
})

export default connect(mapStateToProps)(Channel)
