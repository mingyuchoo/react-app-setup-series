import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subColor, setSubColor] = useState('red');

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

ColorProvider.propTypes = {
  children: PropTypes.any,
};

export const { Consumer: ColorConsumer } = ColorContext;

export default ColorContext;
