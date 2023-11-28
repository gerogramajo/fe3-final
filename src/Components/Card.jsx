import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {

  const addFav = () => {
    // Obtener el array de favoritos actual del localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Verificar si la card ya está en favoritos por su id
    const isAlreadyFav = favorites.some(fav => fav.id === id);

    // Si no está en favoritos, agregarla
    if (!isAlreadyFav) {
      const newFavorite = { id, name, username };
      favorites.push(newFavorite);

      // Actualizar el localStorage con la nueva lista de favoritos
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
      <Link to={`/dentist/${id}`} className="detailLink">
        Detalles
      </Link>
    </div>
  );
};

export default Card;
