import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DentistaDetail = () => {
  const { id } = useParams();
  const [dentista, setDentista] = useState(null);

  useEffect(() => {
    const fetchDentistaDetail = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setDentista(response.data);
      } catch (error) {
        console.error('Error fetching dentista details:', error);
      }
    };

    fetchDentistaDetail();
  }, [id]);

  return (
    <div>
      <h1>Detalle del Dentista</h1>
      {dentista ? (
        <div>
          <h2>{dentista.name}</h2>
          <p>Email: {dentista.email}</p>
          <p>Teléfono: {dentista.phone}</p>
          <p>Sitio web: {dentista.website}</p>
        </div>
      ) : (
        <p>Cargando detalles del dentista...</p>
      )}
    </div>
  );
};

export default DentistaDetail;