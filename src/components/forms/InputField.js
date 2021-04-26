import PropTypes from 'prop-types';
import Col from '../Skeleton/Col';
import { useField } from 'formik';

const InputField = ({ label, ...props }) => {
  const [field, { error, touched }] = useField(props);
  return (
    <Col size={12} className={`FormControl ${touched && error ? 'hasError' : ''}`}>
      <label htmlFor={props.name}>{label}</label>
      <input className="u-full-width" {...field} {...props} id={props.name} />
      {(touched && error) && <span className="error">{error}</span>}
    </Col>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired
};

export default InputField;
