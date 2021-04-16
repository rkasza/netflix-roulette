import { useState } from 'react';
import Modal from '../components/Modal/Modal';

const useModal = () => {
  const [modal, setModal] = useState(null);
  const closeModal = () => setModal(modal);
  return {
    
    openModal(modalBody, modalClassName = '') {
      const modal = <Modal onClose={closeModal} className={modalClassName}>{modalBody}</Modal>;
      setModal(modal);
    },
    modal
  }
};

export default useModal;