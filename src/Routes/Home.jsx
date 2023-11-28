import React, { useEffect } from 'react';
import { useData } from '../Context/DataContext';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import '../Css/Home.css' // Archivo de estilos para Home

const Home = () => {
  const { data, setData } = useData();

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

  return (
    <div className="home-container">
      <h1>Lista de Dentistas</h1>
      <div className="cards-container">
        {data.map((dentista) => (
          <Card key={dentista.id} {...dentista} />
        ))}
      </div>
      {/* Botón para redirigir a la página de contacto */}
      <Link to="/contacto">
        <button className="contact-button">Ir a Contacto</button>
      </Link>
    </div>
  );
};

export default Home;