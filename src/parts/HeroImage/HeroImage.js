import './HeroImage.css';
import PropTypes from 'prop-types';

const HeroImage = ({ className = '', children, image = '', alpha = 0.85 }) => {
  const backgraundImage = `url("${image}")`;
  const backgroundStyle = `linear-gradient(rgba(0, 0, 0, ${alpha}), rgba(0, 0, 0, ${alpha - .05})), ${backgraundImage}`;
  return ( 
    <div className={`HeroImage ${className}`} style={{backgroundImage: backgroundStyle}}>
      <div className="HeroContent">
        {children}
      </div>
    </div>
  );
};

HeroImage.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  alpha:PropTypes.number,
  children: PropTypes.node
};

export default HeroImage;

