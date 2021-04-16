import PropTypes from 'prop-types';

const Row = ({ children, className = '' }) => <div className={`row ${className}`}>{children}</div>;

Row.propTypes = {
  className: PropTypes.string
}

export default Row;