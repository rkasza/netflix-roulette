import  { cloneElement, useState, useRef, useEffect } from 'react';
import { useField } from 'formik';
import Col from '../../Skeleton/Col';
import './MultipleSelect.css';
import PropTypes from 'prop-types';

const MultipleSelect = ({ label, children, ...props }) => {
  const [{ value, name }, { error, touched }, helpers] = useField(props);
  const [showOptions, setShowOptions] = useState(false);
  const wrapperRef = useRef();
  useEffect(() => {
    const handleOutsideClick = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target) && showOptions) {
        setShowOptions(false);
        if (value.length === 0) {
          helpers.setTouched(true);
        }
      } 
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [showOptions, helpers, value]);

  const toggleOptions = () => setShowOptions(!showOptions);

  const addNameToChildren = option => cloneElement(option, { name, key: option.props.children })
  
  const placeHolder = value.length === 0 ?  'Select a Genre': value.join(', ');

  return (
    <Col size={12} className={`FormControl MultipleSelect ${touched && error ? 'hasError' : ''}`} ref={wrapperRef}>
      <label>{label} {}</label>
      <div className="MultipleSelectValue" onClick={toggleOptions}>{placeHolder}</div>
      {(touched && error) && <span className="error">{error}</span>}
      {showOptions && (
        <div className="MultipleSelectOptions">
          {children.map(addNameToChildren)}
        </div>
      )}
    </Col>
  )
};

MultipleSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default MultipleSelect
