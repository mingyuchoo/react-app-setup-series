const Jasmine = require("jasmine");
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
const jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: "test",
  spec_files: ["**/*.spec.js"],
  helpers: ["helpers/**/*.js"],
  stopSpecOnExpectationFailure: false,
  random: true
});

jasmine.onComplete(function(passed) {
  if (passed) {
    console.log("RESULT> All specs have passed");
  } else {
    console.log("RESULT> At least one spec has failed");
  }
});

jasmine.env.clearReporters();
jasmine.env.addReporter(
  new SpecReporter({
    spec: {
      displayPending: true
    }
  })
);

jasmine.execute();
