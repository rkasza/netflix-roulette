import React from 'react'

const MovieMenu = ({ children }) => {
  return (
    <div className="MovieMenu">
      {children}
    </div>
  )
}

MovieMenu.Item = props => <button className="MovieMenuItem" {...props}>{props.children}</button>;

export default MovieMenu;
