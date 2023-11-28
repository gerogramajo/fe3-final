import React, { useEffect } from 'react';
import { useData } from '../Context/DataContext';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import '../Css/Home.css' // Archivo de estilos para Home
import { useTheme } from '../Context/ThemeContext';

const Home = () => {
  const { data, setData } = useData();
  const { themeState, dispatch } = useTheme();

  useEffect(() => {
    // Simulación de llamada a la API
    const fetchData = async () => {
      // Usando una URL de prueba para este ejemplo
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [setData]);

  const handleToggleTheme = () => {
    // Disparar la acción para cambiar el tema
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div className={`home-container ${themeState.isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <h1>Lista de Dentistas</h1>
      <div className="cards-container">
        {data.map((dentista) => (
          <Card key={dentista.id} {...dentista} />
        ))}
      </div>
      {/* Botón para cambiar el tema */}
      <button onClick={handleToggleTheme} className="theme-button">
        Cambiar Tema
      </button>
      {/* Botón para redirigir a la página de contacto */}
      <Link to="/contacto" className="contact-button">
        Ir a Contacto
      </Link>
    </div>
  );
};

export default Home;