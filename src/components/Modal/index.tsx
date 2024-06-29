import { ModalProps } from '@/types'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Modal: React.FC<ModalProps> = ({
  title,
  handleClose,
  show,
  children,
}) => {
  const showHideClassName = show
    ? 'fixed top-0 left-0 w-full h-full flex bg-black/60 justify-center items-center z-[1000]'
    : 'fixed top-0 left-0 w-full h-full flex bg-black/60 justify-center items-center z-[1000] hidden'
  return (
    <div className={`${showHideClassName}`}>
      <section
        className="
      bg-white
      w-90
      max-w-500px
      rounded-lg
      shadow-md
      animate-fadeIn
      flex
      flex-col
      overflow-hidden
      text-gray-700"
      >
        <div
          className="
	bg-gray-200
	border-b
	border-gray-300
	p-4
	flex
	justify-between
	items-center"
        >
          <h3 className="text-lg font-semibold">{title}</h3>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleClose}
            className="
	    cursor-pointer
	    text-gray-600
	    text-xl"
          />
        </div>
        <div
          className="
	p-4
	flex
	space-x-4
	items-center
	flex-1"
        >
          {children}
        </div>
      </section>
    </div>
  )
}

export default Modal
