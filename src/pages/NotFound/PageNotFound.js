import './PageNotFound.css';
import Image from '../../components/Image';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom'

const PageNotFound = () => (
  <div className="PageNotFound">
      <Logo className="PageNotFoundLogo Logo" fontSize="16px"/>
      <h1 className="PageNotFoundHeader">Page Not Found</h1>
      <Image src="images/404.png" alt="Page Not Found." />
      <Link className="BackToHome" to="/">GO BACK TO HOME</Link>
  </div>
);

export default PageNotFound;
