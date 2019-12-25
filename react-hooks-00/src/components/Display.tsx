import React, { useContext } from 'react';

export const LanguageContext = React.createContext({ lang: 'en' });

const Display = () => {
  let { lang } = useContext(LanguageContext);
  return <p>Your selected language: {lang}</p>;
};

export default Display;
