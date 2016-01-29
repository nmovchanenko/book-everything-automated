var ProtractorJasmineHtmlReporter = require('protractor-jasmine2-html-reporter');

module.exports = function() {
    return {
        getReporter: function() {
            "use strict";
            return new ProtractorJasmineHtmlReporter({
                savePath: 'reports/',
                screenshotsFolder: 'images',
                takeScreenshotsOnlyOnFailures: true,
                consolidate: true,
                consolidateAll: true
            });
        }
    };
};