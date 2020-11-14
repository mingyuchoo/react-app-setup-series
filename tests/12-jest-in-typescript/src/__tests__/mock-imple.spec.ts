import sum from '../sum';

// 패키지를 목킹한다.
jest.mock('../sum');

// 테스트 코드
describe('mock-imple.spec.ts', () => {
  test('Mock Implementations', () => {
    // sum() 를 임의로 목킹한다.
    const sum = jest.fn().mockImplementation(() => 42);

    // 함수를 실행해서 결과를 비교한다.
    expect(sum()).toBe(42);
    expect(sum).toHaveBeenCalledTimes(1);
  });
});
