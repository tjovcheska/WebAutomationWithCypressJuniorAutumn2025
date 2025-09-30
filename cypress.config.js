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
    // defaultBrowser: "firefox",
  },
});
