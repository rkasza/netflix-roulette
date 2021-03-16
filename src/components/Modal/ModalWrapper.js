import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const ModalWrapper = props => {
  const [el] = useState(() => {
    let modalWrapper = document.createElement('div');
    modalWrapper.className = `Modal ${props.className}`;

    return modalWrapper;
  });
  useEffect(() => {
    document.body.appendChild(el);
    document.body.classList.add('ModalActive');
    return () => {
      document.body.removeChild(el);
      document.body.classList.remove('ModalActive');
    }
  }, [el]);
  
  return  ReactDOM.createPortal(
    props.children,
    el
  );
};

ModalWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default ModalWrapper;
