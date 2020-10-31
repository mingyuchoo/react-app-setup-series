import React from 'react';
import { cleanup, waitFor, render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
// import renderer, { act, ReactTestRendererJSON } from 'react-test-renderer';
// import wait from 'waait';
import { debug } from 'console';

// The component AND the query need to be exported
import { GET_DOG_QUERY, Dog } from './Dog';

describe('<Dog />', () => {
  afterEach(cleanup);
  // it('[1]', async () => {
  //   const component = renderer.create(
  //     <MockedProvider
  //       mocks={[]}
  //       addTypename={false}
  //       defaultOptions={{
  //         watchQuery: { fetchPolicy: 'no-cache' },
  //         query: { fetchPolicy: 'no-cache' },
  //         mutate: { fetchPolicy: 'no-cache' },
  //       }}
  //     >
  //       <Dog name="Buck" />
  //     </MockedProvider>
  //   );
  //   // await act(wait);
  //   const tree = component.toJSON() as ReactTestRendererJSON;
  //   expect(tree.children).toContain('Loading...');
  // });
  it('[3]', async () => {
    // mock
    const dogMock = {
      request: {
        query: GET_DOG_QUERY,
        variables: { name: 'Buck' },
      },
      result: {
        data: { dog: { id: 1, name: 'Buck', breed: 'poodle' } },
      },
    };

    // component
    const { getByText } = render(
      <MockedProvider
        mocks={[dogMock]}
        addTypename={false}
        defaultOptions={{
          watchQuery: { fetchPolicy: 'no-cache' },
          query: { fetchPolicy: 'no-cache' },
          mutate: { fetchPolicy: 'no-cache' },
        }}
      >
        <Dog name="Buck" />
      </MockedProvider>
    );

    // check
    await waitFor(() => {
      const p = component.getByRole('p');
      expect(p.children).toEqual(['Buck', ' is a ', 'poodle']);
    });
  });
});
