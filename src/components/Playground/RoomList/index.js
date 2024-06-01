import React, { useEffect } from 'react'
import './index.scss'
import {
    fetchRooms,
    updateSelectedRoom,
} from '../../../store/rooms/rooms.actions'
import { connect, useDispatch } from 'react-redux'

const RoomList = ({ rooms, selectedChannel, fetchRooms }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (selectedChannel) {
            fetchRooms(selectedChannel)
        }
    }, [fetchRooms, selectedChannel])

    const handleRoomClick = (roomId) => {
        dispatch(updateSelectedRoom(roomId))
    }

    return (
        <div className="room-list">
            <ul>
                {rooms?.rooms?.map((room) => (
                    <li
                        key={room.id}
                        onClick={() => handleRoomClick(room.id)}
                        className={`room-item${rooms.selectedRoomId === room.id ? 'active ' : ''}`}
                    >
                        <div className="room-icon">{room.icon}</div>
                        <span className="room-label">{room.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    rooms: state.rooms,
    selectedChannel: state.channels.selectedChannelId,
})

const mapDispatchToProps = {
    fetchRooms,
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomList)
