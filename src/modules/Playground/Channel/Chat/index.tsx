import { AppDispatch, Message as M, RootState, UserData } from '@/types'
import { sendWebSocketMessage } from '@services/chat'
import { switchRoomAndFetchMessages } from '@store/messages/messages.actions'
import { FormEvent, useEffect, useRef, useState } from 'react'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { useDispatch, useSelector } from 'react-redux'
import Message from './Message'

const Chat = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const userData = useAuthUser<UserData>()
  const currentRoomId = useSelector(
    (state: RootState) => state.rooms.selectedRoomId
  )
  const currentChannelId = useSelector(
    (state: RootState) => state.channels.selectedChannelId
  )
  const messages = useSelector(
    (state: RootState) => state.messages.rooms[currentRoomId] || []
  )
  const chatContainerRef = useRef(null)

  useEffect(() => {
    if (currentRoomId) {
      dispatch(switchRoomAndFetchMessages(currentRoomId, currentChannelId))
    }
  }, [currentRoomId, currentChannelId, dispatch])

  const sendMessage = (e: FormEvent) => {
    e.preventDefault()
    if (input.trim() === '') return
    const newMessage = {
      id: messages.length + 1,
      content: input,
      sender_id: userData?.user_id,
      room_id: currentRoomId,
      timestamp: new Date().toISOString(),
    }

    sendWebSocketMessage(newMessage)
    setInput('')
  }

  return (
    <div className="m-auto w-3/5 p-5 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Chat</h1>
      <div
        className="bg-white rounded-lg p-3 overflow-y-auto max-h-[420px]"
        ref={chatContainerRef}
      >
        {messages.map((message: M) => (
          <Message
            message={message}
            key={message.id}
            root={chatContainerRef.current}
          />
        ))}
      </div>

      <div className="flex mt-3">
        <form onSubmit={sendMessage} className="flex w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-4 text-[18px] border border-gray-300 rounded-l-md mr-2"
          />
          <button
            type="submit"
            className="
		bg-primary
		p-4
		text-secondary
		font-normal
		text-2xl
		rounded
		cursor-pointer
		hover:bg-primary-dark
	    "
            disabled={!input.trim()}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat
