import Sidebar from '@components/Sidebar'
import { connect } from 'react-redux'
import RoomList from '../RoomList'
import Chat from './Chat'
import './index.scss'

const Channel = ({ selectedChannel, selectedRoom }) => {
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
