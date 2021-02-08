import React, { useState } from 'react';
import { Link } from "react-router-dom";

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

const MenuItem = ({ to, children }) => {
  const [cssClass, setCssClass] = useState(STATUS.NORMAL);
  const onMouseEnter = () => setCssClass(STATUS.HOVERED);
  const onMouseLeave = () => setCssClass(STATUS.NORMAL);

  return (
    <li>
      <Link className={cssClass} to={to} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
      </Link>
    </li>
  )
};

export default MenuItem;
