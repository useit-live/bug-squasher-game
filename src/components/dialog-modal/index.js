import React from 'react';
import './style/index.css'

const Modal = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;
    return (
        <div className="modal">
            <div className="modal-content">
                {children}
                <button className="modal-button" onClick={onClose}>Play again</button>
            </div>
        </div>
    );
};

export default Modal;
