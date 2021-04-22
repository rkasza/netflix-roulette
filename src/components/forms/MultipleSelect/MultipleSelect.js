import React, { useState, useRef, useEffect } from 'react';
import Col from '../../Skeleton/Col';
import './MultipleSelect.css';
import PropTypes from 'prop-types';

const MultipleSelect = ({ label, value, error = '', children, onChange, name }) => {
  const [showOptions, setShowOptions] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    const handleOutsideClick = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target) && showOptions) {
        setShowOptions(false);
      } 
    }
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [showOptions]);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  }

  const addParentPropsToChildren = (option, key) => 
    React.cloneElement(option, { name, onChange, key, checked: value.includes(option.props.children)});
  
  const selectValue = value.length === 0 ?  'Select a Genre': value.join(', ');

  return (
    <Col size={12} className={`FormControl MultipleSelect ${error ? 'hasError' : ''}`} ref={wrapperRef}>
      <label>{label}</label>
      <div className="MultipleSelectValue" onClick={toggleOptions}>{selectValue}</div>
      {showOptions && (
        <div className="MultipleSelectOptions">
          {children.map(addParentPropsToChildren)}
        </div>
      )}
    </Col>
  )
};

MultipleSelect.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default MultipleSelect
