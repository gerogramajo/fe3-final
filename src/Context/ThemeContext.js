import React, { createContext, useReducer, useContext } from 'react';

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, isDarkTheme: !state.isDarkTheme };
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  const [themeState, dispatch] = useReducer(themeReducer, { isDarkTheme: false });

  return (
    <ThemeContext.Provider value={{ themeState, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };