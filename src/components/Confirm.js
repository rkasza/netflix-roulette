import React from 'react';
import Button from './Button/Button';

const Confirm = ({ children, onConfirm }) => {
  return (
    <div className="Confirm">
      {children}
      <Button variant="primary" onClick={onConfirm}>CONFIRM</Button>
    </div>
  )
}

export default Confirm
