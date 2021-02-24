exports.config = {
  runner: 'local',

  specs: ['./features/**/*.feature'],

  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 1,
      browserName: '',
      appiumVersion: '1.20.2',
      platformName: 'Android',
      platformVersion: '8.0',
      deviceName: 'emulator-5554',
      app:
        'D:/React-native/fhmcoxkbb-ojtbatch8/android/app/build/outputs/apk/debug/app-debug.apk',
    },
  ],

  logLevel: 'info',

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ['appium'],
  port: 4723,

  framework: 'cucumber',

  reporters: ['spec'],

  cucumberOpts: {
    require: ['./features/step-definitions/steps.js'],

    backtrace: false,

    requireModule: [],

    dryRun: false,

    failFast: false,

    format: ['pretty'],

    snippets: true,

    source: true,

    profile: [],

    strict: false,

    tagExpression: '',

    timeout: 60000,

    ignoreUndefinedDefinitions: false,
  },

  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */

  /**
   * Gets executed before a worker process is spawned and can be used to initialise specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {String} cid      capability id (e.g 0-0)
   * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {[type]} specs    specs to be run in the worker process
   * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
   * @param  {[type]} execArgv list of string arguments passed to the worker process
   */

  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */

  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {Object}         browser      instance of created browser/device session
   */

  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */

  /**
   * Runs before a Cucumber feature
   */

  /**
   * Runs before a Cucumber scenario
   */

  /**
   * Runs before a Cucumber step
   */

  /**
   * Runs after a Cucumber step
   */

  /**
   * Runs after a Cucumber scenario
   */

  /**
   * Runs after a Cucumber feature
   */

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */

  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */

  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */

  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */

  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
};
