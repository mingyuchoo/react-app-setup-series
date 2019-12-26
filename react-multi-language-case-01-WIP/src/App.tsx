import React, { ReactElement } from 'react';

import { LanguageProvider } from './containers/Language';

import LanguageSelector from './components/LanguageSelector';
import Explore from './components/Explore';

/**
 * https://github.com/hcoz/react-context-multilang
 */
const App: React.FC = (): ReactElement => {
  return (
    <LanguageProvider>
      <div className="App">
        <header className="App-header">
          <LanguageSelector />
        </header>

        <Explore />
      </div>
    </LanguageProvider>
  );
};

export default App;
