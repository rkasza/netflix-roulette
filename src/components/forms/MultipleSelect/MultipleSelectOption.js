import PropTypes from 'prop-types';
import { Field } from 'formik';
const MultipleSelectOption = ({ name, children }) => (
  <label className="MultipleSelectOption" htmlFor={children} >  
    <Field type="checkbox" name={name} id={children} value={children} />
    <span className="Checkmark"></span>
    {children}
  </label>
);

MultipleSelectOption.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string
};

export default MultipleSelectOption;
