import React from 'react';
import PropTypes from 'prop-types';

const MultipleSelectOption = ({ name, onChange, children, checked }) => (
  <label className="MultipleSelectOption" htmlFor={children}>
    <input type="checkbox" name={name} value={children} onChange={(event) => onChange(event)} id={children} checked={checked}/>
    <span className="Checkmark"></span>
    {children}
  </label>
);

MultipleSelectOption.propTypes = {
  children: PropTypes.node.isRequired
};

export default MultipleSelectOption;
