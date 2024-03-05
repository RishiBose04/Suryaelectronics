import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        SuryaElectronics
      </div>

      <div className="navbar-Search">
        <input className="input" type="text" placeholder="Search" />
      </div>

      <div className="navbar-menu">
        <a className="navbar-item" href="/about">
          Login/Register
        </a>

        <a className="navbar-item" href="/contact">
         <FontAwesomeIcon icon={faShoppingCart} /> Cart  {/* Add cart logo */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;