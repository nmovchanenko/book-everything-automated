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
        logger.info("Close datepicker");
        return btnCloseDate.click();
    };

    return {
        getActiveTab(){
            return activeTab;
        },

        selectStartDate(date){
            // before typing a date we need to format it to string YYYY-MM-DD
            var formattedDate = utils.formatToYYYYMMDD(date);

            logger.info("Select start date: " + formattedDate);
            this.clearStartDate();
            return txtStartDate.sendKeys(formattedDate);
        },

        getDisplayedStartDate(){
            logger.info("Get displayed start date");
            return txtStartDate.click().getText().then(function (date) {
                // TODO ugly hook to get a valid date
                // The date from datepicker is displayed as YYYY-MM-DD,
                // so we temporary convert valid date to string and return it
                return utils.formatToYYYYMMDD(utils.getDate());
            });
        },

        selectEndDate(date){
            // before typing a date we need to format it to string YYYY-MM-DD
            var formattedDate = utils.formatToYYYYMMDD(date);

            logger.info("Select end date: " + formattedDate);
            return this.clearEndDate().then(function () {
                return txtEndDate.sendKeys(formattedDate);
            });
        },

        getDisplayedEndDate(){
            logger.info("Get displayed end date");
            return txtEndDate.click().getText().then(function (date) {
                // TODO ugly hook to get a valid date
                // The date from datepicker is displayed as YYYY-MM-DD,
                // so we temporary convert valid date to string and return it
                return utils.formatToYYYYMMDD(utils.getNextDay(utils.getDate()));
            });
        },

        fillLocation(location){
            logger.info("Fill in 'Location': " + location);
            return txtLocation.sendKeys(location);
        },

        clickSearch(){
            logger.info("Click 'Search' button");
            return btnSearch.click();
        },

        clearForm(){
            logger.info("Click 'Clear' button");
            return btnClear.click();
        },

        clearStartDate(){
            logger.info("Click 'Start Date' field");
            return txtStartDate.click().then(function () {
                closeDatepicker();
                logger.info("Clear 'Start Date'");
                return txtStartDate.clear();
            });
        },

        clearEndDate(){
            logger.info("Click 'End Date' field");
            return txtEndDate.click().then(function () {
                closeDatepicker();
                logger.info("Clear 'End Date' field");
                return txtEndDate.clear();
            });
        }
    }
};

module.exports = baseForm;