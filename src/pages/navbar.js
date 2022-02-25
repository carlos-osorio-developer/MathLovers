import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import styles from './navbar.module.scss';

const Navbar = () => (
  <div>
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Math.svg/2048px-Math.svg.png" alt="logo" />
      </div>
      <div className={styles.navLinks}>
        <div />
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/" activeStyle={{ color: 'red' }}>Home</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/calculator" activeStyle={{ color: 'red' }}>Calculator</NavLink>
          </li>
        </ul>
        <a href="https://github.com/carlos-osorio-developer/MathLovers">
          <BsGithub />
        </a>
      </div>
    </nav>
    <Outlet />
  </div>
);

export default Navbar;
