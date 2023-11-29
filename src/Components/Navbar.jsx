import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';
import '../Css/Navbar.css'; 

const Navbar = () => {
  const { themeState, dispatch } = useTheme();

  const handleThemeToggle = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`navbar ${themeState.isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <ul className={`navbar-list ${themeState.isDarkTheme ? 'dark-text' : 'light-text'}`}>
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
          <button className={`${themeState.isDarkTheme ? 'white-button' : 'dark-button'}`} onClick={handleThemeToggle}>
            Cambiar Tema
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;