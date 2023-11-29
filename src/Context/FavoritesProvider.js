import React, { createContext, useContext, useReducer, useEffect } from 'react';
import FavoritesReducer from '../Reducers/FavoritesReducer';

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, dispatchFavorites] = useReducer(FavoritesReducer, []);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatchFavorites({ type: 'INITIALIZE_FAVORITES', payload: storedFavorites });
  }, []);

  const addToFavorites = (dentist) => {
    dispatchFavorites({ type: 'ADD_TO_FAVORITES', payload: dentist });
  };

  const removeFromFavorites = (dentist) => {
    dispatchFavorites({ type: 'REMOVE_FROM_FAVORITES', payload: dentist });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, dispatchFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};