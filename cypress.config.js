const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "ut7fe5",
    baseUrl: "http://qamid.tmweb.ru",
    retries: 1,
    viewportHeight: 1200,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
