import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';

const Navbar = () => (
  <div>
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="https://www.pngkey.com/png/detail/9-94886_logo-png-transparent-png.png" alt="logo" />
        </div>
        <div className="navbar-links">
          <ul className="navbar-links">
            <li className="navbar-link">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/calculator">Calculator</NavLink>
            </li>
          </ul>
          <a href="https://github.com/carlos-osorio-developer/MathLovers">
            <BsGithub />
          </a>
        </div>
      </div>
    </nav>
    <Outlet />
  </div>
);

export default Navbar;
