import React, { createContext } from 'react';

const AppContext = createContext();

export const AppContextProvider = (props) => {
  return (
    <AppContext.Provider value={props.value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
