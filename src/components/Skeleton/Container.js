import PropTypes from 'prop-types';

const Container = ({ children, style, className = '' }) => <div className={`container ${className}`} style={style}>{children}</div>;

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object
};

export default Container;
