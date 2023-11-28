import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${theme}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/destacados">Destacados</Link>
        </li>
        <li>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;