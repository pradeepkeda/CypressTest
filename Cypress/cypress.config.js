const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ocnw76",
  e2e: {

    baseUrl: "https://magento.softwaretestingboard.com/",
    setupNodeEvents(on, config) {

      /*  on('before:browser:launch', (browser = {}, launchOptions) => {
          if (browser.family === 'chromium' && browser.name !== 'electron') {
            launchOptions.args.push("--incognito");
            return launchOptions
          }
        })
  
        on('before:browser:launch', (browser, launchOptions) => {
          if (browser.family === 'chromium') {
            launchOptions.args.push('--disable-logging');
            return launchOptions;
          }
        });
  
  */
    },
    // "proxyServer": false,
    chromeWebSecurity: false,


  },



  chromeWebSecurity: false,

  watchForFileChanges: false,


});
