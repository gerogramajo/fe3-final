import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/home';
import Contacto from './Pages/contacto';
import DentistaDetail from './Pages/DentistaDetail';
import Destacados from './Pages/Destacados';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';


const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <DataProvider>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/contacto" component={Contacto} />
              <Route path="/dentist/:id" component={DentistaDetail} />
              <Route path="/destacados" component={Destacados} />
            </Switch>
            <Footer />
          </div>
        </DataProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;