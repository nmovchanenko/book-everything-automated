/**
 * Contains common fields and functions for each form (Flights, Cars, Hotels).
 */
var baseForm = function () {
    var startDate = element(by.css("bk-datepicker[title='Start Date'] input"));
    var endDate = element(by.css("bk-datepicker[title='End Date'] input"));
    var btnSearch = element(by.css(".btn.btn-primary"));
    var stars = "★★★★★";

    return {
        selectStartDate(date){
            return startDate.sendKeys(date).then(function() {
                element(by.css(".btn.btn-sm.btn-success.pull-right.uib-close.ng-binding")).click();
            });
        },

        selectEndDate(date){
            return endDate.sendKeys(date).then(function() {
                element(by.css(".btn.btn-sm.btn-success.pull-right.uib-close.ng-binding")).click();
            });
        },

        clickSearch(){
            return btnSearch.click();
        }
    }
};


module.exports = baseForm;