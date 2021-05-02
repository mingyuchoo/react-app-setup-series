import React from 'react';

// for testing-library
import { cleanup, render, waitFor } from '@testing-library/react';

// target to test
import { HelloProps, Hello1, Hello2 } from './Hello';

afterEach(cleanup);

describe('Hello.tsx', () => {
  const propsList: Array<HelloProps> = [
    { compiler: 'typescript', framework: 'React' },
    { compiler: 'java', framework: 'Spring Boot' },
  ];
  describe('<Hello1 />', () => {
    propsList.forEach((item) => {
      it('[testing-libaray] should render', () => {
        const { getByTestId, getByText } = render(
          <Hello1 compiler={item.compiler} framework={item.framework} />
        );
        expect(getByTestId('hello1-h1')).toBeTruthy();
        expect(
          getByText((content) => content.includes(`${item.compiler}`))
        ).toBeTruthy();
      });
    });
  });

  describe('<Hello2 />', () => {
    propsList.forEach((item) => {
      it('[testing-libaray] should render', () => {
        const { getByTestId, getByText } = render(
          <Hello2 compiler={item.compiler} framework={item.framework} />
        );
        expect(getByTestId('hello2-h1')).toBeTruthy();
        expect(
          getByText((content) => content.includes(`${item.compiler}`))
        ).toBeTruthy();
      });
    });
  });
});
