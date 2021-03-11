import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';

const Confirm = ({ children, onConfirm }) => {
  return (
    <div className="Confirm">
      {children}
      <Button variant="primary" onClick={onConfirm}>CONFIRM</Button>
    </div>
  )
};

Confirm.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.node
};
export default Confirm;
