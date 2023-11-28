import React, { useEffect } from 'react';
import { useData } from '../context/DataContext';
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
    <div>
      <h1>Lista de Dentistas</h1>
      <div>
        {data.map((dentista) => (
          <Card key={dentista.id} {...dentista} />
        ))}
      </div>
    </div>
  );
};

export default Home;