import getNumber from '../myfun';

// 패키지를 목킹한다.
jest.mock('../myfun');

// 테스트할 함수
const add = (a: number) => a + getNumber();

// 테스트 코드
describe('myfun.spec.ts', () => {
  test('adding function with Mock', () => {
    // 함수 실행
    add(2);

    // getNumber가 실행되었는지 확인한다.
    expect(getNumber).toHaveBeenCalled();
    expect(getNumber).toHaveBeenCalledTimes(1);
  });
});
