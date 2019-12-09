import React from 'react';

import DataLoader from './DataLoader';
import axios from 'axios';
import { cleanup, render, waitForElement } from '@testing-library/react';

xdescribe('<DataLoader /> (Testing-library)', () => {
  beforeAll(() => {
    axios.get = jest.fn().mockResolvedValueOnce([
      { id: 1, title: 'Load of Rings' },
      { id: 2, title: 'Mars' },
    ]);
  });

  afterEach(cleanup);

  it('render ', async () => {
    const { getByText } = render(<DataLoader />);
    const mars = await waitForElement(() => getByText('Mars'));
    expect(mars).toHaveTextContent('Mars');
  });
});
