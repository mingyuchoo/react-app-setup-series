import React, { useContext } from 'react';

export const LanguageContext = React.createContext({ lang: 'en' });

const Display = () => {
  const { lang } = useContext(LanguageContext);
  return <p>Your selected language: {lang}</p>;
};

export default Display;
