import React, { ReactElement, useCallback } from 'react';

import Counter from './components/Counter';
import Display from './components/Display';
import TextInputWithFocusButton from './components/TextInputWithFocusButton';
import ReducedCounter from './components/ReducedCounter';

/**
 * https://fettblog.eu/typescript-react/hooks/
 */
const App: React.FC = (): ReactElement => {
  const memoCallback = useCallback((a: number) => {
    console.log(a);
  }, []);
  memoCallback(3);

  return (
    <div className="App">
      <Counter />
      <Display />
      <TextInputWithFocusButton />
      <ReducedCounter />
    </div>
  );
};

export default App;
