import React from 'react';
import ModalWrapper from './ModalWrapper';
import CloseIcon from 'mdi-react/CloseIcon';
import './Modal.css';

const Modal = ({ children, className = '', show, onClose }) => (
  <ModalWrapper className={className} show={show}>
    <div className="ModalContent">
      <CloseIcon className="Close" size={36} onClick={onClose}/>
      {children}
    </div>
  </ModalWrapper>
);

export default Modal;


