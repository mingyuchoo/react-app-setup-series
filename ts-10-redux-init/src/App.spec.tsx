// for testing-library
import { cleanup, render } from '@testing-library/react';
import React from 'react';

// target to test
import App from './App';

afterEach(cleanup);

describe('<App />', () => {
  it('[testing-libaray] should render', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('App')).toBeTruthy();
  });
});
