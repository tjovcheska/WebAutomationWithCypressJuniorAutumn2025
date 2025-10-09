const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    viewportHeight: 1000,
    viewportWidth: 1000,
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 6000,
    video: true,
    videosFolder: "cypress/videos",
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    trashAssetsBeforeRuns: true
    // defaultBrowser: "firefox",
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      overwrite: false,
      html: false,
      json: true
    }
  }
});
