import { markMessageAsSeen } from '../store/messages/messages.actions'
import { useEffect, useRef } from 'react'

const useMessageObserver = (messageId, root, threshold = 0.1) => {
    const messageRef = useRef(null)

    useEffect(() => {
        if (!root) {
            return
        }
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        markMessageAsSeen(messageId)
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
    }, [messageId, root, threshold])

    return messageRef
}

export default useMessageObserver
