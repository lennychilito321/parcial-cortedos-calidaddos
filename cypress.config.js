const { defineConfig } = require("cypress");

module.exports = defineConfig({
<<<<<<< HEAD
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://www.zentaro.business', 
  },
});
=======
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
>>>>>>> 8ee33ab74c88acd7d22970e04eeb01a89356e8be
