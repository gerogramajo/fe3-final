import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import { DataProvider } from './Context/DataContext';
import Home from './Pages/Home';
import Contacto from './Pages/Contacto';
import DentistaDetail from './Pages/DentistaDetail';
import Destacados from './Pages/Destacados';
import { FavoritesProvider } from './Context/FavoritesProvider';

const Main = () => {
  return (
    <Router>
      <ThemeProvider>
        <DataProvider>
          <FavoritesProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/dentist/:id" element={<DentistaDetail />} />
              <Route path="/destacados" element={<Destacados />} />
            </Routes>
          </FavoritesProvider>
        </DataProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Main;