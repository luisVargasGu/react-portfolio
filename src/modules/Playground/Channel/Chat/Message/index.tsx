import { MessageProps } from '@/types'
import { getTimeDifference } from '@services/dates'
import useMessageObserver from '@services/screen'
import React, { useEffect, useState } from 'react'

const Message: React.FC<MessageProps> = ({ root, message }) => {
  const [timeDifference, setTimeDifference] = useState(
    getTimeDifference(message)
  )
  const messageRef = useMessageObserver(message, root, 1)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDifference(getTimeDifference(message))
    }, 60000)

    return () => clearInterval(interval)
  })

  return (
    <div
      className="
	flex
	flex-row
	items-start
	bg-gray-100
	p-4
	rounded-lg
	mb-4
		  "
      ref={messageRef}
      key={message.id}
    >
      <div className="flex items-center justify-center w-12 h-12 mr-2 rounded-full text-white font-bold bg-blue-500">
        {!message.sender_avatar ? (
          <div className="flex items-center justify-center w-full h-full rounded-full bg-blue-500">
            <span>N/A</span>
          </div>
        ) : (
          <img
            src={'data:image/png;base64,' + message.sender_avatar}
            alt="User-Avatar"
            className="w-full h-full rounded-full"
          />
        )}
      </div>
      <div className="relative flex flex-col min-h-[60px] break-words flex-1">
        <h4 className="m-0 text-lg font-medium">{message.sender_name}</h4>
        <p className="m-0 break-words text-lg">{message.content}</p>
        <div className="flex flex-row-reverse mt-2 mr-3 mb-2">
          {message?.seen_by?.map(({ avatar, username }) => (
            <div
              className="relative flex items-center justify-center w-5 h-5 -mr-3 rounded-full bg-gray-300"
              key={username}
            >
              {!avatar ? (
                <div className="flex items-center justify-center w-full h-full bg-gray-500 rounded-full">
                  <span>{username}</span>
                </div>
              ) : (
                <img
                  src={'data:image/png;base64,' + avatar}
                  alt="User-Avatar"
                  className="w-full h-full rounded-full"
                />
              )}
            </div>
          ))}
        </div>
        <span className="absolute bottom-[-8px] right-0 text-sm text-gray-500">
          {timeDifference}
        </span>
      </div>
    </div>
  )
}

export default Message
