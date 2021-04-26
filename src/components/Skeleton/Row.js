import PropTypes from 'prop-types';

const Row = ({ children, className = '' }) => <div className={`row ${className}`}>{children}</div>;

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Row;
