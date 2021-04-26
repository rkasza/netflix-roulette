import PropTypes from 'prop-types';
import './Logo.css';

const Logo = ({ fontSize = '20px', className = 'Logo' }) => <span className={className} style={{ fontSize }}><span className="BoldNetflix">netflix</span>roulette</span>

Logo.propTypes = {
  fontSize: PropTypes.string,
  className: PropTypes.string
};

export default Logo
