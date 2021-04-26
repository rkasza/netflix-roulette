import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({ fontSize = '20px', className = 'Logo' }) => (
  <Link to="/" className={className} style={{ fontSize }}>
    <span className="BoldNetflix">netflix</span>roulette
  </Link>
)

Logo.propTypes = {
  fontSize: PropTypes.string,
  className: PropTypes.string
};

export default Logo
