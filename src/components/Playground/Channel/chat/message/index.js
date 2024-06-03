import './index.scss'
import React, { useEffect, useState } from 'react'
import { getTimeDifference } from '../../../../../services/dates'

const Message = ({ message }) => {
    const [timeDifference, setTimeDifference] = useState(
        getTimeDifference(message)
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeDifference(getTimeDifference(message))
        }, 60000)

        return () => clearInterval(interval)
    })

    return (
        <div className="message-box" key={message.id}>
            <div className="sender-circle">{message.sender}</div>
            <div className="message-content">
                <p>{message.content}</p>
                <span>{timeDifference}</span>
            </div>
        </div>
    )
}

export default Message
