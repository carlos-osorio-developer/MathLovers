import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import styles from './navbar.module.scss';

const Navbar = () => (
  <div>
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Math.svg/2048px-Math.svg.png" alt="logo" />
      </Link>
      <div className={styles.navLinks}>
        <div />
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/calculator">Calculator</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/quote">Quote</NavLink>
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
