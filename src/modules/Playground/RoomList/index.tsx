import { AppDispatch, RoomListProps, RootState } from '@/types'
import Modal from '@components/Modal'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteChannel } from '@store/channels/channels.actions'
import {
  createRoom,
  deleteRoom,
  fetchRooms,
  updateSelectedRoom,
} from '@store/rooms/rooms.actions'
import { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import './index.scss'

const RoomList: React.FC<RoomListProps> = ({
  rooms,
  selectedChannel,
  fetchRooms,
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const [show, setShow] = useState(false)
  const [roomName, setRoomName] = useState('')

  useEffect(() => {
    if (selectedChannel) {
      fetchRooms(selectedChannel)
    }
  }, [fetchRooms, selectedChannel])

  const handleRoomClick = (roomId: string | undefined) => {
    if (!roomId) return
    dispatch(updateSelectedRoom(roomId))
  }

  const handleDeleteChannel = () => {
    dispatch(deleteChannel(selectedChannel))
    dispatch(updateSelectedRoom(null))
  }

  const handleDeleteRoom = (roomId: string | undefined) => {
    if (!roomId) return
    dispatch(deleteRoom(roomId))
  }

  const handleSubmit = () => {
    setRoomName('')
    dispatch(createRoom({ name: roomName, channel_id: selectedChannel }))
    setShow(false)
  }

  return (
    <div className={selectedChannel ? 'room-list' : 'd-none'}>
      <button className="delete-button" onClick={() => handleDeleteChannel()}>
        Delete Channel
      </button>
      {rooms?.rooms.length !== 0 ? <div className="spacer"></div> : null}
      <ul>
        {rooms?.rooms?.map((room) => (
          <li
            key={room.id}
            onClick={() => handleRoomClick(room.id)}
            className={`${rooms.selectedRoomId === room.id ? 'active room-item' : 'room-item'}`}
          >
            <div className="room-icon">{room.avatar}</div>
            <span className="room-label">{room.name}</span>
            <FontAwesomeIcon
              icon={faTrash}
              className="delete-icon"
              onClick={() => handleDeleteRoom(room.id)}
            />
          </li>
        ))}
      </ul>
      <div className="add-room-container">
        <button className="add-room-button" onClick={() => setShow(true)}>
          Add Room
        </button>
      </div>
      <Modal title="Create Room" show={show} handleClose={() => setShow(false)}>
        <label>Room Name</label>
        <input
          type="text"
          placeholder="Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  rooms: state.rooms,
  selectedChannel: state.channels.selectedChannelId,
})

const mapDispatchToProps = {
  fetchRooms,
}

const ConnectedRoomList = connect(mapStateToProps, mapDispatchToProps)(RoomList)

export default ConnectedRoomList
