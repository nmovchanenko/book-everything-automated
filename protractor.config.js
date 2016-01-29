const config = require('./config');

exports.config = {

    baseUrl: config.get('env:live'),

    specs: [
        'test/smoke/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    allScriptsTimeout: 100000,

    framework: 'jasmine2',

    onPrepare: function() {
        var htmlReporter = require('./lib/htmlReporter.js')(),
            log4jsProtractor = require('./lib/log4jsProtractor.js')();

        // define custom configured logger as global
        global.logger = log4jsProtractor.getConfiguredLogger();

        jasmine.getEnv().addReporter(htmlReporter.getReporter());
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