import { ChannelProps, RootState } from '@/types'
import Sidebar from '@components/Sidebar'
import { connect } from 'react-redux'
import RoomList from '../RoomList'
import Chat from './Chat'

const Channel: React.FC<ChannelProps> = ({ selectedChannel, selectedRoom }) => {
  return (
    <div className="channel">
      <div className="flex h-full">
        <Sidebar />
        {selectedChannel ? <RoomList /> : null}
        {selectedRoom ? <Chat /> : null}
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  selectedChannel: state.channels.selectedChannelId,
  selectedRoom: state.rooms.selectedRoomId,
})

const connectedChannel = connect(mapStateToProps)(Channel)
export default connectedChannel
