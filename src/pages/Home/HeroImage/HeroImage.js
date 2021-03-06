import React from 'react';
import './HeroImage.css';
import PropTypes from 'prop-types'

const HeroImage = ({ children, image = '' }) => {
  const backgraundImage = `url("${image}")`;
  const backgroundStyle = `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.8)), ${backgraundImage}`;
  return ( 
    <div className="HeroImage" style={{backgroundImage: backgroundStyle}}>
      <div className="HeroContent">
        {children}
      </div>
    </div>
  );
};

HeroImage.propTypes = {
  image: PropTypes.string
};

export default HeroImage;

