// for testing-library
import { cleanup, render } from '@testing-library/react';
import React from 'react';

// target to test
import { Hello1, Hello2, HelloProps } from './Hello';

afterEach(cleanup);

describe('Hello.tsx', () => {
  const propsList: Array<HelloProps> = [
    { compiler: 'typescript', framework: 'React' },
    { compiler: 'java', framework: 'Spring Boot' },
  ];
  describe('<Hello1 />', () => {
    propsList.forEach((item) => {
      it('[testing-libaray] should render', () => {
        const { getByText } = render(
          <Hello1 compiler={item.compiler} framework={item.framework} />
        );
        expect(
          getByText((content) => content.includes(`${item.compiler}`))
        ).toBeTruthy();
      });
    });
  });

  describe('<Hello2 />', () => {
    propsList.forEach((item) => {
      it('[testing-libaray] should render', () => {
        const { getByText } = render(
          <Hello2 compiler={item.compiler} framework={item.framework} />
        );
        expect(
          getByText((content) => content.includes(`${item.compiler}`))
        ).toBeTruthy();
      });
    });
  });
});
