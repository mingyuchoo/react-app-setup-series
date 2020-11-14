jest.mock("./sum");
import sum from "./sum";

describe("mock-imple.spec.ts", () => {
  test("Mock Implementations", () => {
    // sum is a mock function
    const sum = jest.fn().mockImplementation(() => 42);
    expect(sum()).toBe(42);
  });
});
