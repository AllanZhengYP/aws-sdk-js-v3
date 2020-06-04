const base = require("./jest.config.base.js");

module.exports = {
  ...base,
  preset: "jest-puppeteer",
  testMatch: ["(.*).browser.spec.js"],
  projects: [
    "<rootDir>/packages/*/jest.config.browser.js"
    // "<rootDir>/clients/*/jest.config.browser.js"
  ],
  testPathIgnorePatterns: ["/node_modules/"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/clients/client-.*",
    "/__fixtures__/"
  ]
};
