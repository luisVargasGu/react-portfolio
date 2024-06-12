import './index.scss'
import React, { useEffect, useState } from 'react'
import { getTimeDifference } from '../../../../../services/dates'
import useMessageObserver from '../../../../../services/screen'

// TODO: don't mark as seen if already marked
// TODO: don't mark as seen if you are the sender
const Message = ({ root, message }) => {
    const [timeDifference, setTimeDifference] = useState(
        getTimeDifference(message)
    )
    const messageRef = useMessageObserver(message.id, root, 1)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeDifference(getTimeDifference(message))
        }, 60000)

        return () => clearInterval(interval)
    })

    return (
        <div className="message-box" ref={messageRef} key={message.id}>
            <div className="sender-circle">
                {!message.sender_avatar ?
                    (
                        <div className="default-avatar">
                            <span>N/A</span>
                        </div>
                    ) :
                    (<img src={'data:image/png;base64,' + message.sender_avatar} alt="User-Avatar" />)
                }
            </div>
            <div className="message-content">
                <h4>{message.sender_name}</h4>
                <p>{message.content}</p>
                <div class="seen_by">
                    {message?.seen_by?.map(({ avatar, username }) => (
                        <div className="sender-circle">
                            {!avatar ?
                                (
                                    <div className="default-avatar">
                                        <span>{username}</span>
                                    </div>
                                ) :
                                (<img src={'data:image/png;base64,' + avatar} alt="User-Avatar" />)
                            }
                        </div>
                    ))}
                </div>
                <span className="time-stamp">{timeDifference}</span>
            </div>
        </div>
    )
}

export default Message
