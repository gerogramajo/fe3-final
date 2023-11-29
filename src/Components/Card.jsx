import React from "react";
import { Link } from 'react-router-dom';
import { useFavorites } from '../Context/FavoritesProvider';

const Card = ({ name, username, id }) => {
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();

  const isFavorite = favorites.some((fav) => fav.id === id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites({ id, name, username });
    } else {
      addToFavorites({ id, name, username });
    }
  };
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <button onClick={toggleFavorite} className={`favButton ${isFavorite ? 'favorited' : ''}`}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <Link to={`/dentist/${id}`} className="detailLink">
        Detalles
      </Link>
    </div>
  );
};

export default Card;
