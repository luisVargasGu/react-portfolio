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
    <div
      className={
        selectedChannel
          ? 'ml-24 bg-gray-800 p-2.5 flex flex-col rounded-lg w-full text-white'
          : 'hidden'
      }
    >
      <button
        className="bg-red-700
	text-white
	border-none
	py-2
	px-4
	rounded
	cursor-pointer
	text-lg
	font-normal
	hover:bg-red-800"
        onClick={() => handleDeleteChannel()}
      >
        Delete Channel
      </button>
      {rooms?.rooms.length !== 0 ? (
        <div className="h-1 bg-[#666] my-2 mx-2.5"></div>
      ) : null}
      <ul className="list-none p-0 m-0">
        {rooms?.rooms?.map((room) => (
          <li
            key={room.id}
            onClick={() => handleRoomClick(room.id)}
            className={`${rooms.selectedRoomId === room.id ? 'bg-gray-600' : 'bg-gray-400'} flex
	    items-center
	    p-2.5
	    mb-2
	    rounded
	    transition-colors
	    cursor-pointer
	    hover:bg-gray-600`}
          >
            <div
              className="w-8
	    h-8
	    bg-secondary-light
	    rounded-full
	    flex
	    items-center
	    justify-center
	    text-lg
	    text-white
	    mr-2.5"
            >
              {room.avatar}
            </div>
            <span
              className="text-lg
	    font-normal
	    text-white
	    overflow-hidden
	    text-ellipsis
	    whitespace-nowrap"
            >
              {room.name}
            </span>
            <FontAwesomeIcon
              icon={faTrash}
              className="ml-auto text-lg text-red-700 cursor-pointer hover:text-red-800"
              onClick={() => handleDeleteRoom(room.id)}
            />
          </li>
        ))}
      </ul>
      <div className="mt-auto mb-2.5 flex">
        <button
          className="bg-gray-600
	  text-white
	  border-none
	  py-2
	  px-4
	  rounded
	  font-normal
	  cursor-pointer
	  text-lg
	  w-full hover:bg-gray-700"
          onClick={() => setShow(true)}
        >
          Add Room
        </button>
      </div>
      <Modal title="Create Room" show={show} handleClose={() => setShow(false)}>
        <div className="p-4">
          <label className="block mb-2">Room Name</label>
          <input
            type="text"
            placeholder="Room Name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="w-full border p-2 mb-4"
          />
          <button
            onClick={handleSubmit}
            className="
		bg-primary
		p-2
		my-2
		text-secondary
		text-lg
		rounded
		cursor-pointer
		hover:bg-primary-dark
		"
          >
            Submit
          </button>
        </div>
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
