import getNumber from "./myfun";

// Mocking the "Package"
jest.mock("./myfun");

// Function to test
const add = (a: number) => a + getNumber();

describe("myfun.spec.ts", () => {
  test("adding function with Mock", () => {
    add(2);

    expect(getNumber).toHaveBeenCalled();
  });
});
