import axios from "axios";
import Users from "./users";

describe("users.spec.ts", () => {
  // jest.mock("axios");

  test("should fetch users", () => {
    const users = [{ name: "Bob" }];
    const resp = { data: users };
    axios.get = jest.fn().mockResolvedValue(resp);

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then((data) => expect(data).toEqual(users));
  });
});
