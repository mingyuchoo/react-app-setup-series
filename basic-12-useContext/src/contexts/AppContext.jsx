import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

export const AppContextProvider = ({ value, children }) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  value: PropTypes.any,
  children: PropTypes.any,
};

export default AppContext;
