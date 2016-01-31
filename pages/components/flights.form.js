var baseForm = require("./base.form")(),
    activeTab = require("./base.form")().getActiveTab();

/**
 * Contains fields and functions related to Flights form
 */
var flightsForm = function () {
    var txtCityFrom = element(by.css("input[placeholder='From']"));
    var labelFrom = activeTab.element(by.css(" [title='From'] label"));
    var txtCityTo = element(by.css("input[placeholder='To']"));
    var labelTo = activeTab.element(by.css(" [title='To'] label"));
    var listboxFrom = activeTab.element(by.css(" [title='From'] .dropdown-menu.ng-isolate-scope"));
    var listboxTo = activeTab.element(by.css(" [title='To'] .dropdown-menu.ng-isolate-scope"));

    return {
        fillFrom(cityFrom){
            logger.info("Type text in 'From': " + cityFrom);
            return txtCityFrom.sendKeys(cityFrom);
        },

        fillTo(cityTo){
            logger.info("Type text in 'To': " + cityTo);
            return txtCityTo.sendKeys(cityTo);
        },

        getEnteredValues(){
            var actualValues = {};

            baseForm.getDisplayedStartDate().then(function(start) {
                actualValues.startDate = start;
            });

            baseForm.getDisplayedEndDate().then(function (end) {
                actualValues.endDate = end;
            });

            txtCityFrom.getText().then(function (cityFromValue) {
                actualValues.cityFrom = cityFromValue;
            });

            txtCityTo.getText().then(function (cityToValue) {
                actualValues.cityTo = cityToValue;
            });

            return actualValues;
        },

        getDisplayedLabels(){
            var labels = {};

            labelFrom.getText().then(function (text) {
                labels.fromInput = text;
            });

            labelTo.getText().then(function (text) {
                labels.toInput = text;
            });

            return labels;
        },

        getListboxOptionsFrom(){
            return listboxFrom;
        },

        getListboxOptionsTo(){
            return listboxTo;
        }
    }
};

module.exports = flightsForm;