import React from 'react';
import PropTypes from 'prop-types';
import './Logo.css';

const Logo = ({ fontSize = '20px' }) => <span className="Logo" style={{ fontSize }}><span className="BoldNetflix">netflix</span>roulette</span>

Logo.propTypes = {
  fontSize: PropTypes.string
};

export default Logo
