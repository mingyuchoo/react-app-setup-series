import sum from '../sum';

describe('sum.ts', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('basic again', () => {
    expect(sum(1, 2)).toBe(3);
  }, 1000 /* optional timeout */);
});
