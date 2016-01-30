/**
 * Contains common fields and functions for each form (Flights, Cars, Hotels).
 */
var baseForm = function () {
    // we will define some elements relative to active tab
    var activeTab = element(by.css(".tab-pane.ng-scope.active"));

    var startDate = activeTab.element(by.css("bk-datepicker[title='Start Date'] input"));
    var endDate = activeTab.element(by.css("bk-datepicker[title='End Date'] input"));
    var btnCloseDate = element(by.css(".btn.btn-sm.btn-success.pull-right.uib-close.ng-binding"));
    var txtLocation = activeTab.element(by.css(" input[placeholder='Location']"));
    var btnSearch = activeTab.element(by.css(".btn.btn-primary"));

    var closeDatepicker = function () {
        return btnCloseDate.click().then(function() {
            logger.info("Datepicker was closed");
        });
    };

    return {
        getActiveTab(){
            return activeTab;
        },

        selectStartDate(date){
            logger.info("Select start date: " + date);
            return startDate.sendKeys(date).then(function() {
                // need close a datepicker - it overlaps other inputs
                return closeDatepicker();
            });
        },

        selectEndDate(date){
            logger.info("Select end date: " + date);
            return endDate.sendKeys(date).then(function() {
                // need close a datepicker - it overlaps other inputs
                return closeDatepicker();
            });
        },

        fillLocation(location){
            logger.info("Fill in location: " + location);
            return txtLocation.sendKeys(location);
        },

        clickSearch(){
            logger.info("Click search button");
            return btnSearch.click();
        }
    }
};

module.exports = baseForm;