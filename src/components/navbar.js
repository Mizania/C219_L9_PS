import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">RP Course Portal</Link>
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to="/diplomas" className="navbar-link">Diplomas</Link>
          </li>
          <li>
            <Link to="/registration" className="navbar-link">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
