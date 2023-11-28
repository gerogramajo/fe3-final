import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import { DataProvider } from './Context/DataContext';
import Home from './Routes/Home';
import Contacto from './Routes/Contacto';
import DentistaDetail from './Routes/DentistaDetail';
import Destacados from './Routes/Destacados';


const Main = () => {
  return (
    <Router>
      <ThemeProvider>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/dentist/:id" element={<DentistaDetail />} />
            <Route path="/destacados" element={<Destacados />} />
          </Routes>
        </DataProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Main;