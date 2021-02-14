import React from 'react';
import './HeroImage.css'

const HeroImage = ({ children, image }) => {
  const backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.8)), url("${image}")`;
  return ( 
    <div className="HeroImage" style={{backgroundImage}}>
      <div className="HeroContent">
        {children}
      </div>
    </div>
  );
};

export default HeroImage;

