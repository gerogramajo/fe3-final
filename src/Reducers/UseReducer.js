const UseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, favorites: state.favorites.filter((fav) => fav.id !== action.payload.id) };
    case 'TOGGLE_THEME':
      return { ...state, isDarkTheme: !state.isDarkTheme };
    default:
      return state;
  }
};

export default UseReducer;