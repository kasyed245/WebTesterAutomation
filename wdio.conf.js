
let browserSetup = require('./settings/wdio.browsers.setup');
var os = require('os');
var info = require('./settings/info');
datetime = info.getFormattedDate("_","_");
var reportSufix = process.env.BUILD_NUMBER || datetime;
exports.config = {
    seleniumArgs: browserSetup,
    seleniumInstallArgs: browserSetup,
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
       // './features/**/*.feature'
       './features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 2,
        //
        //browserName: 'internet explorer'
      // browserName: 'chrome'
        browserName: process.env.BROWSER || 'chrome',
        metadata: {
          device: os.type(),
          platform: {
              name: "Windows",
              version: "10",
           }
          }
    }],
     // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide/reporters/dot.html
    reporters: ['spec','multiple-cucumber-html','allure'],//,'junit','allure','json'],
    reporterOptions : {
      allure : {
         outputDir : 'allure-results',//./allure-results/'+reportSufix+'/',
         disableWebdriverScreenshotsReporting: false,
         useCucumberStepReporter: true
       },
        htmlReporter:{
        jsonFolder : './json/json_'+reportSufix+'/', 
        reportFolder:'./HTMLReports/Report_'+reportSufix+'/'
        ,pageTitle : 'Arezzo Website Test Title'
        ,reportName : 'Arezzo Website Test Report'
        ,pageFooter : '<div><center><p> Arezzo Website Test UI Report by Khurram Syed</p></center></div>'
        ,customData: {
          title: 'Run info',
          data: [
              {label: 'Project', value: 'Arezzo Website'},
              {label: 'Release', value: '7.4.7719'},
              {label: 'Cycle', value: 'Release'},
              {label: 'Execution Start Time', value: info.getNewFormattedDateTime()},
              {label: 'Execution End Time', value: info.getNewFormattedDateTime()}
          ]
         }
       }    //    }  
             // junit : {
       //    outputDir : './JUnit'
       //  },

       // ,json : {
       //    outputDir : 'json',
       //     combined: true,
       //     filename : 'cucumber'
      //  }
   
    },
  
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // e.g. using promises you can set the sync option to false.
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'verbose',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Warns when a deprecated command is used
    deprecationWarnings: true,
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'http://10.183.94.187/app/',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 30000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Initialize the browser instance with a WebdriverIO plugin. The object should have the
    // plugin name as key and the desired plugin options as properties. Make sure you have
    // the plugin installed before running any tests. The following plugins are currently
    // available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    // plugins: {
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['selenium-standalone'],//,'chromedriver','iedriver'],
    //
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',
    // mochaOpts: {
    //     ui: 'bdd',
    //     timeout:999999
    // },

      // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        require : require('glob').sync('./test/steps/**/*'),
         //  require: ['./test/steps/*.js'],        // <string[]> (file/dir) require files before executing features
        // backtrace: false,   // <boolean> show full backtrace for errors
        // compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        // dryRun: false,      // <boolean> invoke formatters without executing steps
        // failFast: false,    // <boolean> abort the run on first failure
        // format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        // colors: true,       // <boolean> disable colors in formatter output
        // snippets: true,     // <boolean> hide step definition snippets for pending steps
        // source: true,       // <boolean> hide source uris
        // profile: [],        // <string[]> (name) specify the profile to use
        // strict: false,      // <boolean> fail if there are any undefined or pending steps
        // tags: ["@guideline"],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
       // tagExpression: '@test1',//'@guideline',// '@navBar',
        timeout: 200000,     // <number> timeout for step definitions
        // ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },
      //
  
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
     /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before: function (capabilities, specs) {
        console.log('££££ Before ££££££££');
        expect = require('chai').expect;
    },

    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
 
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    
    /**
     * Runs before a Cucumber feature
     * @param {Object} feature feature details
     */
    // beforeFeature: function (feature) {
    // },
    /**
     * Runs before a Cucumber scenario
     * @param {Object} scenario scenario details
     */
    // beforeScenario: function (scenario) {
    // },
    /**
     * Runs before a Cucumber step
     * @param {Object} step step details
     */
    // beforeStep: function (step) {
    // },
    /**
     * Runs after a Cucumber step
     * @param {Object} stepResult step result
     */
    // afterStep: function (stepResult) {
    // },
    /**
     * Runs after a Cucumber scenario
     * @param {Object} scenario scenario details
     */
    // afterScenario: function (scenario) {
    // },
    /**
     * Runs after a Cucumber feature
     * @param {Object} feature feature details
     */
    // afterFeature: function (feature) {
    // },
    
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onComplete: function(exitCode, config, capabilities) {
    // }
}
