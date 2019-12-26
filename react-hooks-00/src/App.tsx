import React, { ReactElement, useCallback } from 'react';

import StatedCounter from './components/StatedCounter';
import Display from './components/Display';
import TextInputWithFocusButton from './components/TextInputWithFocusButton';
import ReducedCounter from './components/ReducedCounter';
import ReducerSample from './components/ReducerSample';

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
      <StatedCounter />
      <Display />
      <TextInputWithFocusButton />
      <ReducedCounter initialCount={0} />
      <ReducerSample />
    </div>
  );
};

export default App;
