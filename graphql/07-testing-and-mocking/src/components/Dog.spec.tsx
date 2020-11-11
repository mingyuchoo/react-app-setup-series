/**
 * @testing-library/react 를 시용하는 사례
 *
 */
import { MockedProvider } from '@apollo/client/testing';
import React from 'react';
import { act, create } from 'react-test-renderer';

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
  //afterEach(cleanup);

  inputArray.map((input, index) => {
    it(`[${index}]`, async () => {
      const dogMock = getMock(GET_DOG_QUERY, input);

      const component = create(
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

      await new Promise((resolve) => setTimeout(resolve, 0));

      // ASSERTION [1]
      // 의도한 렌더링 결과를 저장해 놓고
      // 다시 실행할 때, 같은 렌더링 결과를 갖는지 검증하기에 좋다.
      // 스냅샷을 갱신하려면 jest --updateSnapshot 이나 jest -u 옵션을 사용하면 된다.
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();

      // ASSERTION [2]
      // 렌더링 했을 때 콤포넌트의 props가 제대로 나오는지 확인하는데
      // 콤포넌트가 전체적으로 어떻게 렌더링되는지 확인할 수 없어 좋지 않은 검증 방법이다.
      const instance = component.root;
      expect(instance.findByType(Dog).props.name).toBe(input.variables.name);
    });
  });
});
