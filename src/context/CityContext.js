import React, { createContext, useState, useContext } from 'react';

// Create the context for the city
const CityContext = createContext();

// CityProvider component to wrap around the app and provide the city context
export const CityProvider = ({ children }) => {
  const [city, setCity] = useState("");

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

// Custom hook to access the city context
export const useCity = () => useContext(CityContext);
