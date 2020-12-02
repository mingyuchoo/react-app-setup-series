import { MockedProvider } from '@apollo/client/testing';
import { cleanup, render, RenderResult, screen, waitFor } from '@testing-library/react';
import React from 'react';

import Dog, { GET_DOG_QUERY } from './Dog';

// 입력 데이터
const inputArray = [
  {
    name: 'ERROR CASE',
    variables: { name: 'Buck' },
    result: {},
    error: new Error('This is an error.'),
    expect: 'Error!',
  },
  {
    name: 'NO DATA CASE',
    variables: { name: 'Buck' },
    result: {},
    expect: 'No data',
  },
  {
    name: 'POSITVE CASE 1',
    variables: { name: 'Buck' },
    result: { data: { dog: { id: 1, name: 'Buck', breed: 'poodle' } } },
    expect: 'Buck is a poodle',
  },
  {
    name: 'POSITVE CASE 2',
    variables: { name: 'Mini' },
    result: { data: { dog: { id: 2, name: 'Mini', breed: 'dachshund' } } },
    expect: 'Mini is a dachshund',
  },
];

// 쿼리와 입력데이터를 받아 객체로 넘겨주는 함수
function getMock(query, input) {
  return {
    request: {
      query: query,
      variables: input.variables,
    },
    result: input.result,
    error: input.error,
  };
}

function cleanUp(renderResult: RenderResult, debugMode = false) {
  if (debugMode) renderResult.debug();
  renderResult.unmount();
}

describe('<Dog />', () => {
  afterEach(() => {
    cleanup;
  });

  inputArray.map((input, index) => {
    it(`[${index}] - ${input.name}`, async () => {
      const dogMock = getMock(GET_DOG_QUERY, input);

      const renderResult = render(
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

      // [1] loading 상태일 때 나오는 Loading... 문자열을 테스트 하는 것은
      // 테스트 코드가 실행되는 시간이나 데이터를 로딩하는 속도에 따라 상황이 바뀔 수 있다.
      expect(screen.getByText('Loading...')).toBeInTheDocument();

      // [2] data를 받은 상태일 때는
      // getByText 값이 기대한 문자열과 같을 때(참일 때)까지 기다린다.
      await waitFor(() => {
        expect(screen.getByText(input.expect)).toBeInTheDocument();
      });

      cleanUp(renderResult);
    });
  });
});
