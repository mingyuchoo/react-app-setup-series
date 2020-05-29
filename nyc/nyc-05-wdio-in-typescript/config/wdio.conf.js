// const baseUrl = 'http://computer-database.gatling.io/compute'

exports.config = {
  runner: "local",
  specs: ["test/**/*.spec.ts"],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome"
    }
  ],
  logLevel: "error",
  deprecationWarnings: true,
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ["selenium-standalone"],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
    compilers: ["tsconfig-paths/register"]
  },
  before: function(capabilities, specs) {
    require("ts-node").register({ files: true });
  },
  afterTest: function(test) {
    if (test.error !== undefined) {
      let name = "ERROR-" + Date.now();
      browser.saveScreenshot("./errorShots/" + name + ".png");
    }
  }
};
