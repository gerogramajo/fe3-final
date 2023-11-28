import React from 'react';
import { useData } from '../Context/DataContext';
import Card from '../Components/Card';

const Destacados = () => {
  const { favorites } = useData();

  return (
    <div>
      <h1>Dentistas Destacados</h1>
      <div>
        {favorites.map((dentista) => (
          <Card key={dentista.id} {...dentista} />
        ))}
      </div>
    </div>
  );
};

export default Destacados;