import { MockedProvider } from '@apollo/client/testing';
import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import Cat, { GET_CAT_QUERY } from './Cat';

describe('<Cat />', () => {
  afterEach(cleanup);

  it('[1]', async () => {
    // mock
    const catMock = {
      request: {
        query: GET_CAT_QUERY,
        variables: { name: 'Gimchi' },
      },
      result: {
        data: { cat: { id: 1, name: 'Gimchi', breed: 'persian' } },
      },
    };

    // component
    const { container, debug, unmount } = render(
      <MockedProvider
        mocks={[catMock]}
        addTypename={false}
        defaultOptions={{
          watchQuery: { fetchPolicy: 'no-cache' },
          query: { fetchPolicy: 'no-cache' },
          mutate: { fetchPolicy: 'no-cache' },
        }}
      >
        <Cat name="Gimchi" />
      </MockedProvider>
    );

    // [1] loading 상태일 때 나오는 Loading... 문자열을 테스트 하는 것은
    // 테스트 코드가 실행되는 시간이나 데이터를 로딩하는 속도에 따라 상황이 바뀌므로
    // 테스트 코드로 만들지 않는게 일관된 테스트 결과를 기대할 수 있었다.

    // await waitFor(() => container.querySelector('p'));
    // expect(screen.getByText(/Loading.../)).toBeTruthy();

    // console.debug('-------------------');
    // console.debug(debug());
    // console.debug('-------------------');

    // [2] data를 받은 상태일 때는
    // getByText 값이 기대한 문자열과 같을 때(참일 때)까지 기다린다.
    await waitFor(() => {
      expect(screen.getByText('Gimchi is a persian')).toBeTruthy();
    });
    console.debug('-------------------');
    console.debug(debug());
    console.debug('-------------------');

    // Unmount
    unmount();
  });

  it('[2]', async () => {
    // mock
    const catMock = {
      request: {
        query: GET_CAT_QUERY,
        variables: { name: 'Chamchi' },
      },
      result: {
        data: { cat: { id: 1, name: 'Chamchi', breed: 'bengal' } },
      },
    };

    // component
    const { container, debug, unmount } = render(
      <MockedProvider
        mocks={[catMock]}
        addTypename={false}
        defaultOptions={{
          watchQuery: { fetchPolicy: 'no-cache' },
          query: { fetchPolicy: 'no-cache' },
          mutate: { fetchPolicy: 'no-cache' },
        }}
      >
        <Cat name="Chamchi" />
      </MockedProvider>
    );

    // [1] loading 상태일 때 나오는 Loading... 문자열을 테스트 하는 것은
    // 테스트 코드가 실행되는 시간이나 데이터를 로딩하는 속도에 따라 상황이 바뀌므로
    // 테스트 코드로 만들지 않는게 일관된 테스트 결과를 기대할 수 있었다.

    // await waitFor(() => container.querySelector('p'));
    // expect(screen.getByText(/Loading.../)).toBeTruthy();

    // console.debug('-------------------');
    // console.debug(debug());
    // console.debug('-------------------');

    // [2] Check Data value
    await waitFor(() => {
      expect(screen.getByText('Chamchi is a bengal')).toBeTruthy();
    });
    console.debug('-------------------');
    console.debug(debug());
    console.debug('-------------------');

    // Unmount
    unmount();
  });
});
