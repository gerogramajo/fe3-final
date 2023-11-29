const UseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return [...state, action.payload];
    case 'REMOVE_FROM_FAVORITES':
      return state.filter((fav) => fav.id !== action.payload.id);
    default:
      return state;
  }
};
  
  export default UseReducer;