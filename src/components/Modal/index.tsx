import { ModalProps } from '@/types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './index.scss';

export const Modal: React.FC<ModalProps> = ({ title, handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                <div className="modal-header">
                    <h3>{title}</h3>
                    <FontAwesomeIcon icon={faTimes} onClick={handleClose} className="modal-close-icon" />
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </section>
        </div>
    )
}

export default Modal;

