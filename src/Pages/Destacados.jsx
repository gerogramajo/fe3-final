import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useFavorites } from '../Context/FavoritesProvider';
import Card from '../Components/Card';
import '../Css/Home.css';
import { useTheme } from '../Context/ThemeContext';


const Destacados = () => {
  const { favorites } = useFavorites();
  const { themeState } = useTheme();

  return (
    <div className={`home-container ${themeState.isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Navbar></Navbar>
      <h2>Favoritos</h2>
      <div className="cards-container">
        {favorites.map((dentist) => (
          <Card key={dentist.id} {...dentist} />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Destacados;