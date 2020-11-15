function sum(x, y) {
  return x + y;
}

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

describe('mock.spec.ts', () => {
  test('2 + 3 return 5', () => {
    // mocked the function to test
    const sum = jest.fn((x, y) => x + y);

    // assert
    expect(sum(2, 3)).toBe(5);
    expect(sum).toHaveBeenCalled();
    expect(sum).toHaveBeenCalledTimes(1);
    expect(sum).toHaveBeenCalledWith(2, 3);
  });

  test('callback', () => {
    // mocked callback function using in the function to test
    const mockCallback = jest.fn((x: number) => 42 + x);

    // call the function to test
    forEach([0, 1], mockCallback);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2); // because of [0, 1]
    expect(mockCallback).toHaveBeenCalledTimes(2); // because of [0, 1]

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});
