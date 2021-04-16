import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ as = 'button', variant, children, className = '', ...htmlAttr }) => {
  if (as === 'button') {
    return <button className={`${variant} ${className}`} {...htmlAttr}>{children}</button>;
  } else if (as === 'input') {
    return <input className={`${variant} ${className}`} {...htmlAttr} value={children} />;
  }
};

Button.propTypes = {
  as: PropTypes.oneOf(['button', 'input']),
  variant: PropTypes.oneOf(['primary', 'outline-primary']),
};
export default Button;
