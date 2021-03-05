import React from 'react';
import Col from '../Skeleton/Col';
//name, id, type, onChange, value,
const InputField = ({ label, error = '',  ...inputProps }) => {
  return (
    <Col size={12} className={`FormControl ${error ? 'hasError' : ''}`}>
      <label htmlFor={inputProps.id}>{label}</label>
      <input className="u-full-width" {...inputProps} />
      {error && <span className="error">{error}</span>}
    </Col>
  );
};

export default InputField;
