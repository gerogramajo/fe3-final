import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import appReducer from './context/AppReducer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Routes/Home';
import Contacto from './Routes/Contacto';
import DentistaDetail from './Routes/DentistaDetail';
import Destacados from './Routes/Destacados';

const Main = () => {
  return (
    <Router>
      <ThemeProvider>
        <DataProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/dentist/:id" component={DentistaDetail} />
            <Route path="/destacados" component={Destacados} />
          </Switch>
        </DataProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Main;