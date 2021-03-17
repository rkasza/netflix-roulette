import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Popup.css';
import CloseIcon from 'mdi-react/CloseIcon';

const Popup = props => {
  const [show, setShow] = useState(false);
  const togglePopup = () => setShow(!show);
  const { button, children } = props;
  return (
    <div className="PopupWrapper">
      <div onClick={togglePopup}>
        {button}
      </div>
      {show && (
        <div className="PopupContent">
          <CloseIcon className="PopupCloseIcon" onClick={togglePopup} />
          {children}
        </div>
      )}
    </div>
  )
};
Popup.propTypes = {
  className: PropTypes.string,
  button: PropTypes.node.isRequired,
  children: PropTypes.node
};
export default Popup;