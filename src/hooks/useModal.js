import { useSelector, useDispatch } from "react-redux";
import * as modalActions from '../store/actions/modalActions';

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
