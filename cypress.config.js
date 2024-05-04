const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default
module.exports = defineConfig({
  e2e: {
        setupNodeEvents(on, config) {
        on('file:preprocessor',cucumber())
    },
    specPattern:"cypress/Integration/*.feature",
    baseUrl:'https://www.saucedemo.com'
    },
    
  
});
