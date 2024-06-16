import { markMessageAsSeen } from '../store/messages/messages.actions'
import { useEffect, useRef } from 'react'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'

const useMessageObserver = (message, root, threshold = 0.1) => {
  const messageRef = useRef(null)
  const user = useAuthUser()

  useEffect(() => {
    if (!root) {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && user.userID !== message.sender_id) {
            markMessageAsSeen(message.id)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: root,
        threshold: threshold,
      }
    )

    const refCopy = messageRef.current
    if (refCopy) {
      observer.observe(refCopy)
    }

    return () => {
      if (refCopy) {
        observer.unobserve(refCopy)
        observer.disconnect()
      }
    }
  }, [message, root, threshold, user.userID])

  return messageRef
}

export default useMessageObserver
