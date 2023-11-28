import React, { useEffect } from 'react';
import { useData } from '../Context/DataContext';

import '../Css/Home.css'; // Archivo de estilos para Home
import Card from '../components/Card';

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
    </div>
  );
};

export default Home;