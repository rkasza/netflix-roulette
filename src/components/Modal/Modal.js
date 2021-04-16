import PropTypes from 'prop-types';
import ModalWrapper from './ModalWrapper';
import CloseIcon from 'mdi-react/CloseIcon';
import './Modal.css';

const Modal = ({ children, className = '', onClose }) => (
  <ModalWrapper className={className}>
    <div className="ModalContent">
      <CloseIcon className="Close" size={36} onClick={onClose}/>
      {children}
    </div>
  </ModalWrapper>
);

Modal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Modal;


