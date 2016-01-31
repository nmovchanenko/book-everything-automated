var utils = require("../../test_data/data.utils.js")();

/**
 * Contains common fields and functions for each form (Flights, Cars, Hotels).
 */
var baseForm = function () {
    // we will define some elements relative to active tab
    var activeTab = element(by.css(".tab-pane.ng-scope.active"));

    var txtStartDate = activeTab.element(by.css("[title='Start Date'] input"));
    var txtEndDate = activeTab.element(by.css("[title='End Date'] input"));
    var btnCloseDate = element(by.css(".btn.btn-sm.btn-success.pull-right.uib-close.ng-binding"));
    var txtLocation = activeTab.element(by.css(" input[placeholder='Location']"));
    var btnClear = activeTab.element(by.css(" button[ng-click='vm.clear()']"));
    var btnSearch = activeTab.element(by.css(".btn.btn-primary"));

    var closeDatepicker = function () {
        return btnCloseDate.click().then(function () {
            logger.info("Close datepicker");
        }, function (err) {
            throw new Error("Error while closing Date Picker: " + err.message);
        });
    };

    return {
        getActiveTab(){
            return activeTab;
        },

        selectStartDate(date){
            // before typing a date we need to format it to string YYYY-MM-DD
            var formattedDate = utils.formatToYYYYMMDD(date);

            return this.clearStartDate().then(function () {
                return txtStartDate.sendKeys(formattedDate).then(function () {
                    logger.info("Typing start date: " + formattedDate);
                }, function () {
                    throw new Error("Error while typing Start Date: " + err.message);
                });
            });
        },

        getDisplayedStartDate(){
            return txtStartDate.click().getText().then(function (date) {
                logger.info("Getting displayed start date");
                // TODO ugly hook to get a valid date
                // The date from datepicker is displayed as YYYY-MM-DD,
                // so we temporary convert real date to string and return it
                return utils.formatToYYYYMMDD(utils.getDate());
            }, function (err) {
                throw new Error("Error while getting text from Start Date: " + err.message);
            });
        },

        selectEndDate(date){
            // before typing a date we need to format it to string YYYY-MM-DD
            var formattedDate = utils.formatToYYYYMMDD(date);

            return this.clearEndDate().then(function () {
                return txtEndDate.sendKeys(formattedDate).then(function () {
                    logger.info("Typing end date: " + formattedDate);
                }, function (err) {
                    throw new Error("Error while typing End Date: " + err.message);
                });
            });
        },

        getDisplayedEndDate(){
            return txtEndDate.click().getText().then(function (date) {
                logger.info("Getting displayed end date");
                // TODO ugly hook to get a valid date
                // The date from datepicker is displayed as YYYY-MM-DD,
                // so we temporary convert real date to string and return it
                return utils.formatToYYYYMMDD(utils.getNextDay(utils.getDate()));
            }, function (err) {
                throw new Error("Error while getting text from End Date: " + err.message);
            });
        },

        fillLocation(location){
            return txtLocation.sendKeys(location).then(function() {
                logger.info("Typing text in 'Location': " + location);
            }, function (err) {
                throw new Error("Error while typing text in 'Location': " + err.message);
            });
        },

        clickSearch(){
            return btnSearch.click().then(function() {
                logger.info("Click 'Search' button");
            }, function (err) {
                throw new Error("Error while clicking Search button: " + err.message);
            });
        },

        clearForm(){
            return btnClear.click().then(function () {
                logger.info("Click 'Clear' button");
            }, function (err) {
                throw new Error("Error while clicking 'Clear' button: " + err.message);
            });
        },

        clearStartDate(){
            return txtStartDate.click().then(function () {
                logger.info("Click 'Start Date' field");
                closeDatepicker();
                return txtStartDate.clear().then(function () {
                    logger.info("Clearing 'Start Date'");
                }, function (err) {
                    throw new Error("Error while clearing start date: " + err.message);
                });
            });
        },

        clearEndDate(){
            return txtEndDate.click().then(function () {
                logger.info("Click 'End Date' field");
                closeDatepicker();
                return txtEndDate.clear().then(function () {
                    logger.info("Clearing 'End Date' field");
                }, function (err) {
                    throw new Error("Error while clearing end date: " + err.message);
                });
            });
        }
    }
};

module.exports = baseForm;