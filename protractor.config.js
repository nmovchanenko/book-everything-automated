const config = require('./config');

exports.config = {

    baseUrl: config.get('env:live'),

    suites: {
        smoke: 'tests/smoke/*.js',
        mat: 'tests/mat/*/*.js',
        at: 'tests/at/*/*.js'
    },

    capabilities: {
        browserName: 'chrome'
    },

    multiCapabilities: [],

    allScriptsTimeout: 100000,

    /*plugins: [{
        path: 'node_modules/protractor/plugins/console',
        failOnWarning: false,
        failOnError: true,
        logWarnings: false
    }],*/

    framework: 'jasmine2',

    onPrepare: function() {
        var htmlReporter = require('./lib/htmlReporter.js')(),
            log4jsProtractor = require('./lib/log4jsProtractor.js')();

        // define configured logger as global
        global.logger = log4jsProtractor.getConfiguredLogger();

        jasmine.getEnv().addReporter(htmlReporter.getReporter());

        beforeEach(function () {
            logger.info("--- start test ----");
        });
    },

    params: {
        login: {
            user: 'Jane',
            password: '1234'
        }
    },

    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 100000
    }
};