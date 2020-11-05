import { MockedProvider } from '@apollo/client/testing';
import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import Dog, { GET_DOG_QUERY } from './Dog';

// 입력 데이터
const inputArray = [
  { variables: { name: 'Buck' }, data: { dog: { id: 1, name: 'Buck', breed: 'poodle' } } },
  { variables: { name: 'Mini' }, data: { dog: { id: 1, name: 'Mini', breed: 'dachshund' } } },
];

// 쿼리와 입력데이터를 받아 객체로 넘겨주는 함수
function getMock(query, input) {
  return {
    request: {
      query: query,
      variables: input.variables,
    },
    result: {
      data: input.data,
    },
  };
}

describe('<Dog />', () => {
  afterEach(cleanup);

  inputArray.map((input, index) => {
    it(`[${index}]`, async () => {
      const dogMock = getMock(GET_DOG_QUERY, input);
      // component
      const { container, debug, unmount } = render(
        <MockedProvider
          mocks={[dogMock]}
          addTypename={false}
          defaultOptions={{
            watchQuery: { fetchPolicy: 'no-cache' },
            query: { fetchPolicy: 'no-cache' },
            mutate: { fetchPolicy: 'no-cache' },
          }}
        >
          <Dog name={input.variables.name} />
        </MockedProvider>
      );

      // // Check loading status
      // await waitFor(() => container.querySelector('p'));
      // expect(screen.getByText(/Loading.../)).toBeTruthy();

      // Check Data value
      await waitFor(() => {
        expect(screen.getByText(`${input.variables.name} is a ${input.data.dog.breed}`)).toBeTruthy();

        // Unmount
        unmount();
      });
    });
  });

  // it('[2]', async () => {
  //   // mock
  //   const dogMock = {
  //     request: {
  //       query: GET_DOG_QUERY,
  //       variables: { name: 'Mini' },
  //     },
  //     result: {
  //       data: { dog: { id: 1, name: 'Mini', breed: 'dachshund' } },
  //     },
  //   };

  //   // component
  //   const { container, debug, unmount } = render(
  //     <MockedProvider
  //       mocks={[dogMock]}
  //       addTypename={false}
  //       defaultOptions={{
  //         watchQuery: { fetchPolicy: 'no-cache' },
  //         query: { fetchPolicy: 'no-cache' },
  //         mutate: { fetchPolicy: 'no-cache' },
  //       }}
  //     >
  //       <Dog name="Mini" />
  //     </MockedProvider>
  //   );

  //   // Check loading status
  //   await waitFor(() => {
  //     container.querySelector('p');
  //     expect(screen.getByText(/Loading.../)).toBeTruthy();
  //   });

  //   // Check Data value
  //   await waitFor(() => {
  //     expect(screen.getByText('Mini is a dachshund')).toBeTruthy();
  //   });

  //   // Unmount
  //   unmount();
  // });
});
