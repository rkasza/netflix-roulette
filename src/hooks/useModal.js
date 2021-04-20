import { useState } from 'react';
import Modal from '../components/Modal/Modal';

const useModal = () => {
  const modalState = useSelector(({ modalState }) => modalState);
  const dispatch = useDispatch();

  return {
    modalState,
    openModal: (modalBody, modalClassName) => dispatch(modalActions.openModal(modalBody, modalClassName)),
    closeModal: () => dispatch(modalActions.closeModal())
  }
};

export default useModal;
