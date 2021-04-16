import PropTypes from 'prop-types';
import Col from '../Skeleton/Col';

const InputField = ({ label, error = '',  ...inputProps }) => {
  return (
    <Col size={12} className={`FormControl ${error ? 'hasError' : ''}`}>
      <label htmlFor={inputProps.id}>{label}</label>
      <input className="u-full-width" {...inputProps} />
      {error && <span className="error">{error}</span>}
    </Col>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default InputField;
