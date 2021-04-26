import { useState } from 'react';
import PropTypes from 'prop-types';
import './Popup.css';
import CloseIcon from 'mdi-react/CloseIcon';

const Popup = ({ button, children }) => {
  const [show, setShow] = useState(false);
  const togglePopup = () => setShow(!show);
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
  button: PropTypes.node.isRequired,
  children: PropTypes.node
};
export default Popup;