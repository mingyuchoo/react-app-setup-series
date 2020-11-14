// axios 는 users.ts 에서 사용한다.
import axios from 'axios';

import Users from '../users';

// 패키지를 목킹한다.
jest.mock('axios');

describe('users.spec.ts', () => {
  test('should fetch users', () => {
    const users = [{ name: 'Bob' }];
    const response = { data: users };

    // axios의 get() 의 응답를 임의로 설정한다.
    axios.get = jest.fn().mockResolvedValue(response);

    // axios의 get()를 사용하는 Users를 실행한다.
    return Users.all().then((data) => {
      expect(data).toEqual(users);
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });
});
