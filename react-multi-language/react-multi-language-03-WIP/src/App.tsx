import React, { ReactElement } from 'react';

import { isLocale, Locale } from './translations/types';
import { LocaleProvider } from './context/LocaleContext';

import Artist from './components/Artist';
import Explore from './components/Explore';
import LocaleSwitcher from './components/LocaleSwitcher';
/**
 * https://github.com/hcoz/react-context-multilang
 */
const App: React.FC = (): ReactElement => {
  return (
    <>
      <LocaleSwitcher />
      <Artist />
      <Explore />
    </>
  );
};

export default App;
