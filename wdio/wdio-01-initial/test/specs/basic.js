const assert = require("assert");

// // sync
// describe("webdriver.io page", () => {
//   it("should have the right title", () => {
//     browser.url("https://webdriver.io");
//     const title = browser.getTitle();
//     assert.strictEqual(
//       title,
//       "WebdriverIO · Next-gen WebDriver test framework for Node.js"
//     );
//   });
// });

// async
describe("webdriver.io page", () => {
  it("should have the right title", async () => {
    await browser.url("http://computer-database.gatling.io/computers");
    const title = await browser.getTitle();
    assert.strictEqual(
      title,
      "Play sample application — Computer database"
    );
  });
});
