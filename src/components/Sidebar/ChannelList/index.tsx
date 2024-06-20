import { AppDispatch, Channel, ChannelListProps, RootState } from '@/types'
import Modal from '@components/Modal'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  createChannel,
  fetchChannels,
  updateSelectedChannel,
} from '@store/channels/channels.actions'
import { updateSelectedRoom } from '@store/rooms/rooms.actions'
import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'

const ChannelList: React.FC<ChannelListProps> = ({
  channels,
  fetchChannels,
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const [show, setShow] = useState(false)
  const [channelName, setChannelName] = useState('')

  useEffect(() => {
    fetchChannels()
  }, [fetchChannels])

  const handleChannelClick = (channelId: string) => {
    dispatch(updateSelectedChannel(channelId))
    dispatch(updateSelectedRoom(null))
  }

  const addChannel = () => {
    setShow(true)
  }

  const handleSubmit = () => {
    setChannelName('')
    dispatch(createChannel({ name: channelName }))
    setShow(false)
  }

  return (
    <div className="w-full h-full bg-gray-900 text-white">
      <nav
        className="flex flex-col space-y-2 absolute
	    w-full
	    top-1/2
	    transform
	    -translate-y-1/2
	"
      >
        <button
          className="
	  mx-auto
	  text-2xl
	  p-2
	  h-[51px]
	  w-[51px]
	  bg-secondary
	  rounded-full
	  hover:bg-secondary-light"
          onClick={addChannel}
        >
          <h3>
            <FontAwesomeIcon icon={faPlus} color="#fff" />
          </h3>
        </button>
        {channels?.channels.map((channel: Channel) => (
          <button
            key={channel.id}
            className={`mx-auto text-2xl font-bold
	    p-2 rounded-full h-[51px] w-[51px] text-white text-center ${
        channels.selectedChannelId === channel.id
          ? 'bg-tertiary hover:bg-tertiary-light'
          : 'bg-gray-700 hover:bg-gray-600'
      }`}
            onClick={() => handleChannelClick(channel.id)}
          >
            <h3>{channel.id}</h3>
          </button>
        ))}
      </nav>
      <Modal
        title="Create Channel"
        show={show}
        handleClose={() => setShow(false)}
      >
        <div className="p-4">
          <label className="block mb-2">Channel Name</label>
          <input
            type="text"
            placeholder="Channel Name"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            className="w-full p-2 mb-4 border rounded-full"
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  channels: state.channels,
})

const mapDispatchToProps = {
  fetchChannels,
}

const ConnectedChannelList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList)

export default ConnectedChannelList
