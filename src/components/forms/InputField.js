import React from 'react';
import Col from '../Skeleton/Col';

const InputField = ({ label, name, id, type, onChange, value, error = '' }) => {
  return (
    <Col size={12} className={`FormControl ${error ? 'hasError' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input className="u-full-width" type={type} name={name} id={id} onChange={onChange} value={value} />
      {error && <span className="error">{error}</span>}
    </Col>
  );
};

export default InputField;
