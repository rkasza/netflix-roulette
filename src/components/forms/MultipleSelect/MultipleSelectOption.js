import React from 'react';

const MultipleSelectOption = ({ name, onChange, children, checked }) => {
  return (
    <label className="MultipleSelectOption" htmlFor={children}>
      <input type="checkbox" name={name} value={children} onChange={(event) => onChange(event)} id={children} checked={checked}/>
      <span className="Checkmark"></span>
      {children}
    </label>
  );
};

export default MultipleSelectOption;
