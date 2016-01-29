var log4js = require('log4js');

module.exports = function() {
    return {
        getConfiguredLogger: function() {
            log4js.configure({
                "appenders": [{
                    "type": "log4js-protractor-appender"
                }]
            });
            return log4js.getLogger();
        }
    }
};