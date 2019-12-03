/**
 * INSTALL
 *  - npm install --save-dev @testing-library/jest-dom @testing-library/react
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TaskApp from './TaskApp';

xdescribe('<TaskApp /> (Testing-library)', () => {
  it('render without crashing (testing-library)', () => {
    const { getByRole } = render(<TaskApp />);
    expect(getByRole('heading')).toBeVisible();
  });
});
