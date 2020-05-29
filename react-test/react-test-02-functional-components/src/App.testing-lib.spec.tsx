/**
 * INSTALL
 *  - npm install --save-dev @testing-library/jest-dom @testing-library/react
 */

import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

it('render without crashing (testing-library)', () => {
  const { getByRole } = render(<App />);
  expect(getByRole('heading')).toBeVisible();
});
