const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const fs = require('fs');

// 读取环境变量文件
const envFile = `${process.cwd()}/cypress.env.json`;
const env = fs.existsSync(envFile) ? require(envFile) : {};

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/features/*.feature',
    supportFile: 'cypress/support/e2e.js',
    baseUrl: env.baseUrl || 'http://the-internet.herokuapp.com',
    defaultCommandTimeout: env.timeouts?.defaultCommandTimeout || 4000,
    pageLoadTimeout: env.timeouts?.pageLoadTimeout || 30000,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Cypress Cucumber Tests',
      embeddedScreenshots: true,
      inlineAssets: true
    },
    video: true,
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      
      require('cypress-mochawesome-reporter/plugin')(on);
      
      // 合并环境变量
      config.env = { ...config.env, ...env };
      
      return config;
    },
  },
});
