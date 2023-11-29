const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      const updatedFavoritesAdd = [...state, action.payload];
      localStorage.setItem('favorites', JSON.stringify(updatedFavoritesAdd));
      return updatedFavoritesAdd;
    case 'REMOVE_FROM_FAVORITES':
      const updatedFavoritesRemove = state.filter((fav) => fav.id !== action.payload.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavoritesRemove));
      return updatedFavoritesRemove;
    case 'INITIALIZE_FAVORITES':
      return action.payload;
    default:
      return state;
  }
};

export default favoritesReducer;