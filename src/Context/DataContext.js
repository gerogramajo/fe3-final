import React, { createContext, useReducer, useContext } from 'react';

const DataContext = createContext();

const initialState = {
  data: [],
  favorites: [],
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'TOGGLE_FAVORITE':
      const isFavorite = state.favorites.some((item) => item.id === action.payload.id);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter((item) => item.id !== action.payload.id)
          : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const setData = (data) => {
    dispatch({ type: 'SET_DATA', payload: data });
  };

  const toggleFavorite = (item) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: item });
  };

  return (
    <DataContext.Provider value={{ data: state.data, favorites: state.favorites, setData, toggleFavorite, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

const useDataDispatch = () => useContext(DataContext).dispatch;

export { DataProvider, useData, useDataDispatch };