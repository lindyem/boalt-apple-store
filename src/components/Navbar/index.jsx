import React from 'react';
import { Link, useHistory } from "react-router-dom";
import appleLogoSmall from '../../assets/images/apple-32.png';

const Navbar = (props) => {
  const history = useHistory();
  const currentPage = window.location.pathname.split('/').pop();
  return (
    <div
      className="navbar"
    >
      <div className="navbar__logo" onClick={() => history.push('/comingProducts')}>
        <img src={appleLogoSmall} />
      </div>
      <div className="navbar__menuItems">
        <div className="navbar__menuLinks">
          <Link className={currentPage === 'iphone' && 'navbar__currentPage'} to={`/iphone`}>iPhone</Link>
          <Link className={currentPage === 'mbp' && 'navbar__currentPage'} to={`/mbp`}>MacBook Pro</Link>
          <Link className={currentPage === 'watch' && 'navbar__currentPage'} to={`/watch`}>Watch</Link>
        </div>
        <div >
          <button className="navbar__menuButton">Notify Me</button>
        </div>
      </div>
    </div>
  )
}


export default Navbar;
